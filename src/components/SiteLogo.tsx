import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="text-lg font-semibold tracking-wide text-navy transition-colors hover:text-lantern focus-visible:outline-offset-4 sm:text-xl"
      aria-label="ひともし ホーム"
    >
      ひともし
    </Link>
  );
}
