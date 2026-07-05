"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { navItems } from "@/lib/navigation";
import { SiteLogo } from "./SiteLogo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-navy/8 bg-dawn/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5 sm:px-6">
          <SiteLogo />

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-lantern/10 focus-visible:outline-offset-2"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">メニュー</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M5 5L17 17M17 5L5 17"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M3 6H19"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 11H19"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 16H19"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-navy/30"
            aria-label="メニューを閉じる"
            onClick={close}
          />

          <nav
            id={drawerId}
            className="absolute right-0 top-0 flex h-full w-[min(100%,18rem)] flex-col bg-dawn shadow-[-4px_0_24px_rgba(26,36,51,0.12)]"
            aria-label="サイトメニュー"
          >
            <div className="flex h-14 items-center justify-between border-b border-navy/8 px-5">
              <span className="text-sm font-medium tracking-wider text-lantern">
                MENU
              </span>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-lantern/10"
                aria-label="メニューを閉じる"
                onClick={close}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col px-3 py-4">
              {navItems.map(({ href, label }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : href.startsWith("/#")
                      ? pathname === "/" && false
                      : pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block rounded-lg px-3 py-3.5 text-base transition-colors hover:bg-lantern/10 focus-visible:outline-offset-2 ${
                        isActive
                          ? "font-medium text-lantern"
                          : "text-navy hover:text-lantern"
                      }`}
                      onClick={close}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
