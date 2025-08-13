import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Description } from "@radix-ui/react-dialog";

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

            {/* {Footer} */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>
                  Made with ❤️ by Sumit
                </p>
              </div>
            </footer>
            
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
