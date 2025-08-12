import "../basehub.config";
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { basehub } from "basehub";
import { Toolbar } from "basehub/next-toolbar";
import { Providers } from "./providers";
import { footerFragment, headerFragment } from "../lib/basehub/fragments";
import { Newsletter } from "./_sections/newsletter";
import { themeFragment } from "../context/basehub-theme-provider";
import { PlaygroundSetupModal } from "../components/playground-notification";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
});

export const dynamic = "force-static";
export const revalidate = 30;



export default async function RootLayout({ children }: { children: React.ReactNode }) {
//   const [
//     {
//       site: { footer, settings, header },
//     },
//   ] = await Promise.all([
//     basehub().query({
//       site: {
//         settings: {
//           theme: themeFragment,
//           logo: {
//             dark: {
//               url: true,
//               alt: true,
//               width: true,
//               height: true,
//               aspectRatio: true,
//               blurDataURL: true,
//             },
//             light: {
//               url: true,
//               alt: true,
//               width: true,
//               height: true,
//               aspectRatio: true,
//               blurDataURL: true,
//             },
//           },
//           showUseTemplate: true,
//         },
//         header: headerFragment,
//         footer: footerFragment,
//       },
//     }),
//   ]);

  let playgroundNotification = null;

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-[--surface-primary] text-[--text-primary] dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <Providers>
          {/* Header */}
          <Header  />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          {/* <Newsletter newsletter={footer.newsletter} /> */}
          {/* Footer */}
          {/* <Footer footer={footer} logo={settings.logo} /> */}
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  generator: "v0.dev",
};
