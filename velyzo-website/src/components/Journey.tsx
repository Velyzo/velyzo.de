import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Container,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  RocketLaunch,
  Code,
  GitHub,
  TrendingUp,
} from '@mui/icons-material';

const Journey = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const milestones = [
    {
      year: '2024',
      title: t('journey.milestones.velisFounded'),
      description: t('journey.milestones.velisFoundedDesc'),
      icon: <RocketLaunch sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      color: theme.palette.primary.main,
    },
    {
      year: '2024',
      title: t('journey.milestones.initialProjects'),
      description: t('journey.milestones.initialProjectsDesc'),
      icon: <Code sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      color: theme.palette.secondary.main,
    },
    {
      year: '2024',
      title: t('journey.milestones.openSource'),
      description: t('journey.milestones.openSourceDesc'),
      icon: <GitHub sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      color: theme.palette.primary.main,
    },
    {
      year: '2025',
      title: t('journey.milestones.rebranding'),
      description: t('journey.milestones.rebrandingDesc'),
      icon: <TrendingUp sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      color: theme.palette.secondary.main,
    },
    {
      year: '2025',
      title: t('journey.milestones.continued'),
      description: t('journey.milestones.continuedDesc'),
      icon: <TrendingUp sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      color: theme.palette.primary.main,
    },
  ];

  return (
    <Box
      id="journey"
      sx={{
        py: 10,
        background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
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
              {t('journey.title')}
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
              {t('journey.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  mb: 8,
                  gap: 4,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    textAlign: { xs: 'center', md: index % 2 === 0 ? 'right' : 'left' },
                    pr: { md: index % 2 === 0 ? 4 : 0 },
                    pl: { md: index % 2 === 0 ? 0 : 4 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: milestone.color,
                    }}
                  >
                    {milestone.year}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {milestone.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      maxWidth: 400,
                      mx: { xs: 'auto', md: index % 2 === 0 ? 0 : 'auto' },
                      ml: { md: index % 2 === 0 ? 'auto' : 0 },
                    }}
                  >
                    {milestone.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${milestone.color}20, ${milestone.color}40)`,
                    border: `2px solid ${milestone.color}`,
                    flexShrink: 0,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      width: 2,
                      height: index === milestones.length - 1 ? 0 : 60,
                      background: `linear-gradient(180deg, ${milestone.color}, transparent)`,
                      bottom: -60,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: { xs: 'none', md: 'block' },
                    },
                  }}
                >
                  {milestone.icon}
                </Box>

                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
              </Box>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Box
              sx={{
                maxWidth: 600,
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
                {t('journey.future')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                }}
              >
                {t('journey.futureText')}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Journey;
