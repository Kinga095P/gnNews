import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector, useAppDispatch } from "../hooks/useTypeSelector";
import { getSelectedCountry } from "../features/posts/countrySlice";
import poland from "../images/poland.png"
import germany from "../images/germany.png"
import portugal from "../images/portugal.png"
import france from "../images/france.png"
import spain from "../images/spain.png"
import ukraine from "../images/ukraine.png"
import unitedStates from "../images/united-states.png"
import unitedKingdom from "../images/united-kingdom.png"



type Anchor = 'top' | 'left' | 'bottom' | 'right';
type IKeyValue = { [key: string]: string };

/** Menu with countries to select */
export default function MenuCountrySelect() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const selectedLanguage: string = useAppSelector(state => state.languageSliceReducer.value);

    const countryPl: IKeyValue = { "Pl": "Polska", "De": "Niemcy", "Pt": "Portugalia", "Fr": "Francja", "Es": "Hiszpania", "Ua": "Ukraina", "Us": "Stany Zjednoczone", "Gb": "Wielka Brytania" };
    const countryEn: IKeyValue = { "Pl": "Poland", "De": "German", "Pt": "Portugal", "Fr": "France", "Es": "Spain", "Ua": "Ukraine", "Us": "United States", "Gb": "United Kingdom" };

    const countryList: IKeyValue = selectedLanguage === "en" ? countryEn : countryPl;

    const dispatch = useAppDispatch();

    const handleClick = (value: string): void => {
        let countryCode: string = countryGenerator(value);
        dispatch(getSelectedCountry(countryCode));
    }

    let countryGenerator = (value: string): string => {
        let countryCode: string = "";
        const country: IKeyValue = selectedLanguage === "en" ? countryEn : countryPl;

        switch (value) {
            case country["Pl"]:
                countryCode = "pl"
                break;
            case country["De"]:
                countryCode = "de"
                break;
            case country["Pt"]:
                countryCode = "pt"
                break;
            case country["Fr"]:
                countryCode = "fr"
                break;
            case country["Es"]:
                countryCode = "es"
                break;
            case country["Ua"]:
                countryCode = "ua"
                break;
            case country["Us"]:
                countryCode = "us"
                break;
            case country["Gb"]:
                countryCode = "gb"
                break;
        }
        return countryCode;
    }

    let iconsGenerator = (value: string) => {
        const country: IKeyValue = selectedLanguage === "en" ? countryEn : countryPl;

        switch (value) {
            case country["Pl"]:
                return <img src={poland} width="40" height="40" />
            case country["De"]:
                return <img src={germany} width="40" height="40" />
            case country["Pt"]:
                return <img src={portugal} width="40" height="40" />
            case country["Fr"]:
                return <img src={france} width="40" height="40" />
            case country["Es"]:
                return <img src={spain} width="40" height="40" />
            case country["Ua"]:
                return <img src={ukraine} width="40" height="40" />
            case country["Us"]:
                return <img src={unitedStates} width="40" height="40" />
            case country["Gb"]:
                return <img src={unitedKingdom} width="40" height="40" />
        }

    }

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {Object.values(countryList).map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleClick(text)}>
                            <ListItemIcon>
                                {iconsGenerator(text)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box >
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <MenuIcon sx={{ color: "#777a72" }} onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}