import Logo from "./logo";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <footer className="flex-grow text-center text-gray-500 text-sm ">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link
            className="underline hover:text-primary"
            href="https://ahmadalrai.com"
          >
            Ahmad Alrai
          </Link>
          . All rights reserved.
        </p>
      </footer>
      <div className="md:ml-auto  justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Link
          href="/privacy-policy"
          className="text-sm underline-offset-4 hover:underline rounded-md px-3"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-and-conditions"
          className="text-sm underline-offset-4 hover:underline rounded-md px-3"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
}
