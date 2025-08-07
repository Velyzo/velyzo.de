import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  SelectChangeEvent,
  Button,
  Menu,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 120,
  '& .MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1, 2),
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  '& .MuiSelect-icon': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

const FlagIcon = styled('span')({
  fontSize: '1.2em',
  marginRight: '8px',
});

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

interface LanguageSelectorProps {
  variant?: 'default' | 'compact' | 'menu';
  showLabel?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'default',
  showLabel = true,
}) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    
    // Store in cookie for persistence
    document.cookie = `i18next=${newLanguage}; max-age=31536000; path=/; SameSite=Strict`;
    
    if (variant === 'menu') {
      setAnchorEl(null);
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    handleLanguageChange(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  const currentLang = getCurrentLanguage();

  // Menu variant
  if (variant === 'menu') {
    return (
      <>
        <Button
          onClick={handleClick}
          startIcon={<LanguageIcon />}
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            textTransform: 'none',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'transparent',
            },
          }}
        >
          {currentLang.flag} {currentLang.code.toUpperCase()}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'language-button',
          }}
        >
          {languages.map((language) => (
            <MenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              selected={language.code === i18n.language}
            >
              {language.flag} {language.name}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <StyledFormControl size="small">
        <Select
          value={i18n.language}
          onChange={handleSelectChange}
          displayEmpty
          renderValue={() => (
            <Box display="flex" alignItems="center">
              <FlagIcon>{currentLang.flag}</FlagIcon>
              <Typography variant="body2" color="inherit">
                {currentLang.code.toUpperCase()}
              </Typography>
            </Box>
          )}
        >
          {languages.map((language) => (
            <MenuItem key={language.code} value={language.code}>
              <Box display="flex" alignItems="center">
                <FlagIcon>{language.flag}</FlagIcon>
                <Typography variant="body2">
                  {language.name}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    );
  }

  // Default variant
  return (
    <Box>
      {showLabel && (
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <LanguageIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 20 }} />
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            {t('footer.language')}
          </Typography>
        </Box>
      )}
      
      <StyledFormControl fullWidth>
        <Select
          value={i18n.language}
          onChange={handleSelectChange}
          displayEmpty
          renderValue={() => (
            <Box display="flex" alignItems="center">
              <FlagIcon>{currentLang.flag}</FlagIcon>
              <Typography variant="body2" color="inherit">
                {currentLang.name}
              </Typography>
            </Box>
          )}
        >
          {languages.map((language) => (
            <MenuItem key={language.code} value={language.code}>
              <Box display="flex" alignItems="center" width="100%">
                <FlagIcon>{language.flag}</FlagIcon>
                <Typography variant="body2">
                  {language.name}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </Box>
  );
};

export default LanguageSelector;
