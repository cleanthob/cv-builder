import Logo from "@/assets/logo.svg";
import { NavItems } from "@/components/pages/dashboard/nav-items";
import { UserDropdown } from "@/components/pages/dashboard/user-dropdown";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { auth } from "@/lib/auth";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await auth();
  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_minmax(0,1fr)] bg-background text-foreground">
      <aside className="flex h-screen flex-col border-r border-border bg-sidebar">
        <div className="flex w-full items-center justify-center border-b border-border p-6">
          <Logo className="max-w-40" />
        </div>

        <div className="flex-1 overflow-y-auto">
          <NavItems />
        </div>

        <div className="mt-auto flex w-full items-center justify-between gap-2 border-t border-border px-3 py-4">
          <div className="min-w-0 flex-1">
            <UserDropdown user={session?.user} />
          </div>
          <ThemeToggle />
        </div>
      </aside>

      <main className="h-screen overflow-y-auto p-6">
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
