"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo3-removebg-preview.png";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
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
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image-generator",
    color: "text-pink-700",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/video-generator",
    color: "text-orange-300",
  },
  {
    label: "Music Generator",
    icon: Music,
    href: "/music-generator",
    color: "text-emerald-500",
  },
  {
    label: "Code Generator",
    icon: Code,
    href: "/code-generator",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-grey-500",
  },
];

const cssStyles = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(720deg); // Rotate for 720 degrees (2 full turns) for a slower effect
    }
  }
`;


const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-9 h-9 mr-4">
            <Image fill alt="logo" src={Logo} 
            // className="animate-spin"
             />
          </div>
          <h1 className={cn("text-1xl font-bold", montserrat.className)}>
            GYANI BABA
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
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
