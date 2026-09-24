import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 px-2 text-left"
          >
            <Avatar className="h-7 w-7 shrink-0">
              <AvatarImage src="https://github.com/cleanthob.png" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <span className="truncate">Cleantho B</span>
          </Button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[--radix-dropdown-menu-trigger-width]"
      >
        <DropdownMenuGroup>
          <Link href="/dashboard/account" className="block">
            <DropdownMenuItem className="gap-2">
              <SquareUser size={16} />
              Configurações da conta
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem className="gap-2 text-red-500">
            <LogOut size={16} />
            Sair
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
