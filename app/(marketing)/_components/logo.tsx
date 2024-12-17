import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Logo() {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        width={40}
        height={40}
        alt="logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>{APP_NAME}</p>
    </div>
  );
}
