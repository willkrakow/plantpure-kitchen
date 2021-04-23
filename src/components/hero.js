/** @jsx jsx */
import React from 'react'
import { jsx, Themed, Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import { fadeIn } from '../animation'


const Hero = (props) => {
    const { videoFile, title, subtitle, cta } = props;

    React.useEffect(() => {
        if (videoFile) {
            const promise = mediaRef.current.pause()
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
            <Themed.div
            {...props}
            sx={{
                maxHeight: "60vh",
                animationName: `${fadeIn}`,
                animationDuration: '2s',
                animationFillMode: 'backwards',
                overflow: "hidden",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "wrap",
                flexDirection: "column",
            }}>
                <div sx={{ ml: 4, px: 2, maxWidth: 'hero', margin: 'auto', textAlign: 'center' }}>
                    <Themed.h1 sx={{ color: "alwayslight", display: "inline-block" }}>{title}</Themed.h1>
                    <br />
                    <Themed.h3 sx={{color: "alwayslight", display: "inline-block" }}>{subtitle}</Themed.h3>
                    <Link as={GatsbyLink} variant="a.primary" to={cta.link} alt={cta.text}>
                        {cta.text}
                    </Link>
                </div>
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
            </Themed.div>
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