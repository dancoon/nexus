import React from "react";
import Link from "next/link";
import {
  Bell,
  Home,
  FolderGit2,
  Menu,
  MessageCircleCode,
  Search,
  Users,
  CalendarSearch,
  Newspaper
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../navbar/logo";
import ProfileDropDownMenu from "./profile-menu";

const sidemenuItems = [
  {
    title: "Home",
    icon: Home,
    hrefString: "/home",
  },
  {
    title: "Developers",
    icon: Users,
    hrefString: "/developers",
  },
  {
    title: "Projects",
    icon: FolderGit2,
    hrefString: "/projects",
  },
  {
    title: "Events",
    icon: CalendarSearch,
    hrefString: "/events",
  },
  {
    title: "Articles",
    icon: Newspaper,
    hrefString: "/articles",
  },
  {
    title: "Threads",
    icon: MessageCircleCode,
    hrefString: "/threads",
  },
];

const Header = ({
  currentItem,
  setCurrentItem,
}: {
  currentItem: string;
  setCurrentItem: (current: string) => void;
}) => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Logo />
            {sidemenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.hrefString}
                className={`flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}
                onClick={() => setCurrentItem(item.title)}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {currentItem !== "Dashboard" && (
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={`Search for ${currentItem.toLowerCase()}...`}
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        )}
      </div>
      <Bell className="h-5 w-5" />
      <ProfileDropDownMenu />
    </header>
  );
};

export default Header;
