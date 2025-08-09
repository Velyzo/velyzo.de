import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Home as HomeIcon,
  Info as InfoIcon,
  Work as WorkIcon,
  Group as GroupIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.home'), href: '/', icon: HomeIcon },
    { label: t('nav.about'), href: '#about', icon: InfoIcon },
    { label: t('nav.projects'), href: '#projects', icon: WorkIcon },
    { label: t('nav.team'), href: '#team', icon: GroupIcon },
    { label: t('nav.support'), href: '#support', icon: FavoriteIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0 } }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.4rem', md: '1.6rem' },
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '0.5px',
                  textShadow: '0 0 30px rgba(102, 126, 234, 0.3)',
                  marginLeft: 1,
                }}
              >
                Velyzo
              </Typography>
            </motion.div>

            <Box sx={{ flexGrow: 1 }} />

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      color="inherit"
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/contact')}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #5b5cf6 30%, #db2777 90%)',
                      },
                    }}
                  >
                    {t('nav.contact')}
                  </Button>
                </motion.div>
              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Full-Width Navigation */}
      {isMobile && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: '64px',
                left: 0,
                right: 0,
                zIndex: 1200,
                background: 'rgba(15, 23, 42, 0.98)',
                backdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Container maxWidth="xl">
                <Box sx={{ py: 2 }}>
                  {/* Navigation Items */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Button
                            fullWidth
                            startIcon={<Icon />}
                            onClick={() => handleNavClick(item.href)}
                            sx={{
                              justifyContent: 'flex-start',
                              py: 1.5,
                              px: 2,
                              borderRadius: 2,
                              textTransform: 'none',
                              fontWeight: 500,
                              color: theme.palette.text.primary,
                              '&:hover': {
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                transform: 'translateX(8px)',
                                transition: 'all 0.2s ease',
                              },
                            }}
                          >
                            {item.label}
                          </Button>
                        </motion.div>
                      );
                    })}
                  </Box>
                  
                  {/* Contact Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <Button
                      fullWidth
                      startIcon={<MailIcon />}
                      onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}
                      sx={{
                        py: 1.5,
                        px: 2,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2))',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        color: theme.palette.primary.main,
                        '&:hover': {
                          background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3))',
                          transform: 'translateX(8px)',
                          transition: 'all 0.2s ease',
                        },
                      }}
                    >
                      {t('nav.contact')}
                    </Button>
                  </motion.div>
                </Box>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Navbar;
