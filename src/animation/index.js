/** @jsx jsx */
import { keyframes } from '@emotion/react'

export const fadeIn = keyframes({ 0: { opacity: 0.0 }, 100: { opacity: 1.0 } })


export const fadeUp = keyframes({
    from: {
        opacity: 0,
        height: "100vh",
    },
    to: {
        opacity: 1,
        height: "60vh",
    }
})

export const moveUp = keyframes({
    from: {
      top: '1000px',
      opacity: '0.0',
    },
    to: {
      opacity: '1.0',
      top: '0px',
    },
})

export const moveRight = keyframes({
    from: {
        left: "-1000px",
    },
    to: {
        left: "0px",
    }
})

export const moveLeft = keyframes({
    from: {
        left: "1000px",
    },
    to: {
        left: '0px',
    }
})