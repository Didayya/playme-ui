"use client";

import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermission?: string;
  fallbackRoute?: string;
}

export function ProtectedRoute({
  children,
  requiredPermission,
  fallbackRoute = "/play",
}: ProtectedRouteProps) {

  const { isAuthenticated, isLoading, hasPermission } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until loading finishes to run checks
    if (isLoading) return;

    // Check 1: User is completely unauthorized
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    // Check 2: User is authorized but misses required permissions
    if (requiredPermission && !hasPermission(requiredPermission)) {
      router.replace(fallbackRoute); // or another route for permission errors
    }
  }, [
    isLoading,
    isAuthenticated,
    requiredPermission,
    hasPermission,
    router,
    fallbackRoute,
  ]);

  // Display a placeholder loader during verification to avoid UI layout flashing
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading page...</p>
      </div>
    );
  }

  // Prevent flash of content if checks fail before redirection executes
  if (
    !isAuthenticated ||
    (requiredPermission && !hasPermission(requiredPermission))
  ) {
    return null;
  }

  return <>{children}</>;
}
