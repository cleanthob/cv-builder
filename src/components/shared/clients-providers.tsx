"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./theme-provider";
import { useTanstackQuery } from "@/lib/tanstack-query";

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
        {children}
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
