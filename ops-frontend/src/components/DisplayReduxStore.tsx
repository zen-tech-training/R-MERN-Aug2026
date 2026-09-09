import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, Typography, Divider } from '@mui/material';

// 1. Define a global state interface that matches your current and future store structure
interface RootState {
  counter: {
    value: number;
  };
  login?: {
    isLoggedIn: boolean;
    user: { name: string; email: string } | null;
  };
  orderDetails?: {
    items: any[];
    total: number;
  };
}

export const DisplayReduxStore: React.FC = () => {
  // 2. Grab the entire Redux state
  const entireState = useSelector((state: RootState) => state);

  return (
    <Box sx={{ maxWidth: 600, margin: '20px auto', padding: 2 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 3, 
          backgroundColor: '#1e1e1e', // Dark mode background for code contrast
          color: '#39ff14'            // Matrix-green or neon-blue text for high visibility
        }}
      >
        <Typography variant="h6" component="h2" sx={{ color: '#fff', mb: 1 }}>
          Live Redux Store Monitor
        </Typography>
        <Typography variant="body2" sx={{ color: '#aaa', mb: 2 }}>
          Updates automatically when the state changes.
        </Typography>
        
        <Divider sx={{ backgroundColor: '#444', mb: 2 }} />

        {/* 3. Render the store state formatted as clean JSON */}
        <Box 
          component="pre" 
          sx={{ 
            fontFamily: 'monospace', 
            fontSize: '0.875rem', 
            overflowX: 'auto',
            whiteSpace: 'pre-wrap', 
            wordWrap: 'break-word',
            margin: 0
          }}
        >
          {JSON.stringify(entireState, null, 2)}
        </Box>
      </Paper>
    </Box>
  );
};
