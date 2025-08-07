import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  useTheme,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Favorite,
  Coffee,
  Star,
  LocalCafe,
  VolunteerActivism,
  OpenInNew,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Support = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const supportOptions = [
    {
      icon: <Coffee sx={{ fontSize: 40, color: '#FF5E5B' }} />,
      title: t('support.kofi.title'),
      description: t('support.kofi.description'),
      action: t('support.kofi.action'),
      url: 'https://ko-fi.com/velyzo',
      color: '#FF5E5B',
      popular: true,
    },
    {
      icon: <Star sx={{ fontSize: 40, color: '#FFD23F' }} />,
      title: t('support.github.title'),
      description: t('support.github.description'),
      action: t('support.github.action'),
      url: 'https://github.com/velyzo',
      color: '#FFD23F',
    },
    {
      icon: <VolunteerActivism sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: t('support.contribute.title'),
      description: t('support.contribute.description'),
      action: t('support.contribute.action'),
      url: 'https://discord.gg/mrgg7vuF48',
      color: theme.palette.primary.main,
    },
  ];

  const handleSupportClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      id="support"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 50%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 40%, rgba(255, 94, 91, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 800,
                background: 'linear-gradient(45deg, #FF5E5B 30%, #6366f1 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('support.title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              {t('support.subtitle')}
            </Typography>
            
            {/* Free Service Notice */}
            <Box
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                borderRadius: 3,
                border: '1px solid rgba(99, 102, 241, 0.2)',
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Favorite sx={{ color: '#FF5E5B', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {t('support.freeNotice.title')}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}
              >
                {t('support.freeNotice.description')}
              </Typography>
            </Box>

            {/* Collaboration Notice */}
            <Box
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, rgba(255, 94, 91, 0.1) 0%, rgba(255, 210, 63, 0.1) 100%)',
                borderRadius: 3,
                border: '1px solid rgba(255, 94, 91, 0.2)',
                maxWidth: 800,
                mx: 'auto',
                mb: 6,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <VolunteerActivism sx={{ color: '#FFD23F', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {t('support.collaborationNotice.title')}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}
              >
                {t('support.collaborationNotice.description')}
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Support Options */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {supportOptions.map((option, index) => (
            <Box key={index} sx={{ flexBasis: { xs: '100%', md: '300px' } }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(255, 255, 255, 0.02) 100%)`,
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      borderColor: option.color,
                      boxShadow: `0 20px 40px rgba(${option.color === '#FF5E5B' ? '255, 94, 91' : option.color === '#FFD23F' ? '255, 210, 63' : '99, 102, 241'}, 0.2)`,
                    },
                  }}
                >
                  {option.popular && (
                    <Chip
                      label={t('support.popular')}
                      sx={{
                        position: 'absolute',
                        top: -10,
                        right: 20,
                        background: 'linear-gradient(45deg, #FF5E5B 30%, #ec4899 90%)',
                        color: 'white',
                        fontWeight: 600,
                        zIndex: 2,
                      }}
                    />
                  )}
                  
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {option.icon}
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {option.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {option.description}
                    </Typography>
                    
                    <Button
                      variant="contained"
                      onClick={() => handleSupportClick(option.url)}
                      endIcon={<OpenInNew />}
                      sx={{
                        background: `linear-gradient(45deg, ${option.color} 30%, ${option.color}88 90%)`,
                        '&:hover': {
                          background: `linear-gradient(45deg, ${option.color}dd 30%, ${option.color}aa 90%)`,
                        },
                        textTransform: 'none',
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                      }}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mt={8}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                p: 2,
                background: 'rgba(255, 94, 91, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(255, 94, 91, 0.2)',
              }}
            >
              <LocalCafe sx={{ color: '#FF5E5B' }} />
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                }}
              >
                {t('support.thankYou')}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Support;
