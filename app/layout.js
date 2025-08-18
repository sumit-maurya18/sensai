import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Description } from "@radix-ui/react-dialog";
import Footer from "@/components/footer"; // Importing the Footer component
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadta = {
  title:"SensAI - AI Career Coach",
  Description:"Description of SensAI - AI Career Coach",
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:"dark"
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

            {/* {Header} */}

            <Header/>
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* {Footer} */}
            
            <Footer/>
            
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
