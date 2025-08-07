import React from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
  Button,
  useTheme,
} from '@mui/material';
import { GitHub, Twitter, Email, Forum } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const services = [
    t('services.iosApp'),
    t('services.webDev'),
    t('services.reactNative'),
    t('services.customSolutions'),
  ];

  const socialLinks = [
    {
      icon: <GitHub sx={{ fontSize: 20 }} />,
      url: 'https://github.com/velyzo',
      label: 'GitHub',
    },
    {
      icon: <Twitter sx={{ fontSize: 20 }} />,
      url: 'https://twitter.com/velyzo_official',
      label: 'Twitter',
    },
    {
      icon: <Forum sx={{ fontSize: 20 }} />,
      url: 'https://discord.gg/mrgg7vuF48',
      label: 'Discord',
    },
    {
      icon: <Email sx={{ fontSize: 20 }} />,
      url: 'mailto:mail@velyzo.de',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.team'), href: '#team' },
  ];

  const handleNavClick = (href: string) => {
    if (href === '/') {
      navigate('/');
    } else if (href.startsWith('#')) {
      // If we're on contact page, go to home first
      if (window.location.pathname === '/contact') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            mb: 4,
          }}
        >
          {/* Brand Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 800,
                background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Velyzo
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                color: theme.palette.text.secondary,
                maxWidth: 300,
                lineHeight: 1.6,
              }}
            >
              {t('footer.description')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => handleNavClick(social.url)}
                  sx={{
                    minWidth: 48,
                    width: 48,
                    height: 48,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    },
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: theme.palette.text.primary,
              }}
            >
              {t('footer.quickLinks')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    justifyContent: 'flex-start',
                    color: theme.palette.text.secondary,
                    textTransform: 'none',
                    p: 0.5,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Services */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: theme.palette.text.primary,
              }}
            >
              {t('footer.services')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {services.map((service, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    py: 0.5,
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Contact & Language Switcher */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: theme.palette.text.primary,
              }}
            >
              {t('footer.contact')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  py: 0.5,
                }}
              >
                mail@velyzo.de
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  py: 0.5,
                }}
              >
                {t('contact.germany')}
              </Typography>
              
              {/* Language Switcher */}
              <Box sx={{ mt: 3 }}>
                <LanguageSwitcher />
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'center' },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {t('footer.copyright', { year: currentYear })}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="text"
              size="small"
              onClick={() => navigate('/impressum')}
              sx={{
                color: theme.palette.text.secondary,
                textTransform: 'none',
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'transparent',
                },
              }}
            >
              {t('footer.impressum')}
            </Button>
            
            <Button
              variant="text"
              size="small"
              onClick={() => navigate('/cookie-policy')}
              sx={{
                color: theme.palette.text.secondary,
                textTransform: 'none',
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'transparent',
                },
              }}
            >
              {t('footer.cookiePolicy')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
