import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Button,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Twitter, Email } from '@mui/icons-material';

const Team = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const services = [
    t('team.services.iosApp'),
    t('team.services.webDev'), 
    t('team.services.reactNative'),
    t('team.services.customSolutions')
  ];

  return (
    <Box
      id="team"
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
              {t('team.title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
              }}
            >
              {t('team.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              maxWidth: 800,
              mx: 'auto',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 4,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 30px 60px rgba(99, 102, 241, 0.3)',
                border: `1px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            <CardContent sx={{ p: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      fontSize: '4rem',
                      background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                      border: '4px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.5)',
                    }}
                  >
                    D
                  </Avatar>
                </motion.div>

                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Devin Oldenburg
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                    }}
                  >
                    {t('team.founder.title')}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      maxWidth: 500,
                    }}
                  >
                    {t('team.founder.description')}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      flexWrap: 'wrap',
                      mb: 3,
                    }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      onClick={() => window.open('https://github.com/velyzo', '_blank')}
                      sx={{
                        borderColor: theme.palette.text.secondary,
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        },
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Twitter />}
                      onClick={() => window.open('https://twitter.com/velyzo_official', '_blank')}
                      sx={{
                        borderColor: theme.palette.text.secondary,
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          borderColor: theme.palette.secondary.main,
                          color: theme.palette.secondary.main,
                          backgroundColor: 'rgba(236, 72, 153, 0.1)',
                        },
                      }}
                    >
                      Twitter
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Email />}
                      onClick={() => window.open('mailto:contact@velyzo.com', '_blank')}
                      sx={{
                        borderColor: theme.palette.text.secondary,
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        },
                      }}
                    >
                      Email
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                textAlign: 'center',
                fontWeight: 600,
                color: theme.palette.text.primary,
              }}
            >
              {t('team.servicesTitle')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'center',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      px: 3,
                      py: 2,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        border: `1px solid ${theme.palette.primary.main}`,
                        boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                      }}
                    >
                      {service}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Box
              sx={{
                maxWidth: 700,
                mx: 'auto',
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('team.teamwork.title')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                }}
              >
                {t('team.teamwork.description')}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Team;
