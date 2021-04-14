/** @jsx jsx */
import React from 'react'
import { jsx, Themed } from 'theme-ui'
import { Link } from 'gatsby'
import { GreenButton } from './button'
import PropTypes from 'prop-types'

const Hero = (props) => {
    const { videoFile, title, subtitle, cta, emoji } = props;
    React.useEffect(() => {
        if (videoFile) {
            const promise = mediaRef.current.play()
            if (promise !== undefined) {
                promise.then(_ => {
                    console.log("Video played")
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }, [videoFile])

    const mediaRef = React.useRef(null);
    return (
        <section sx={{ height: "60vh", position: "relative", width: "100vw", left: -4 }}>
            <div sx={{
                maxHeight: "60vh",
                overflow: "hidden",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "column",
            }}>
                {cta.position === "top" && (
                    <Link to={cta.link} alt={cta.text} sx={{ display: "inline-block", alignSelf: "flex-start", px: 4, color: "text", py: 2, textDecoration: "none" }}><span aria-label="Back" role="img" sx={{ display: "inline-block", mr: 2 }}>⬅️</span>Back</Link>
                )}
                {emoji && <span sx={{ fontSize: 6, alignSelf: "flex-start", ml: 4 }} aria-label={title} role="img">{emoji}</span>}
                <Themed.h1 sx={{ px: 4, pt: 1, pb: 0, my: 0, color: "alwayslight", display: "inline-block", width: "100%" }}>{title}</Themed.h1>
                <Themed.h3 sx={{ px: 4, py: 1, color: "alwayslight", display: "inline-block", width: "100%" }}>{subtitle}</Themed.h3>
                {cta.position === "bottom" && (
                    <Link to={cta.link} alt={cta.text} sx={{ display: "inline-block", alignSelf: "flex-start", padding: 4, pt: 0 }}>
                        <GreenButton>{cta.text}</GreenButton>
                    </Link>
                )}
                {videoFile && (
                    <video muted={true} ref={mediaRef} autoPlay={false} loop={true}
                        sx={{
                            width: ["250vw", "150vw", "100vw"],
                            overflow: "hidden",
                            position: "absolute",
                            top: "0",
                            zIndex: "-1",
                        }}
                    >
                        <source src={videoFile} type="video/mp4" />
                    </video>
                )}
            </div>
        </section>
    )
}

export default Hero;

Hero.defaultProps = {
    title: "PlantPure Kitchen",
    subtitle: "100% whole food, plant-based recipes for the entire family.",
    cta: {
        position: 'bottom',
    },
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cta: PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string,
        position: PropTypes.oneOf(['top', 'bottom'])
    }),
    emoji: PropTypes.string,
}