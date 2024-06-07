import "./globals.css";

/* the props */
import "open-props/style";

/* optional imports that use the props */
import "open-props/normalize";

// component css styles
import styles from "./layout.module.css";

// next
import type { Metadata } from "next";

// other libraries
import { Analytics } from "@vercel/analytics/react";

// components
import { GlobalContextProvider } from "@/lib/GlobalContext";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";

// assets
import { outfit } from "@/assets/fonts";

// types
interface LayoutProps {
  pagetitle: React.ReactNode;
  exp: React.ReactNode;
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL as string),
  title: "Curious Web Dev: Eager to Learn, Collaborate, and Make a Splash",
  description:
    "Passionate, self-taught web developer with a hunger for knowledge and a proven track record of success. Seeking internship opportunities to gain hands-on experience, collaborate with experienced professionals, and contribute to innovative web projects.",
  authors: [{ name: "Remi" }],
  robots: { index: true, follow: true },
};

export default async function Layout({ pagetitle, exp, children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className={styles["main-grid"]}>
          <div className={styles["main-grid__placehl"]}></div>
          <Header />
          <aside className={styles["aside"]}>
            <MySkills />
          </aside>
          <main className={styles["main"]}>
            <GlobalContextProvider>
              {exp}
              {pagetitle}
              {children}
              <Analytics debug={false} />
            </GlobalContextProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
