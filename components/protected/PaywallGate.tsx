"use client";

import React from "react";
import { PaywallDisplay } from "./PaywallDisplay";
import { useAuth } from "@/context/AuthContext";

interface PaywallGateProps {
  children: React.ReactNode;
  requiredPermission: string;
  featureName?: string;
}

export function PaywallGate({
  children,
  requiredPermission,
  featureName = "this premium arena",
}: PaywallGateProps) {
  const { isAuthenticated, isLoading, hasPermission } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="font-black animate-pulse tracking-widest text-black">
          LOADING SECURITY GATE...
        </p>
      </div>
    );
  }

  // If the user has access, safely render content directly
  if (isAuthenticated && hasPermission(requiredPermission)) {
    return <>{children}</>;
  }

  // If unauthorized, render the blurred visual trap layout
  return (
    <div className="relative w-full">
      {/* 
        1. Preview Backdrop Container 
        pointer-events-none completely blocks mouse interactions, clicks, and text selections
      */}
      <div className="select-none pointer-events-none blur-[6px] opacity-40 mix-blend-overlay">
        {children}
      </div>

      {/* 2. Absolute Centered Floating Paywall Overlay */}
      <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-play-paper/20 backdrop-blur-[3px]">
        <div className="w-full max-w-lg">
          <PaywallDisplay featureName={featureName} />
        </div>
      </div>
    </div>
  );
}
