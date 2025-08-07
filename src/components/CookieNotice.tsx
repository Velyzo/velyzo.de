import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import CookieIcon from '@mui/icons-material/Cookie';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 20,
  left: 20,
  right: 20,
  zIndex: 9999,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  borderRadius: theme.spacing(2),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  maxWidth: '600px',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    left: '50%',
    transform: 'translateX(-50%)',
    right: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    left: 10,
    right: 10,
    bottom: 10,
  }
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}));

const CookieNotice: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if cookie consent has been given
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    // Clear any existing cookies except necessary ones
    document.cookie.split(";").forEach((c) => {
      const eqPos = c.indexOf("=");
      const name = eqPos > -1 ? c.substr(0, eqPos).trim() : c.trim();
      // Keep necessary cookies like language preference
      if (!['i18next'].includes(name)) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
    });
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    // Keep only necessary cookies
    const necessaryCookies = ['i18next'];
    document.cookie.split(";").forEach((c) => {
      const eqPos = c.indexOf("=");
      const name = eqPos > -1 ? c.substr(0, eqPos).trim() : c.trim();
      if (!necessaryCookies.includes(name)) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
    });
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <StyledPaper elevation={8}>
      <Box display="flex" alignItems="flex-start" gap={2}>
        <CookieIcon 
          sx={{ 
            color: 'primary.main', 
            fontSize: 24,
            marginTop: 0.5,
            flexShrink: 0
          }} 
        />
        
        <Box flex={1}>
          <Typography variant="h6" component="h3" gutterBottom>
            {t('cookies.title')}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            {t('cookies.message')}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <RouterLink 
              to="/cookie-policy" 
              style={{ 
                color: 'inherit', 
                textDecoration: 'underline',
                opacity: 0.8
              }}
            >
              {t('cookiePolicy.title')}
            </RouterLink>
          </Typography>
          
          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAcceptAll}
              sx={{ minWidth: '140px' }}
            >
              {t('cookies.accept')}
            </Button>
            
            <Button
              variant="outlined"
              color="primary"
              onClick={handleNecessaryOnly}
              sx={{ minWidth: '140px' }}
            >
              {t('cookies.necessary')}
            </Button>
            
            <Button
              variant="text"
              color="primary"
              onClick={handleDecline}
              sx={{ minWidth: '100px' }}
            >
              {t('cookies.decline')}
            </Button>
          </ButtonContainer>
        </Box>
        
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{ 
            color: 'text.secondary',
            marginTop: -1,
            flexShrink: 0
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </StyledPaper>
  );
};

export default CookieNotice;
