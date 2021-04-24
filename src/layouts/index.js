/** @jsx jsx */
import React from 'react'
import { useColorMode, jsx, Flex, Link, useThemeUI,  } from "theme-ui";
import Footer from './footer';
import Seo from '../components/seo';
import MobileHeader from './mobileHeader';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'
import Search from '../components/search';

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

  const context = useThemeUI()
  React.useEffect(() => {
    const theme = context.theme;
    document.body.style.backgroundImage = `linear-gradient(to bottom right, ${theme.colors.background}, ${theme.colors.backgroundEnd})`
  }, [context])

  const { menuLinks } = data.site.siteMetadata;
  return (
    <React.Fragment>
      <Seo />
      <header sx={{ paddingX: 4, maxWidth: "100vw", margin: 'auto' }}>
        <MobileHeader />
        <MobileMenu links={menuLinks} />
        <DesktopMenu links={menuLinks} />
      </header>
      <main sx={{ paddingX: 4, position: 'relative', maxWidth: "100vw", margin: "auto"}}>
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
        display: 'flex',
        justifySelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        placeItems: 'center',
        marginRight: '3',
        marginLeft: 'auto',
        fontSize: '2',
      }}
    >
      <span sx={{ display: "inline-block", marginRight: 3, verticalAlign: "sub", color: 'secondary', fontWeight: 'bold' }}>
        {colorMode === "default" ? "Light" : "Dark"} mode
          </span>
      <button
        sx={{
          border: "none",
          borderRadius: "10px",
          textAlign: colorMode === "default" ? "left" : "right",
          width: "50px",
          padding: 0,
          cursor: colorMode === "default" ? "e-resize" : "w-resize",
          height: "20px",
          transition: "primary",
          '&:hover': {
            'span': {
              transform: 'scale(1.3)',
            }
          }
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
            transition: "primary",
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
        <Link
          variant="nav"
          as={GatsbyLink}
          key={index}
          to={link.url}
          alt={link.name}
        >
          {link.name}
        </Link>
      ))}
      <ColorSwitch />
      <Search />
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
