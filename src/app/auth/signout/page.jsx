"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    async function handleSignOut() {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged out successfully");
            router.push("/");
            router.refresh();
          },
          onError: () => {
            toast.error("Logout failed");
            router.push("/");
          },
        },
      });
    }

    handleSignOut();
  }, [router]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-xl border border-base-300 max-w-md w-full">
        <div className="card-body text-center">
          <span className="loading loading-spinner loading-lg text-primary mx-auto"></span>
          <h1 className="text-2xl font-bold mt-4">Signing you out...</h1>
          <p className="text-base-content/70">
            Please wait while we securely log you out.
          </p>
        </div>
      </div>
    </section>
  );
}