import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import { ToggleButton } from '../ToggleButton/ToggleButton';

/**
 * Komponenta pro zobrazení dlaždice produktu.
 */
const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/products')
      .then((response) => {
        return setProducts(response.data);
      })
      .catch((error) => {
        console.error('Data se nepodařilo načíst:', error);
        setProducts([]);
      });
  }, []);

  return (
    <Box
      sx={{
        padding: 2,
        textAlign: 'center',
      }}
    >
      <ToggleButton />
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ProductItem {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
