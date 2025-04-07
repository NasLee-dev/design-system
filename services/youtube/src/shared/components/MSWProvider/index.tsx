"use client";

import { useEffect } from "react";

export function MSWProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const initMocks = async () => {
        const { initMocking } = await import("../../mocks");
        await initMocking();
      };
      initMocks();
    }
  }, []);

  return <>{children}</>;
}
