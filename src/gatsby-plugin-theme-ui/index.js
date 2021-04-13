/** @jsx jsx */

// example base theme from @theme-ui/presets
import '@fontsource/lato/300.css'
import '@fontsource/lato/700.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400.css'

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Lato, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Raleway, system-ui, -apple-system, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
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
  colors: {
    text: "#565656",
    background: "#ffffff",
    primary: "#60bf00",
    secondary: "#058677",
    accent: "#5cf2cc",
    muted: "#8e8e8e",
    darker: "#2f2f2f",
    alwayslight: "#ffffff",
    boxoutline: "rgba(120, 130, 150, 0.2)",
    hoversecond: "hsla(173, 100%, 30%, 30%)",
    modes: {
      dark: {
        text: "hsl(210, 50%, 96%)",
        background: "hsl(230, 25%, 18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(230, 100%, 80%)",
        accent: "hsl(162, 80%, 58%)",
        purple: "hsl(290, 100%, 80%)",
        muted: "hsla(30, 10%, 60%, 90%)",
        darker: "hsl(210, 50%, 60%)",
        alwayslight: "#ffffff",
        boxoutline: "hsl(210, 50%, 20%)",
        hoversecond: "hsla(230, 90%, 70%, 100%)"
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
      px: 2,
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
      color: "darker",
      mb: 4,
      px: 2,
      mt: 1,
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
      textTransform: "uppercase",
      letterSpacing: 2,
      mb: 2,
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
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    p: {
      variant: "text.body",
      fontSize: 2,
      mt: 2,
      mb: 1,
    },
    li: {
      variant: "text.body",
      fontSize: 2,
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
