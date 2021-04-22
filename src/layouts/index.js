/** @jsx jsx */
import React from 'react'
import { useColorMode, jsx, Flex } from "theme-ui";
import Footer from './footer';
import Seo from '../components/seo';
import MobileHeader from './mobileHeader';
import { useStaticQuery, graphql, Link } from 'gatsby'
import Button from '../components/button';

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
      <header sx={{ paddingX: 5, maxWidth: "100vw", margin: 'auto' }}>
        <MobileHeader />
        <MobileMenu links={menuLinks} />
        <DesktopMenu links={menuLinks} />
      </header>
      <main sx={{ paddingX: 4, position: 'relative', maxWidth: "100vw", margin: "auto" }}>
        {children}
      </main>
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
        display: 'block',
        justifySelf: 'flex-end',
        marginRight: '0',
        marginLeft: 'auto'
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
    <Flex as="nav" py={3} sx={{
      backgroundColor: "background",
      display: ['none', 'flex', 'flex'],
    }}>
      {links.map((link, index) => (
        <Link key={index} to={link.url} alt={link.name} p={2} sx={{ display: 'block' }}><Button sx={{ border: 'none', display: 'block' }}>{link.name}</Button></Link>
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
          <Link key={index} to={link.url} alt={link.name} p={2} sx={{ display: "block", }}>
          <span role="img" aria-label={link.name} sx={{ width: "100%", display: "inline-block", fontSize: 1 }}>
            {link.emoji}
          </span>
          {link.name}
        </Link>
      ))}
    </Flex>
  )
}