"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { signOut } from "@/app/actions";

export function UserMenu() {
  const { t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        <DropdownMenuLabel>{t.navbar.myAccount}</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href="/profile">
            {t.navbar.profile}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-0" asChild>
          <form action={signOut}>
            <Button
              size="sm"
              variant="destructive"
              className="rounded-sm w-full"
              type="submit"
            >
              {t.navbar.logout}
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
