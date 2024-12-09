import React from 'react';
import { Box } from '@mui/material';
import { Img } from 'react-image';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

const ProductImageWrap = styled(Box)(({ theme }) => ({
  boxShadow: theme.customStyles.boxShadow,
  background: theme.customStyles.gradientImage,
  borderRadius: theme.customStyles.borderRadius,
  paddingBottom: '100%',
  width: '100%',
  position: 'relative',
}));

/**
 * Komponenta pro zobrazení obrázku produktu v dlaždici.
 */
const ProductImage = ({ src, alt }) => {
  const theme = useTheme();

  return (
    <ProductImageWrap>
      <Img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        loader={<div>Loading...</div>}
      />
    </ProductImageWrap>
  );
};

export default ProductImage;
