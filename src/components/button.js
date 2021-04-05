/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = (props) => (
    <button
        sx={{
            border: "none",
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
                backgroundColor: "hsla(173, 93%, 27%, 20%)",
                color: "secondary",
            },
            "&:focus": {
                outline: "none",
            },
        }}    {...props}>
        {props.children}
    </button>
)

export default Button