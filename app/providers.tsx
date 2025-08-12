import { ThemeProvider } from "next-themes";
import { BaseHubThemeProvider } from "../context/basehub-theme-provider";
import { TooltipProvider } from "../common/tooltip";
import { BaseHubTheme } from "../context/basehub-theme-provider";

export function Providers({ children }: { children: React.ReactNode; }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">

      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
