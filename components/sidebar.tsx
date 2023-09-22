"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {usePathname} from "next/navigation";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Router,
  Settings,
  VideoIcon,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/dashboard",
    color: "text-violet-500",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/dashboard",
    color: "text-pink-700",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/dashboard",
    color: "text-orange-300",
  },
  {
    label: "Music Generator",
    icon: Music,
    href: "/dashboard",
    color: "text-emerald-500",
  },{
    label: "Code Generator",
    icon: Code,
    href: "/dashboard",
    color: "text-green-700",
  },{
    label: "Settings",
    icon: Settings,
    href: "/dashboard",
    color: "text-emerald-500",
  },
];

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src={Logo} />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            GYANI BABA
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium 
              cursor-pointer hover:text-white hover:bg-white/10 rounded-lg 
              transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
