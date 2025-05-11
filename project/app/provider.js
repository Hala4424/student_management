'use client';
import { SessionProvider } from "next-auth/react";

// This component wraps the SessionProvider around children
export default function SessionProviderWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
