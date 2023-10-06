import { Sora } from "@next/font/google";
import Head from "next/head";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

//components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Hamza's Portfolio" />
        <meta name="keywords" content="Portfolio, Hamza's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logom.png" />
        <link rel="apple-touch-icon" href="/logom.png" />
      </Head>
      <div
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
