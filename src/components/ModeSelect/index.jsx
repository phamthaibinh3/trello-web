import React from 'react'
import { useColorScheme } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkMode';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    const handleChange = (event) => {
        const selectedMode = event.target.value
        console.log(selectedMode);
        setMode(selectedMode)
        // setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="label-select-dar-light-mode">Mode</InputLabel>
            <Select
                labelId="label-select-dar-light-mode"
                id="label-select-dar-light-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <LightModeIcon fontSize="small" /> Light
                    </div>
                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DarkModeOutlinedIcon fontSize="small" /> Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SettingsSystemDaydreamIcon fontSize="small" /> System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default ModeSelect