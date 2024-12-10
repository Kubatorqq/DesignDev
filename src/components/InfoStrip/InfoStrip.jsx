import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.sunny.main,
  borderRadius: theme.customStyles.borderRadiusSmall,
  borderRadius: `${theme.customStyles.borderRadiusSmall} ${theme.customStyles.borderRadiusSmall} ${theme.customStyles.borderRadiusSmall} 0`,
  padding: '1.6rem',
  boxShadow: theme.customStyles.boxShadow,
  textAlign: 'center',
  marginBottom: '2.4rem',
}));

/**
 * Komponenta pro zobrazení informace pro návštěvníka.
 */
const InfoStrip = ({ text }) => {
  return (
    <StyledBox>
      <Typography
        variant='body1'
        sx={{
          fontWeight: 'bold',
          fontSize: '1.6rem',
        }}
      >
        {text}
      </Typography>
    </StyledBox>
  );
};

export default InfoStrip;
