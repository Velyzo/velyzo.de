import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
  Alert,
  Divider,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Email, 
  LocationOn, 
  GitHub, 
  Twitter,
  Send,
  Forum,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'gdp_Cv2qZtFNMikHu';
  const EMAILJS_TEMPLATE_ID = 'template_1'; // Common default template ID
  const EMAILJS_PUBLIC_KEY = '_603hy440Isf7rhbkL4nN';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    
    try {
      // Create form element for EmailJS
      const form = e.target as HTMLFormElement;
      
      // EmailJS send function using form reference
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`EmailJS error: ${result.text}`);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 30, color: theme.palette.primary.main }} />,
      title: t('contact.emailLabel'),
      value: 'mail@velyzo.de',
      action: () => window.open('mailto:mail@velyzo.de'),
    },
    {
      icon: <LocationOn sx={{ fontSize: 30, color: theme.palette.secondary.main }} />,
      title: t('contact.location'),
      value: t('contact.germany'),
      action: null,
    },
    {
      icon: <GitHub sx={{ fontSize: 30, color: theme.palette.primary.main }} />,
      title: 'GitHub',
      value: 'github.com/velyzo',
      action: () => window.open('https://github.com/velyzo', '_blank'),
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub sx={{ fontSize: 24 }} />,
      label: 'GitHub',
      url: 'https://github.com/velyzo',
      color: theme.palette.primary.main,
    },
    {
      icon: <Twitter sx={{ fontSize: 24 }} />,
      label: 'Twitter',
      url: 'https://twitter.com/velyzo_official',
      color: '#1DA1F2',
    },
    {
      icon: <Forum sx={{ fontSize: 24 }} />,
      label: 'Discord',
      url: 'https://discord.gg/mrgg7vuF48',
      color: '#7289DA',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              {t('contact.title')}
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
              {t('contact.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Alert 
              severity="success" 
              sx={{ 
                mb: 4, 
                maxWidth: 600, 
                mx: 'auto',
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
                color: theme.palette.success.main,
                border: `1px solid ${theme.palette.success.main}`,
              }}
            >
              {t('contact.successMessage')}
            </Alert>
          </motion.div>
        )}

        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Alert 
              severity="error" 
              sx={{ 
                mb: 4, 
                maxWidth: 600, 
                mx: 'auto',
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
                color: theme.palette.error.main,
                border: `1px solid ${theme.palette.error.main}`,
              }}
            >
              {t('contact.errorMessage')}
            </Alert>
          </motion.div>
        )}

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          gap: 6,
          alignItems: 'flex-start',
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: 1 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  {t('contact.sendMessage')}
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                      <TextField
                        fullWidth
                        label={t('contact.name')}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: theme.palette.text.secondary,
                          },
                          '& .MuiInputBase-input': {
                            color: theme.palette.text.primary,
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label={t('contact.email')}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: theme.palette.text.secondary,
                          },
                          '& .MuiInputBase-input': {
                            color: theme.palette.text.primary,
                          },
                        }}
                      />
                    </Box>
                    <TextField
                      fullWidth
                      label={t('contact.subject')}
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: theme.palette.text.secondary,
                        },
                        '& .MuiInputBase-input': {
                          color: theme.palette.text.primary,
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t('contact.message')}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: theme.palette.text.secondary,
                        },
                        '& .MuiInputBase-input': {
                          color: theme.palette.text.primary,
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
                      sx={{
                        py: 2,
                        mt: 2,
                        background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #5b5cf6 30%, #db2777 90%)',
                        },
                        '&:disabled': {
                          background: 'rgba(99, 102, 241, 0.5)',
                        },
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                      }}
                    >
                      {isSubmitting ? t('contact.sending') : t('contact.sendMessage')}
                    </Button>
                    
                    {/* Important notice about direct email */}
                    <Box
                      sx={{
                        mt: 3,
                        p: 2,
                        backgroundColor: 'rgba(99, 102, 241, 0.05)',
                        borderRadius: 2,
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          textAlign: 'center',
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                        }}
                      >
                        📧 <strong>Wichtiger Hinweis:</strong> Für dringende und geschäftskritische Anfragen kontaktieren Sie uns bitte direkt per E-Mail an{' '}
                        <Box
                          component="a"
                          href="mailto:hello@velyzo.de"
                          sx={{
                            color: theme.palette.primary.main,
                            textDecoration: 'none',
                            fontWeight: 600,
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          hello@velyzo.de
                        </Box>{' '}
                        – so garantieren wir Ihnen eine prioritäre und zeitnahe Bearbeitung.
                      </Typography>
                    </Box>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ flex: 1, maxWidth: 500 }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {t('contact.contactInfo')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {contactInfo.map((info, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 3,
                          cursor: info.action ? 'pointer' : 'default',
                          p: 2,
                          borderRadius: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': info.action ? {
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            transform: 'translateX(5px)',
                          } : {},
                        }}
                        onClick={info.action || undefined}
                      >
                        {info.icon}
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              mb: 0.5,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 500,
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {t('contact.followUs')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        startIcon={social.icon}
                        onClick={() => window.open(social.url, '_blank')}
                        sx={{
                          borderColor: social.color,
                          color: social.color,
                          '&:hover': {
                            borderColor: social.color,
                            backgroundColor: `${social.color}20`,
                          },
                        }}
                      >
                        {social.label}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {t('contact.readyProject')}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {t('contact.readyProjectText')}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
