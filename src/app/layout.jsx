import { Poppins, Plus_Jakarta_Sans } from 'next/font/google'
import localFont from "next/font/local"
import './globals.css'
import SiteNavbar from '@/components/SiteNavbar'
import SiteFooter from '@/components/SiteFooter'
import ProgressbarProvider from '@/components/ProgressbarProvider'




const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
})
const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta_sans"
})

const avenir = localFont({
  src: "../font/Avenir Regular.ttf",
  variable: "--font-avenir_regular"
})


export const metadata = {
  title: 'Creative Agency ',
  description: 'A agency for build your business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${jakarta_sans.variable} ${avenir.variable}`}>
        <ProgressbarProvider>
          <SiteNavbar />
          {children}
          <SiteFooter />
        </ProgressbarProvider>
      </body>
    </html>
  )
}
