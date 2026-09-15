"use client";

import {
  type MouseEvent,
  type ReactNode,
  forwardRef,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import {
  requestSectionScroll,
  scrollToSection,
  type SectionId,
} from "@/lib/scroll";

type SectionLinkProps = {
  section: SectionId;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  "aria-current"?: "page" | undefined;
};

const SectionLink = forwardRef<HTMLAnchorElement, SectionLinkProps>(
  function SectionLink(
    { section, className, children, onNavigate, "aria-current": ariaCurrent },
    ref,
  ) {
    const pathname = usePathname();
    const router = useRouter();
    const lenis = useLenis();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onNavigate?.();

      if (pathname === "/") {
        scrollToSection(section, lenis);
        return;
      }

      requestSectionScroll(section);
      router.push("/");
    };

    return (
      <Link
        ref={ref}
        href="/"
        onClick={handleClick}
        className={className}
        aria-current={ariaCurrent}
      >
        {children}
      </Link>
    );
  },
);

export default SectionLink;
