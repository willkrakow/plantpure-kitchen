/** @jsx jsx */
import React from 'react'
import { useColorMode, jsx, Flex, NavLink } from "theme-ui";

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <React.Fragment>
      <header sx={{ paddingX: 4}}>
        <div
          sx={{
            position: "absolute",
            right: 0,
            top: 4,
            textAlign: "center",
            margin: 2,
          }}
        >
          <span sx={{ display: "inline-block", width: "100%" }}>
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
        <Flex as="nav">
              <NavLink href="/" alt="Home" p={2}>Home</NavLink>
              <NavLink href="/categories" alt="Categories" p={2}>Categories</NavLink>
              <NavLink href="/cuisines" alt="Cuisines" p={2}>Cuisines</NavLink>
              <NavLink href="/browse" alt="Browse" p={2}>Browse</NavLink>
        </Flex>
      </header>
      <main sx={{ paddingX: 4,}}>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
