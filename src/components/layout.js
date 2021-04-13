/** @jsx jsx */
import React from 'react'
import { Themed, useColorMode, jsx, Flex, NavLink } from "theme-ui";
import Footer from './footer';

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <React.Fragment>
      <header sx={{ paddingX: 4}}>
        <Flex as="nav" p={2}
        sx={{
          "@media only screen and (min-width: 40em)": {
            display: "none",
          },
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: "999",
        justifyContent: "space-around",
        backgroundColor: "background",
        boxShadow: "0px -2px 4px rgba(0,0,0,0.2)",
        textAlign: "center",
        alignItems: 'center',
        }}
        >
          <NavLink href="/" alt="Home" p={2} sx={{ display: "block",}}><span role="img" aria-label="Home" sx={{ width: "100%", display: "inline-block", fontSize: "4" }}>🏠</span>Home</NavLink>
          <Themed.div sx={{ height: "24px", backgroundColor: "secondary", width: "1px", }}></Themed.div>
          <NavLink href="/categories" alt="Home" p={2} sx={{ display: "block" }}><span role="img" aria-label="Categories" sx={{ width: "100%", display: "inline-block", fontSize: "4" }}>🍴</span>Categories</NavLink>
          <Themed.div sx={{ height: "24px", backgroundColor: "secondary", width: "1px", }}></Themed.div>
          <NavLink href="/cuisines" alt="Home" p={2} sx={{ display: "block" }}><span role="img" aria-label="Cuisines" sx={{ width: "100%", display: "inline-block", fontSize: "4" }}>🌏</span>Cuisines</NavLink>
          <Themed.div sx={{ height: "24px", backgroundColor: "secondary", width: "1px", }}></Themed.div>
          <NavLink href="/browse" alt="Home" p={2} sx={{ display: "block" }}><span role="img" aria-label="Browse" sx={{ width: "100%", display: "inline-block", fontSize: "4" }}>🔎</span>Browse</NavLink>

        </Flex>
        <Flex as="nav" p={2} sx={{
          backgroundColor: "background",
          "@media only screen and (max-width: 40em)": {
            display: "none"
          } }}>
              <NavLink href="/" alt="Home" p={2}>Home</NavLink>
              <NavLink href="/categories" alt="Categories" p={2}>Categories</NavLink>
              <NavLink href="/cuisines" alt="Cuisines" p={2}>Cuisines</NavLink>
              <NavLink href="/browse" alt="Browse" p={2}>Browse</NavLink>
          <div
            sx={{
              position: "absolute",
              right: "0",
              marginRight: 4
            }}
          >
            <span sx={{ display: "inline-block", marginRight: 3, verticalAlign: "sub"}}>
              {colorMode === "default" ? "Light" : "Dark"} mode
          </span>
            <button
              sx={{
                border: "none",
                borderRadius: "10px",
                textAlign: colorMode === "default" ? "left" : "right",
                width: "50px",
                padding: 0,
                height: "20px",
                transition: "all 0.3s ease",
              }}
              onClick={(e) => {
                setColorMode(colorMode === "default" ? "dark" : "default");
              }}
            >
              <span
                sx={{
                  display: "inline-block",
                  borderRadius: "10px",
                  backgroundColor: "primary",
                  width: "20px",
                  height: "20px",
                }}
              >
                &nbsp;
            </span>
            </button>
          </div>
        </Flex>
      </header>
      <main sx={{ paddingX: 4,}}>{children}</main>
<Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;
