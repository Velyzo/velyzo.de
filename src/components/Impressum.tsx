import React from 'react';
import {
  Box,
  Typography,
  Container,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Impressum = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, md: 12 },
        pb: 8,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: 800,
            background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('impressum.title')}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            {t('impressum.provider')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Velyzo
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Devin Oldenburg
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Germany
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            {t('impressum.contact')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            E-Mail: contact@velyzo.com
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Website: https://velyzo.de
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            {t('impressum.liability')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            {t('impressum.liabilityText')}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            {t('impressum.copyright')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            {t('impressum.copyrightText')}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            {t('impressum.dataProtection')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            {t('impressum.dataProtectionText')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Impressum;
