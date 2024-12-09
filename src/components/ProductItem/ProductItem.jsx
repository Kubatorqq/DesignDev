import React from 'react';
import { Box, Typography, Rating, Link, Button } from '@mui/material';
import ProductImage from '../ProductImage/ProductImage';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { lighten } from '@mui/material/styles';

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '28px',
}));

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  fontSize: '18px',
  lineHeight: '24px',
  textAlign: 'left',
}));

const Reviews = styled(Link)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.secondary.main,
  lineHeight: '24px',
  fontWeight: 'bold',
  transition: 'color 0.250s ease',
  '&:hover': {
    color: lighten(theme.palette.secondary.main, 0.2),
  },
}));

const Price = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '28px',
}));

/**
 * Komponenta pro zobrazení dlaždice produktu.
 */
const ProductItem = ({
  name,
  description,
  rating,
  price,
  image,
  reviewLink,
  detailLink,
  reviews,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 0,
        margin: 1,
        border: 0,
        boxShadow: theme.customStyles.boxShadow,
        borderRadius: theme.customStyles.borderRadius,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <ProductImage src={image} alt={name} />

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '21px 16px 16px 16px',
        }}
      >
        <Title variant='h6'>{name}</Title>

        <Description>{description}</Description>

        <Rating value={rating} readOnly sx={{ mb: 2 }} />

        {reviews && <Reviews href={reviewLink}>{reviews} reviews</Reviews>}

        <Price variant='h6' color='textPrimary' sx={{ mb: 2 }}>
          {price}
        </Price>

        <Button component='a' href={detailLink} fullWidth variant='contained'>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductItem;
