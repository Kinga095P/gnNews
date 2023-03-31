import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

/** Simple Bottom Navigation Component */
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems:"flex-end"}}>
    <BottomNavigation
        sx={{ orientation: "vertical", backgroundColor: "transparent", flexDirection: "column", height: "unset" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
    >
        <BottomNavigationAction sx={{ marginBottom: "2rem" }} label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction sx={{ marginBottom: "2rem" }} label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
    </BottomNavigation>
        </Box >
    );
}