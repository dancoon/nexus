import Link from "next/link";
import {
  CalendarSearch,
  FolderGit2,
  Home,
  Newspaper,
  Users,
  MessageCircleCode,
} from "lucide-react";

import Logo from "../navbar/logo";
import Header from "./header";

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

export function SideMenu({
  children,
  currentItem,
  setCurrentItem,
}: Readonly<{
  children: React.ReactNode;
  currentItem: string;
  setCurrentItem: (current: string) => void;
}>) {
  return (
    <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] md:fixed md:inset-0 md:overflow-hidden">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Logo />
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {sidemenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.hrefString}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    currentItem === item.title ? "bg-muted" : ""
                  }`}
                  onClick={() => setCurrentItem(item.title)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
