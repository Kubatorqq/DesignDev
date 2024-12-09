import React, { useState } from 'react';
import { ToggleButton as MuiToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

const StyledToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  border: '0',
  borderRadius: theme.customStyles.borderRadiusSmall,
  padding: '10px 40px',
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: '20px',
  textTransform: 'none',
  color: theme.palette.primary.main,
  '&.Mui-selected': {
    background: theme.customStyles.gradientButton,
    color: '#FFFFFF',
    fontWeight: 700,
    margin: '-1px 0 -1px -1px', // hack pro překrytí borderu dle Figma
    '&:hover': {
      background: theme.customStyles.gradientButton,
      boxShadow: theme.customStyles.boxShadow,
    },
  },
}));

/**
 * Komponenta pro zobrazení filtrování produktů podle určení.
 */
export const ToggleButton = () => {
  const [alignment, setAlignment] = useState('dogs');

  const handleChange = (_, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={(theme) => ({
        border: `1px solid ${theme.customStyles.borderColorLight}`,
        borderRadius: theme.customStyles.borderRadiusSmall,
        marginBottom: '40px',
      })}
    >
      <StyledToggleButton value='dogs'>For Dogs</StyledToggleButton>
      <StyledToggleButton value='humans'>For Humans</StyledToggleButton>
    </ToggleButtonGroup>
  );
};
