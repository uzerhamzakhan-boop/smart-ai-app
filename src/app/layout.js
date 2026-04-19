export const metadata = {
  title: "Smart AI App",
  description: "AI App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}