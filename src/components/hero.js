/** @jsx jsx */
import React from 'react'
import { jsx, Themed, Link } from 'theme-ui'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { fadeIn } from '../animation'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = (props) => {
    const { title, subtitle, cta } = props;
    const data = useStaticQuery(graphql`
    {
      file(name: {eq: "vegan_plate"}) {
        childImageSharp {
          gatsbyImageData(width: 500, quality: 100)
        }
      }
    }
  `)
  console.log(data)
    // React.useEffect(() => {
    //     if (videoFile) {
    //         const promise = mediaRef.current.pause()
    //         if (promise !== undefined) {
    //             promise.then(_ => {
    //                 console.log("Video played")
    //             }).catch(error => {
    //                 console.log(error)
    //             });
    //         }
    //     }
    // }, [videoFile])

    // const mediaRef = React.useRef(null);

    return (
        <React.Fragment>
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
                <div sx={{ ml: 4, px: 2, maxWidth: 'hero', margin: 'auto', textAlign: 'left' }}>
                    <Themed.h1 sx={{ color: "alwayslight", display: "inline-block" }}>{title}</Themed.h1>
                    <br />
                    <Themed.h3 sx={{color: "alwayslight", display: "inline-block" }}>{subtitle}</Themed.h3>
                    <Link as={GatsbyLink} variant="a.primary" to={cta.link} alt={cta.text}>
                        {cta.text}
                    </Link>
                </div>
                <GatsbyImage imgStyle={{
                    WebkitFilter: 'drop-shadow(8px 8px 24px rgba(0,10,15,0.2))',
                    filter: 'drop-shadow(5px 5px 5px rgba(0,10,15,0.2)',
                }} image={data.file.childImageSharp.gatsbyImageData} alt="Vegan plate with sweet potatoes and caramelized onions and mushrooms." />
                {/* {videoFile && (
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
                )} */}
            </Themed.div>
        </section>
        </React.Fragment>
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