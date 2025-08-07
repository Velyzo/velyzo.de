import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ExpandMore, Cookie, Security, Settings, Info } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const CookiePolicy = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const cookieCategories = [
    {
      category: 'necessary',
      icon: <Security sx={{ fontSize: 24, color: theme.palette.success.main }} />,
      cookies: [
        {
          name: 'i18next',
          purpose: t('cookiePolicy.cookies.i18next.purpose'),
          duration: t('cookiePolicy.cookies.i18next.duration'),
          type: t('cookiePolicy.cookies.i18next.type'),
        },
      ]
    },
    {
      category: 'functional',
      icon: <Settings sx={{ fontSize: 24, color: theme.palette.primary.main }} />,
      cookies: [
        {
          name: 'cookieConsent',
          purpose: t('cookiePolicy.cookies.cookieConsent.purpose'),
          duration: t('cookiePolicy.cookies.cookieConsent.duration'),
          type: t('cookiePolicy.cookies.cookieConsent.type'),
        },
      ]
    },
    {
      category: 'analytics',
      icon: <Info sx={{ fontSize: 24, color: theme.palette.info.main }} />,
      cookies: []
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
              <Cookie sx={{ fontSize: 48, color: theme.palette.primary.main, mr: 2 }} />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('cookiePolicy.title')}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
              }}
            >
              {t('cookiePolicy.subtitle')}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: theme.palette.text.secondary,
                fontStyle: 'italic',
              }}
            >
              {t('cookiePolicy.lastUpdated')}: {new Date().toLocaleDateString()}
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card
            sx={{
              mb: 4,
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                {t('cookiePolicy.whatAreCookies.title')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                {t('cookiePolicy.whatAreCookies.description')}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {t('cookiePolicy.whatAreCookies.ourUse')}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            {t('cookiePolicy.categoriesTitle')}
          </Typography>

          {cookieCategories.map((category, index) => (
            <Accordion
              key={category.category}
              sx={{
                mb: 2,
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {category.icon}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {t(`cookiePolicy.categories.${category.category}.title`)}
                  </Typography>
                  <Chip
                    label={category.cookies.length}
                    size="small"
                    color={category.category === 'necessary' ? 'success' : 'primary'}
                    sx={{ ml: 1 }}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  {t(`cookiePolicy.categories.${category.category}.description`)}
                </Typography>
                
                {category.cookies.length > 0 ? (
                  <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 600 }}>{t('cookiePolicy.table.name')}</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>{t('cookiePolicy.table.purpose')}</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>{t('cookiePolicy.table.duration')}</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>{t('cookiePolicy.table.type')}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {category.cookies.map((cookie, cookieIndex) => (
                          <TableRow key={cookieIndex}>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                                {cookie.name}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {cookie.purpose}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {cookie.duration}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label={cookie.type} 
                                size="small" 
                                variant="outlined"
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: theme.palette.text.secondary }}>
                    {t('cookiePolicy.noCookiesInCategory')}
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card
            sx={{
              mt: 4,
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                {t('cookiePolicy.yourChoices.title')}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {t('cookiePolicy.yourChoices.browserSettings.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {t('cookiePolicy.yourChoices.browserSettings.description')}
                </Typography>
              </Box>

              <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {t('cookiePolicy.yourChoices.ourSettings.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {t('cookiePolicy.yourChoices.ourSettings.description')}
                </Typography>
              </Box>

              <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {t('cookiePolicy.contact.title')}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  {t('cookiePolicy.contact.description')} 
                  <a 
                    href="mailto:contact@velyzo.com"
                    style={{ 
                      color: theme.palette.primary.main,
                      textDecoration: 'none'
                    }}
                  >
                    contact@velyzo.com
                  </a>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CookiePolicy;
