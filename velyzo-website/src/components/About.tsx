import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  RocketLaunch,
  Lightbulb,
  Speed,
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const values = [
    {
      icon: <RocketLaunch sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: <Lightbulb sx={{ fontSize: 60, color: theme.palette.secondary.main }} />,
      title: t('about.values.creative.title'),
      description: t('about.values.creative.description'),
    },
    {
      icon: <Speed sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      title: t('about.values.performance.title'),
      description: t('about.values.performance.description'),
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('about.title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              {t('about.subtitle')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 900,
                mx: 'auto',
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              {t('about.description')}
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4,
          justifyContent: 'center',
        }}>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ flex: 1, maxWidth: 400 }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 20px 40px ${
                      index === 1 
                        ? 'rgba(236, 72, 153, 0.3)' 
                        : 'rgba(99, 102, 241, 0.3)'
                    }`,
                    border: `1px solid ${
                      index === 1 
                        ? theme.palette.secondary.main 
                        : theme.palette.primary.main
                    }`,
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3 }}>
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Card
              sx={{
                maxWidth: 800,
                mx: 'auto',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ p: 6 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Unsere Mission
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    lineHeight: 1.8,
                    fontWeight: 400,
                  }}
                >
                  Wir schaffen innovative Softwarelösungen, die das Leben der Menschen verbessern 
                  und Unternehmen dabei helfen, ihre Ziele zu erreichen. Durch den Einsatz modernster 
                  Technologien und durchdachter Entwicklungsprozesse entstehen bei uns Produkte, 
                  die nicht nur funktional, sondern auch benutzerfreundlich und zukunftssicher sind.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
