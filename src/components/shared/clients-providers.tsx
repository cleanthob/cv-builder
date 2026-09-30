"use client";

import { useTanstackQuery } from "@/lib/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { ReactNode, Suspense, useEffect } from "react";
import { toast, Toaster } from "sonner";
import { ThemeProvider } from "./theme-provider";

const CreditsToast = () => {
  const searchParams = useSearchParams();
  const successCheckoutParam = searchParams.get("success");

  useEffect(() => {
    if (successCheckoutParam === "true") {
      toast.success(
        "Compra realizada com sucesso! Seus créditos foram adicionados à sua conta.",
      );
    }
  }, [successCheckoutParam]);

  return null;
};

type ClientProviderProps = {
  children: ReactNode;
};

export const ClientProviders = ({ children }: ClientProviderProps) => {
  const queryClient = useTanstackQuery();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Suspense>
          <CreditsToast />
        </Suspense>
        {children}
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
