//File: src/components/Counter.tsx
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';
import type { AppDispatch, RootState } from '../store';
// Import Material UI components
import { Box, Button, Typography, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      {/* MUI Typography replaces <h1> */}
      <Typography variant="h3" component="h1" gutterBottom>
        Counter: {count}
      </Typography>

      {/* MUI Stack handles spacing and alignment for the buttons */}
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          color="error"
          startIcon={<RemoveIcon />}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
      </Stack>
    </Box>
  );
}



// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from '../features/counterSlice';
// import type { AppDispatch, RootState } from '../store';

// export function Counter() {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch<AppDispatch>();

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter: {count}</h1>
//       <div>
//         <button onClick={() => dispatch(decrement())} style={btnStyle}>
//           - Decrement
//         </button>
//         <button onClick={() => dispatch(increment())} style={btnStyle}>
//           + Increment
//         </button>
//       </div>
//     </div>
//   );
// }

// const btnStyle = {
//   padding: '10px 20px',
//   fontSize: '16px',
//   margin: '5px',
//   cursor: 'pointer',
// };
