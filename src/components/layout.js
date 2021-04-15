/** @jsx jsx */
import React from 'react'
import { Themed, useColorMode, jsx, Flex, NavLink } from "theme-ui";
import Footer from './footer';
import Seo from './seo';
import MobileHeader from './mobileHeader';
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            emoji
            name
            url
          }
        }
      }
    }
  `)

  const { menuLinks } = data.site.siteMetadata;
  return (
    <React.Fragment>
      <Seo />
      <header sx={{ paddingX: 4 }}>
        <MobileHeader />
        <MobileMenu links={menuLinks} />
        <DesktopMenu links={menuLinks} />
      </header>
      <main sx={{ paddingX: 3 }}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

const ColorSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div
      sx={{
        position: "absolute",
        right: "0",
        marginRight: 4
      }}
    >
      <span sx={{ display: "inline-block", marginRight: 3, verticalAlign: "sub" }}>
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
  )
}

const DesktopMenu = ({links}) => {
  return (
    <Flex as="nav" p={2} sx={{
      backgroundColor: "background",
      display: ['none', 'flex', 'flex']
    }}>
      {links.map((link, index) => (
        <NavLink key={index} href={link.url} alt={link.name} p={2}>{link.name}</NavLink>
      ))}
      <ColorSwitch />
    </Flex>
  )
}

const MobileMenu = ({links}) => {
  return (
    <Flex as="nav" p={2}
      sx={{
        display: ['flex', 'none', 'none'],
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
      {links.map((link, index) => (
          <NavLink key={index} href={link.url} alt={link.name} p={2} sx={{ display: "block", }}>
          <span role="img" aria-label={link.name} sx={{ width: "100%", display: "inline-block", fontSize: 1 }}>
            {link.emoji}
          </span>
          {link.name}
        </NavLink>
      ))}
    </Flex>
  )
}
