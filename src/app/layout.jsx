import "./globals.css";

export const metadata = {
  title: "Anil Janjal | Full Stack Web & Mobile Developer",
  description:
    "Professional portfolio and resume of Anil Janjal, a Full Stack Web and Mobile Application Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
