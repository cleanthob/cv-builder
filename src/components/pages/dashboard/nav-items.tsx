"use client";

import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { Newspaper, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();
  const navItems = [
    {
      label: "Currículos",
      icon: Newspaper,
      path: "/dashboard/resumes",
    },
    {
      label: "Configurações da conta",
      icon: SquareUser,
      path: "/dashboard/account",
    },
  ];

  return (
    <nav className="flex w-full flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.path);

        return (
          <Link key={item.path} href={item.path} className="block">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 rounded-md px-3 text-left transition-colors",
                isActive && "bg-accent text-accent-foreground",
              )}
            >
              <item.icon size={16} />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
