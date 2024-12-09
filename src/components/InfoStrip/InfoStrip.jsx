import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.sunnyBgr.main,
  borderRadius: theme.customStyles.borderRadiusSmall,
  borderRadius: `${theme.customStyles.borderRadiusSmall} ${theme.customStyles.borderRadiusSmall} ${theme.customStyles.borderRadiusSmall} 0`,
  padding: '16px',
  boxShadow: theme.customStyles.boxShadow,
  textAlign: 'center',
  marginBottom: '24px',
}));

/**
 * Komponenta pro zobrazení informace pro návštěvníka.
 */
const InfoStrip = ({ text }) => {
  return (
    <StyledBox>
      <Typography
        sx={{
          fontWeight: 'bold',
        }}
      >
        {text}
      </Typography>
    </StyledBox>
  );
};

export default InfoStrip;
