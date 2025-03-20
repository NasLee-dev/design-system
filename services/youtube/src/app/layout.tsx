import { Metadata } from "next";
import "@/src/shared/styles";
import { ThemeScript } from "../shared/components/ThemeScript";
import { QueryProvider } from "../shared/components/QueryProvider";

export const metadata: Metadata = {
  title: "Youtube",
  description: "재미있는 유튜브",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeScript />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
