"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { User } from "@/types/user";
import { getUser } from "@/api/user";

interface AuthContextType {
  permissions: string[];
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  hasPermission: (perm: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      console.log("Running useEffect on authProvider");
      try {
        const data = await getUser();
        setUser(data);
        setPermissions(data.permissions || []);
        setIsAuthenticated(true);
      } catch {
        setUser(null);
        setPermissions([]);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);

  const hasPermission = (perm: string) => permissions.includes(perm);

  return (
    <AuthContext.Provider
      value={{
        permissions,
        isAuthenticated,
        isLoading,
        user,
        hasPermission,
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
