'use client';
import { Box, Button, Grid } from '@mui/material';

export default function Home() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <h1>Using Material UI with Next.js 13 and Tailwind</h1>
      <Box className="tw-grid tw-grid-cols-3 tw-gap-2">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>
    </Grid>
  );
}
