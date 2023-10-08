import React from 'react';
import { Grid, Skeleton, Box } from '@mui/material';

const Loading = () => {
  const loader = [1, 2, 3, 4, 5];

  return (
    <div>
      <Grid container spacing={2}>
        {loader.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
            <Box sx={{ p: 2 }}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton variant="text" width="80%" height={24} mt={2} />
              <Skeleton variant="text" width="60%" height={24} mt={1} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Loading;