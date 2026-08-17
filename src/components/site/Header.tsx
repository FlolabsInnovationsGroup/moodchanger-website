"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/nav";
import { site } from "@/lib/site";
import { ChevronDown } from "@/components/icons";
import ThemeToggle from "./ThemeToggle";

/**
 * Fired when the "Wearables" / "Smart Devices" trigger is pressed while already
 * on that page. The showcase pages listen for it to close any open detail view
 * and return to the top, exactly as `data-all-wearables` did in wearables.js.
 */
export const SHOWCASE_HOME_EVENT = "mc:showcase-home";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // `body.nav-open` drives the mobile drawer + burger animation in globals.css
  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  // A route change always dismisses the drawer. Adjusting during render (rather
  // than in an effect) avoids a frame where the new page shows the old drawer.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setNavOpen(false);
  }

  const isCurrent = (href: string) => pathname === href;

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} data-header>
      <div className="header-row">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative brand mark, sized by CSS */}
          <img className="mark" src="/assets/flomadlogo.svg" alt="" />
          <span className="word">
            Mood<span className="a">Changer</span>.ai
          </span>
        </Link>

        <button
          className="burger"
          type="button"
          aria-label="Menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <i />
          <i />
          <i />
        </button>

        {/* Any link tap dismisses the mobile drawer, as in athletes.js `initNav`. */}
        <nav
          className="nav"
          aria-label="Primary"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setNavOpen(false);
          }}
        >
          <div className="item">
            <a className="caipo-pill" href="https://www.caipo.ai/" target="_blank" rel="noopener">
              CAIPO
            </a>
          </div>

          {navItems.map((item) => {
            const current = isCurrent(item.href);
            const classes = [
              "item",
              item.submenu ? "has-menu" : "",
              current ? "active" : "",
            ]
              .filter(Boolean)
              .join(" ");

            if (!item.submenu) {
              return (
                <div className={classes} key={item.href}>
                  {current ? (
                    <a href="#top">{item.label}</a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </div>
              );
            }

            return (
              <div className={classes} key={item.href}>
                {current ? (
                  <button
                    className="trigger"
                    type="button"
                    onClick={() => {
                      setNavOpen(false);
                      window.dispatchEvent(new CustomEvent(SHOWCASE_HOME_EVENT));
                    }}
                  >
                    {item.label}
                    <ChevronDown className="chev" />
                  </button>
                ) : (
                  <Link className="trigger" href={item.href}>
                    {item.label}
                    <ChevronDown className="chev" />
                  </Link>
                )}

                <div className={`menu${item.wide ? " scroll" : ""}`}>
                  {item.submenu.map((link) =>
                    // On its own page the submenu links stay in-page anchors, so the
                    // showcase/carousel can intercept them instead of navigating.
                    current ? (
                      <a href={link.href} key={link.href}>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={`${item.href}${link.href}`} key={link.href}>
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            );
          })}

          <div className="item cta-item">
            <a className="nav-cta" href={site.demoMailto}>
              Request a demo
            </a>
          </div>
          <div className="item theme-item">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
