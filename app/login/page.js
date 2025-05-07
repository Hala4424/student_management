"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa"; // ✅ Icon imports
import "../styles/login.css";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/statistics");
    }
  }, [status, router]);

  useEffect(() => {
    const err = searchParams.get("error");
    if (err === "CredentialsSignin") {
      setError("Invalid username or password.");
    } else if (err) {
      setError("An error occurred. Please try again.");
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/statistics",
      redirect: true,
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <div className="text-red-600 mb-2 text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="username"
            placeholder="Username"
            required
            className="input-field"
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="input-field"
          />
          <br />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <hr />
        <button
          onClick={() => signIn("github", { callbackUrl: "/statistics" })}
          className="login-btn github-btn"
        >
          <FaGithub className="inline-block mr-2" /> Login with GitHub
        </button>
        <button
          onClick={() => signIn("google", { callbackUrl: "/statistics" })}
          className="login-btn google-btn"
        >
          <FaGoogle className="inline-block mr-2" /> Login with Google
        </button>
      </div>
    </div>
  );
}
