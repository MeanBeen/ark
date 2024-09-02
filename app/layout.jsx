import Foot from "@components/Footer";
import Nav from "@components/Nav";
import { GlobalStyle } from "@styles/globals";

export const metadata = {
  title: "ARK LEGAL SOLUTIONS",
  description: "Lawyer & Law Firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: "0px", margin: "0px" }}>
        <GlobalStyle />

        <Nav />
        {children}
        <Foot />
      </body>
    </html>
  );
}
