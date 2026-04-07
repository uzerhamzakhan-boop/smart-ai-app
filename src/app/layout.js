export const metadata = {
    title: "AI Doc App",
    description: "Document Q&A AI App",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }