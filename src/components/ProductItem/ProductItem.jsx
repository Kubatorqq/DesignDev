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
  fontSize: '2.4rem',
  lineHeight: '2.8rem',
}));

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  fontSize: '1.8rem',
  lineHeight: '2.4rem',
  textAlign: 'left',
}));

const Reviews = styled(Link)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.secondary.main,
  lineHeight: '2.4rem',
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
  fontSize: '2.4rem',
  lineHeight: '2.8rem',
}));

const Wrap = styled(Box)(({ theme }) => ({
  padding: 0,
  margin: '.8rem',
  border: 0,
  boxShadow: theme.customStyles.boxShadow,
  borderRadius: theme.customStyles.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const InnerWrap = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '2.1rem 1.6rem 1.6rem 1.6rem',
});

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

  const RatingBlock = ({ rating }) => {
    return (
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          fontWeight: 500,
        }}
      >
        <Rating
          value={rating}
          readOnly
          sx={{
            fontSize: '3.4rem',
            mr: '1.7rem',
            '& .MuiRating-icon path': {
              fill: theme.palette.secondary.main,
            },
          }}
        />
        {rating}
      </Box>
    );
  };

  return (
    <Wrap>
      <ProductImage src={image} alt={name} />
      <InnerWrap>
        <Title variant='h6'>{name}</Title>
        <Description>{description}</Description>
        <RatingBlock rating={rating} />
        {reviews && <Reviews href={reviewLink}>{reviews} reviews</Reviews>}
        <Price variant='h6' color='textPrimary' sx={{ mb: 2 }}>
          {price}
        </Price>
        <Button component='a' href={detailLink} fullWidth variant='contained'>
          Add to Cart
        </Button>
      </InnerWrap>
    </Wrap>
  );
};

export default ProductItem;
