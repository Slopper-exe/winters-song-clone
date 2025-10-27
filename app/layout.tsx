/* This is app/layout.js */

export const metadata = {
  title: "Winter's Song - The Music of Westeros",
  description: "GoT-themed hackathon clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* --- Global Styles --- */}
        <style jsx global>{`
          /* Reset and basic styles */
          html,
          body {
            padding: 0;
            margin: 0;
            /* Using a more "epic" serif font for the theme */
            font-family: Georgia, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            background-color: #000;
            color: #fff;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
          
          a:hover {
            text-decoration: underline;
            color: #75d1ff; /* Icy Blue */
          }

          * {
            box-sizing: border-box;
          }

          button {
            font-family: inherit;
            cursor: pointer;
          }
        `}</style>
      </body>
    </html>
  );
}
