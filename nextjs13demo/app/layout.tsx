/* eslint-disable @next/next/no-head-element */

import "../styles/globals.css"
import Header from "./Header"
import TextBackground from "./TextBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Header />
        <TextBackground />
        {children}
      </body>
    </html>
  );
}
