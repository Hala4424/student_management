'use client';
import { useSession, signIn } from "next-auth/react";
import StatisticsPage from "./statistics/page"; 

export default function ProtectedStatisticsPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    signIn(); // redirects to /login automatically
    return null;
  }

  return (
    <>
      <p style={{ padding: "1rem", background: "#f0f0f0" }}>
        Welcome, {session.user.name} (Role: {session.user.role || "N/A"})
      </p>
      <StatisticsPage />
    </>
  );
}
