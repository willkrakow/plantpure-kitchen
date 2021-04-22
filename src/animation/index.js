/** @jsx jsx */
import { keyframes } from '@emotion/react'

export const fadeIn = keyframes({ 0: { opacity: 0.0 }, 100: { opacity: 1.0 } })


export const fadeUp = keyframes({
    0: {
        opacity: 0,
        height: "100vh",
    },
    100: {
        opacity: 1,
        height: "60vh",
    }
})