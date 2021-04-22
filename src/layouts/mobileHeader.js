/** @jsx jsx */

import { jsx, Themed, useThemeUI } from 'theme-ui'
import { navigate } from '@reach/router'
import { ClearButton } from '../components/button'
const MobileHeader = (props) => {
    const handleBack = () => navigate(-1)
    const handleHome = () => navigate('/')
    const handleSearch = () => console.log('we need to build this')

    const context = useThemeUI()
    const { theme } = context;

    return (
        <div
            {...props}
            sx={{
                boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                position: 'fixed',
                top: "0",
                backgroundColor: "background",
                zIndex: "990",
                left: "0",
                height: theme.space[5],
                right: "0",
                "span": {
                    display: "inline-block",
                    width: "100%",
                    p: 3,
                    fontSize: 3,
                    textAlign: "center",
                },
                display: ['flex', 'none', 'none'],
                alignItems: "center",
            }}
        >
            <ClearButton onClick={handleBack}><span sx={{ fontSize: 5 }} role="img" aria-label="Back">⬅️</span></ClearButton>
            <ClearButton onClick={handleHome}><Themed.h1 sx={{ fontSize: 4 }}>PlantPure</Themed.h1></ClearButton>
            <ClearButton onClick={handleSearch}><span sx={{ fontSize: 5 }} role="img" aria-label="Search" >🔎</span></ClearButton>
        </div>
    )
}

export default MobileHeader

