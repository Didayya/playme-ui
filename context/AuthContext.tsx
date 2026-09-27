"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { getUser } from "@/api/user";
import { User } from "@/types/user";
import axiosInstance, { saveAccessToken, saveRefreshToken } from "@/lib/axios";

interface AuthContextType {
  permissions: string[];
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  hasPermission: (perm: string) => boolean;
  login: (credentials: Record<string, string>) => Promise<boolean>;
  logout: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const verifyUser = async () => {
    try {
      const data = await getUser();
      setUser(data);
      setPermissions(data.permissions || []);
      setIsAuthenticated(true);
    } catch {
      setPermissions([]);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function loadUser() {
      try {
        await verifyUser()
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);

  // Login handler
  const login = async (
    credentials: Record<string, string>,
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/app/auth/login", credentials);

      saveAccessToken(response.data.accessToken);
      saveRefreshToken(response.data.refreshToken);

      await verifyUser(); // Sync state with fresh profile data

      return true;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout handler adapted to use axiosInstance
  const logout = async () => {
    setIsLoading(true);
    try {
      await axiosInstance.post("/api/auth/logout");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setPermissions([]);
      setIsAuthenticated(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const hasPermission = (perm: string) => permissions.includes(perm);

  return (
    <AuthContext.Provider
      value={{
        permissions,
        isAuthenticated,
        isLoading,
        user,
        hasPermission,
        login,
        logout,
        refreshAuth: verifyUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be wrapped in AuthProvider");
  }
  return context;
};
