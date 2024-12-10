import React, { useState } from 'react';
import { ToggleButton as MuiToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

const StyledToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  border: '0',
  borderRadius: `${theme.customStyles.borderRadiusSmall}!important`, // přetížení default stylů pro tuto komponentu - pro první button
  padding: '1rem 4rem',
  fontWeight: 500,
  fontSize: '1.6rem',
  lineHeight: '2rem',
  textTransform: 'none',
  color: theme.palette.primary.main,
  '&.Mui-selected': {
    background: theme.customStyles.gradientButton,
    color: '#FFFFFF',
    fontWeight: 700,
    margin: '-0.1rem 0 -0.1rem -0.1rem', // hack pro překrytí borderu wrapu buttonů dle Figma
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
        border: `0.1rem solid ${theme.customStyles.borderColorLight}`,
        borderRadius: theme.customStyles.borderRadiusSmall,
        marginBottom: '4rem',
      })}
    >
      <StyledToggleButton value='dogs'>For Dogs</StyledToggleButton>
      <StyledToggleButton value='humans'>For Humans</StyledToggleButton>
    </ToggleButtonGroup>
  );
};
