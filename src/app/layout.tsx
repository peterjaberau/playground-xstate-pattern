import { Provider as ChakraProvider } from "./provider"
import { RootProvider } from "#providers"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ overflow: "hidden" }}>
      <body>
        <RootProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </RootProvider>
      </body>
    </html>
  )
}
