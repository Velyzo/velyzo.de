import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
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
  padding: theme.spacing(3),
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(255, 255, 255, 0.02) 100%)`,
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
  maxWidth: '700px',
  margin: '0 auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
    borderRadius: theme.spacing(2),
    pointerEvents: 'none',
  },
  [theme.breakpoints.up('md')]: {
    left: '50%',
    transform: 'translateX(-50%)',
    right: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    left: 10,
    right: 10,
    bottom: 10,
    padding: theme.spacing(2),
  }
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(3),
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <StyledPaper elevation={0}>
          <Box display="flex" alignItems="flex-start" gap={2} sx={{ position: 'relative', zIndex: 1 }}>
            <Box
              sx={{
                background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
              }}
            >
              <CookieIcon 
                sx={{ 
                  color: 'white', 
                  fontSize: 20,
                }} 
              />
            </Box>
            
            <Box flex={1}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('cookies.title')}
              </Typography>
              
              <Typography 
                variant="body2" 
                color="text.secondary" 
                paragraph
                sx={{ 
                  lineHeight: 1.6,
                  mb: 2 
                }}
              >
                {t('cookies.message')}
              </Typography>
              
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ mb: 3 }}
              >
                <RouterLink 
                  to="/cookie-policy" 
                  style={{ 
                    color: '#6366f1', 
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  {t('cookiePolicy.title')} →
                </RouterLink>
              </Typography>
              
              <ButtonContainer>
                <Button
                  variant="contained"
                  onClick={handleAcceptAll}
                  sx={{
                    background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5856eb 30%, #db2777 90%)',
                    },
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                    minWidth: '140px',
                  }}
                >
                  {t('cookies.accept')}
                </Button>
                
                <Button
                  variant="outlined"
                  onClick={handleNecessaryOnly}
                  sx={{
                    borderColor: 'rgba(99, 102, 241, 0.5)',
                    color: '#6366f1',
                    '&:hover': {
                      borderColor: '#6366f1',
                      background: 'rgba(99, 102, 241, 0.1)',
                    },
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    minWidth: '140px',
                  }}
                >
                  {t('cookies.necessary')}
                </Button>
                
                <Button
                  variant="text"
                  onClick={handleDecline}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.05)',
                    },
                    textTransform: 'none',
                    fontWeight: 500,
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    minWidth: '100px',
                  }}
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
                marginTop: -0.5,
                flexShrink: 0,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'text.primary',
                }
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </StyledPaper>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieNotice;
