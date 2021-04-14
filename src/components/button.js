/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = (props) => (
    <button
        sx={{
            border: "1px solid",
            bordercolor: "secondary",
            cursor: "pointer",
            p: 2,
            display: "inline-block",
            width: "100%",
            my: 0,
            textAlign: "left",
            fontSize: 2,
            backgroundColor: () =>
                props.isactive
                    ? "secondary"
                    : "background",
            color: () =>
                props.isactive
                    ? "background"
                    : "secondary",
            "&:hover": {
                backgroundColor: "hoversecond",
                color: "text",
                borderColor: "transparent",
            },
            "&:focus": {
                outline: "none",
            },
            transition: "all 0.3s ease",
        }}    {...props}>
        {props.children}
    </button>
)

export const GreenButton = (props) => (
    <button
        {...props}
        sx={{
            backgroundColor: "hoversecond",
            color: "alwayslight",
            fontSize: "3",
            border: "none",
            py: 2,
            px: 3,
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0,20,30,0.2)",
            "&:hover": {
                backgroundColor: "secondary"
            },
            transition: "all 0.3s ease",
        }}
    >
        {props.children}
    </button>
)

export default Button;