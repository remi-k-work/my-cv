"use client";

// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// other libraries
import { cn } from "@/lib/utils";

// types
import type { ReactNode } from "react";

interface NavItemProps {
  href: string;
  title: string;
  icon: ReactNode;
  isExternal?: boolean;
  animDelay: number;
}

export default function NavItem({ href, title, icon, isExternal = false, animDelay }: NavItemProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      title={title}
      prefetch={!isExternal}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        "relative isolate",
        "[&>svg]:size-11",
        isActive
          ? "border-foreground [&>svg]:text-foreground transition-colors [&>svg]:size-13"
          : "border-primary-foreground hover:border-accent-foreground hover:scale-110",
      )}
    >
      {icon}
      <span
        className="via-accent-foreground animate-spark-h-l absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-5% to-transparent to-10% bg-size-[800%]"
        style={{ animationDelay: `${-animDelay}s` }}
      />
      <span
        className="via-accent-foreground animate-spark-v-l absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-5% to-transparent to-10% bg-size-[100%_800%] [animation-direction:reverse]"
        style={{ animationDelay: `${-animDelay}s` }}
      />
      <span
        className="via-accent-foreground animate-spark-h-l absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-5% to-transparent to-10% bg-size-[800%] [animation-direction:reverse]"
        style={{ animationDelay: `${-animDelay}s` }}
      />
      <span
        className="via-accent-foreground animate-spark-v-l absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-5% to-transparent to-10% bg-size-[100%_800%]"
        style={{ animationDelay: `${-animDelay}s` }}
      />
    </Link>
  );
}
