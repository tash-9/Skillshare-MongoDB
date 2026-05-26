"use client";

import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <HeroUIProvider>
      {children}

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0f1628",
            color: "#e2e8f0",
            border: "1px solid #1e2a45",
            borderRadius: "12px",
            fontFamily: "Space Grotesk, sans-serif",
          },
          success: {
            iconTheme: { primary: "#6366f1", secondary: "#e2e8f0" },
          },
          error: {
            iconTheme: { primary: "#f87171", secondary: "#e2e8f0" },
          },
        }}
      />
    </HeroUIProvider>
  );
}