import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../hooks/useTypeSelector';
import { getSelectedLanguage } from '../features/posts/languageSlice';

/**Select Language Component */
export default function SelectLanguages() {
    const [language, setLanguage] = React.useState('en');

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getSelectedLanguage(language))
    }, [language])


    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
        const lang: string = event.target.value != null ? event.target.value : "en"
        dispatch(getSelectedLanguage(lang))
    };

    let idLabel: string = language === "en" ? "Language" : "Język"

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{idLabel}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="language"
                    onChange={handleChange}
                >
                    <MenuItem value={"en"}>Angielski</MenuItem>
                    <MenuItem value={"pl"}>Polski</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}