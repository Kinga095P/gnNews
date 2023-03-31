import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { getSelectedDisplayForm } from '../features/posts/selectDisplayFormSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import Tooltip from '@mui/material/Tooltip';
import ControlledPopup from './Popup';


/**Vertical Toggle Buttons Component */
export default function VerticalToggleButtons() {
    const [view, setView] = React.useState('list');
    const [openList, setOpenList] = React.useState(false);
    const [openModule, setOpenModule] = React.useState(false);

    const dispatch = useAppDispatch();

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
        dispatch(getSelectedDisplayForm(nextView));
    };

    const selectedLanguage = useAppSelector(state => state.languageSliceReducer.value);

    const handleListClose = () => {
        setOpenList(false);
    };

    const handleListOpen = () => {
        setOpenList(true);
    };

    const handleModuleClose = () => {
        setOpenModule(false);
    };

    const handleModuleOpen = () => {
        setOpenModule(true);
    };

    const listTitle: string = selectedLanguage === "en" ? "List" : "Lista";
    const tilesTitle: string = selectedLanguage === "en" ? "Tiles" : "Kafelki";

    return (
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="popup" aria-label="popup">
                <ControlledPopup />
            </ToggleButton>
            <Tooltip open={openList} onClose={handleListClose} onOpen={handleListOpen} title={listTitle}>
                <ToggleButton value="list" aria-label="list">
                    <ViewListIcon />
                </ToggleButton>
            </Tooltip>
            <Tooltip open={openModule} onClose={handleModuleClose} onOpen={handleModuleOpen} title={tilesTitle}>
                <ToggleButton value="tiles" aria-label="tiles">
                    <ViewModuleIcon />
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup>
    );
}
