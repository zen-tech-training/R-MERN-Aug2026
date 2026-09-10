// File: src/components/ThemeSwitcher.tsx
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setThemeMode } from '../features/themeSlice';
import type { AppDispatch, RootState } from '../store';
import { Box, Button, Typography, Stack, ButtonGroup } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness6Icon from '@mui/icons-material/Brightness6';

export function ThemeSwitcher() {
  const currentMode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box sx={{ textAlign: 'center', mt: 6, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Current Theme: <span style={{ textTransform: 'capitalize' }}>{currentMode}</span>
      </Typography>

      <Stack spacing={3} alignItems="center">
        {/* Toggle Mode Button */}
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Brightness6Icon />}
          onClick={() => dispatch(toggleTheme())}
        >
          Toggle Theme
        </Button>

        {/* Set Specific Mode Buttons */}
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button 
            startIcon={<LightModeIcon />}
            disabled={currentMode === 'light'}
            onClick={() => dispatch(setThemeMode('light'))}
          >
            Force Light Mode
          </Button>
          <Button 
            startIcon={<DarkModeIcon />}
            disabled={currentMode === 'dark'}
            onClick={() => dispatch(setThemeMode('dark'))}
          >
            Force Dark Mode
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
