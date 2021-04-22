/**@jsx jsx */
import React from 'react'
import { Grid, jsx } from 'theme-ui'

const Test = () => (
    <React.Fragment>
    <Grid columns={1}  sx={{ height: "600px", width: "100%", rowGap: "0" }}>
        <div sx={{ backgroundColor: "secondary", height: "", width: "100%" }}></div>
        <div sx={{ backgroundColor: "primary", height: "40%", width: "100%" }}></div>
        <div sx={{ backgroundColor: "accent", height: "20%", width: "100%" }}></div>
    </Grid>
    </React.Fragment>
)

export default Test