/** @jsx jsx */

// example base theme from @theme-ui/presets
import '@fontsource/lato/300.css'
import '@fontsource/lato/700.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400.css'
import '@fontsource/dancing-script'

const theme = {
  breakpoints: ["40em", "48em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: '100%',
    hero: '28em',
  },
  fonts: {
    body:
      'Lato, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Raleway, system-ui, -apple-system, sans-serif",
    monospace: "Menlo, monospace",
    stylized: '"Dancing Script", cursive'
  },
  fontSizes: [12, 14, 18, 24, 28, 32, 48, 64, 96],
  fontWeights: {
    light: 200,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  cards: {
    primary: {
      height: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      boxShadow: "small.primary",
      backgroundColor: "background",
      borderRadius: 1,
      transition: 'primary',
    }
  },
  buttons: {
    primary: {
      backgroundColor: "transparent",
      color: "secondary",
      fontWeight: 'bold',
      fontSize: 2,
      borderRadius: 0,
      py: 2,
      px: 3,
      cursor: "pointer",
      boxShadow: 'small.black',
      transition: "primary",
      "&:hover": {
        backgroundColor: "hoversecond",
      },
    },
    secondary: {
      background: 'transparent',
      color: 'secondary',
      fontSize: 2,
      '&:hover': {
        backgroundColor: 'hoversecond',
      },
    },
  },
  layout: {
    container: {
      maxWidth: '100%',
      overflowX: 'hidden',
      my: 5,
      padding: 2,
    }
  },
  links: {
    a: {
      primary: {
        display: "inline-block",
        color: "background",
        fontWeight: "bold",
        fontSize: 2,
        backgroundColor: "accent",
        opacity: '0.8',
        textDecoration: "none",
        textAlign: "center",
        py: 2,
        px: 3,
        transition: "primary",
        "&:hover": {
          opacity: '1.0',
        },
      },
      secondary: {
        display: "inline-block",
        color: "secondary",
        fontWeight: "bold",
        backgroundColor: "transparent",
        textDecoration: "none",
        textAlign: "center",
        fontSize: 2,
        py: 2,
        px: 3,
        "&:hover": {
          backgroundColor: "hoversecond",
        },
        transition: "primary"
      }
      
    },
    nav: {
      display: 'inline-block',
      color: "accent",
      backgroundColor: "transparent",
      textDecoration: "none",
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 2,
      py: 2,
      px: 3,
      mr: 2,
      transition: 'primary',
      '&:hover': {
        backgroundColor: "accent",
        color: "background",
      }
    }
  },
  transitions: {
    primary: 'all 0.4s ease',
  },
  colors: {
    text: "#565656",
    background: "hsl(180, 1%, 99%)",
    backgroundEnd: 'hsl(180, 2%, 96%)',
    primary: "#60bf00",
    secondary: "#058677",
    accent: "hsl(206, 100%, 40%)",
    muted: "#8e8e8e",
    darker: "#2f2f2f",
    alwayslight: "#ffffff",
    boxoutline: "rgba(120, 130, 150, 0.2)",
    hoversecond: "hsla(173, 100%, 30%, 30%)",
    hoveraccent: "hsl(206, 100%, 90%)",
    modes: {
      dark: {
        text: "hsl(210, 50%, 96%)",
        background: "hsl(180, 2%, 18%)",
        backgroundEnd: 'hsl(180, 2%, 3%)',
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(230, 100%, 80%)",
        accent: "hsl(162, 80%, 58%)",
        purple: "hsl(290, 100%, 80%)",
        muted: "hsla(30, 10%, 60%, 90%)",
        darker: "hsl(210, 50%, 60%)",
        alwayslight: "#ffffff",
        boxoutline: "hsl(210, 50%, 20%)",
        hoversecond: "hsl(230deg 78% 73% / 30%)",
      },
    },
  },
  borders: {
    thick: {
      border: "4px solid",
      borderColor: "accent",
    },
    regular: {
      border: "2px solid",
      borderColor: "accent",
    },
    thin: {
      border: "1px solid",
      borderColor: "accent",
    },
  },
  borderWidths: [0, 1, 2, 4, 8],
  radii: [0, 4, 8, 16, 32],
  forms: {
    input: {
      display: 'block',
      flexBasis: '100%',
      border: 'none',
      borderBottom: 'solid',
      borderWidth: 3,
      borderColor: 'secondary',
      borderRadius: 1,
      padding: 2,
      fontSize: 3,
      backgroundColor: 'background',
      color: 'text',
      boxShadow: 'small.secondary',
    }
  },
  shadows: {
    small: {
      secondary: '0 4px 4px rgba(10, 20, 30, 0.2)',
      primary: '0 4px 4px rgba(10, 30, 20, 0.2)',
    },
    medium: {
      secondary: '0 8px 8px rgba(10, 20, 30, 0.2)',
      primary: '0 8px 8px rgba(10, 30, 20, 0.2)',
    },
    large: {
      primary: '0px 10px 6px -4px rgb(10 30 20 / 40%)',
    }
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "darker",
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "text",
    },
    stylized: {
      fontFamily: "stylized",
      lineHeight: "heading",
      fontWeight: "body",
      color: "secondary",
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "text",
    },
    h1: {
      variant: "text.heading",
      fontSize: 6,
      color: "darker",
      mb: 3,
    },
    h2: {
      variant: "text.stylized",
      fontSize: 7,
      mb: 4,
      mt: 1,
      letterSpacing: 1,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
      textTransform: "uppercase",
      letterSpacing: 2,
      mb: 3,
      mt: 2,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
      mb: 2,
      mt: 1,
    },
    h5: {
      variant: "text.heading",
      color: "muted",
      fontSize: 2,
      mt: 1,
      mb: 1
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
      my: 1,
    },
    p: {
      variant: "text.body",
      fontSize: 2,
      color: "text",
      fontWeight: "body",
      mt: 2,
      mb: 1,
    },
    li: {
      variant: "text.heading",
      color: "secondary",
      fontSize: 3,
      mb: 3
    },
    a: {
      color: "secondary",
      fontWeight: "bold",
      textDecoration: "none",
    },
    hr: {
      margin: "auto",
      mb: 4,
      height: "0",
      border: "none",
      borderTop: `1px solid`,
      borderColor: "accent",
      color: "transparent",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
};

export default theme;
