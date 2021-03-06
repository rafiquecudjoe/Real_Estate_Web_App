import Head from "next/head";
import { Box } from "@chakra-ui/react";
import NavBar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Beacon Homes LLC</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <NavBar/>
        <main>{children}</main>
        <Footer/>
      </Box>
    </>
  );
};

export default Layout;
