import "@/app/globals.css";

import { ibm } from "@/utils/font";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="th" className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-500 hover:scrollbar-thumb-neutral-400 scrollbar-thumb-rounded-full">
      <body className={ibm.className}>
        {children}
      </body>
    </html>
  );
}
