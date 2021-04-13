/** @jsx jsx */
import React from 'react'
import CookingVideo from '../videos/video.mp4'
import { jsx, Themed } from 'theme-ui'
import { Link } from 'gatsby'

const Hero = ({props}) => {
    React.useEffect(() => {
        const promise = videoRef.current.play()
        if (promise !== undefined) {
            promise.then(_ => {
                console.log("played")
            }).catch(error => {
                console.log(error)
            });
        }
    }, [])

    const videoRef = React.useRef(null)
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
                <Themed.h1 sx={{ padding: 4, pb: 0, color: "alwayslight", display: "inline-block", width: "100%", mb: "0" }}>PlantPure <span sx={{ color: "primary" }}>Kitchen</span></Themed.h1>
                <Themed.h3 sx={{ padding: 4, color: "alwayslight", display: "inline-block", width: "100%" }}>100% whole food, plant-based<br /> recipes for the entire family.</Themed.h3>
                <Link to="/browse" alt="Browse recipes" sx={{ display: "inline-block", alignSelf: "flex-start", padding: 4, pt: 0 }}>
                    <button
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
                    Browse recipes
                    </button>
                </Link>
                <video muted={true} ref={videoRef}  autoPlay={false} loop={true}
                    sx={{
                        width: ["250vw", "150vw", "100vw"],
                        overflow: "hidden",
                        position: "absolute",
                        top: "0",
                        zIndex: "-1",
                    }}
                >
                    <source src={CookingVideo} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Hero