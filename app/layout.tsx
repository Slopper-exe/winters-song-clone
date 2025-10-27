/* This is app/layout.js */
import './globals.css'; // <-- This tells it to use your new style file

export const metadata = {
  title: "Winter's Song - The Music of Westeros",
  description: "GoT-themed hackathon clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* The old <style jsx global> tag is gone! */}
      </body>
    </html>
  );
}