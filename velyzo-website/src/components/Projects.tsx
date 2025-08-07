import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, GetApp, Web } from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Connecto',
      description: t('projects.connecto.description'),
      technologies: ['Swift', 'iOS', 'watchOS'],
      links: {
        github: 'https://github.com/Velyzo/Connecto',
        testflight: '#',
      },
      color: theme.palette.primary.main,
    },
    {
      title: 'WidgetDock',
      description: t('projects.widgetdock.description'),
      technologies: ['Swift', 'macOS', 'Touch Bar'],
      links: {
        website: '#',
        download: '#',
      },
      color: theme.palette.secondary.main,
    },
    {
      title: 'PassKit',
      description: t('projects.passkit.description'),
      technologies: ['Swift', 'macOS', 'iOS'],
      links: {
        website: '#',
        download: '#',
      },
      color: theme.palette.primary.main,
    },
    {
      title: 'Velink',
      description: t('projects.velink.description'),
      technologies: ['React', 'Next.js', 'Web'],
      links: {
        github: 'https://github.com/Velyzo/velink',
        demo: 'https://velink.me/',
      },
      color: theme.palette.secondary.main,
    },
    {
      title: 'Stryd',
      description: t('projects.stryd.description'),
      technologies: ['React Native', 'Mobile', 'Health'],
      links: {
        github: 'https://github.com/Velyzo/Stryd',
        website: '#',
      },
      color: theme.palette.primary.main,
    },
    {
      title: 'PiVision',
      description: t('projects.pivision.description'),
      technologies: ['Swift', 'iOS', 'Raspberry Pi'],
      links: {
        github: 'https://github.com/Velyzo/PiVision',
        testflight: '#',
      },
      color: theme.palette.secondary.main,
    },
  ];

  const getLinkButton = (type: string, url: string, color: string) => {
    const linkConfig = {
      github: { icon: <GitHub />, label: t('projects.buttons.github') },
      demo: { icon: <Launch />, label: t('projects.buttons.liveDemo') },
      website: { icon: <Web />, label: t('projects.buttons.website') },
      download: { icon: <GetApp />, label: t('projects.buttons.download') },
      testflight: { icon: <Launch />, label: t('projects.buttons.testflight') },
    };

    const config = linkConfig[type as keyof typeof linkConfig];
    if (!config) return null;

    return (
      <Button
        size="small"
        startIcon={config.icon}
        onClick={() => window.open(url, '_blank')}
        sx={{
          color: color,
          borderColor: color,
          '&:hover': {
            borderColor: color,
            backgroundColor: `${color}20`,
          },
        }}
        variant="outlined"
      >
        {config.label}
      </Button>
    );
  };

  return (
    <Box
      id="projects"
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
              {t('projects.title')}
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
              {t('projects.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4,
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 20px 40px ${project.color}40`,
                    border: `1px solid ${project.color}`,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: project.color,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      minHeight: 72,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                          border: `1px solid ${project.color}40`,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0, gap: 1, flexWrap: 'wrap' }}>
                  {Object.entries(project.links).map(([type, url]) => (
                    getLinkButton(type, url, project.color)
                  ))}
                </CardActions>
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
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                color: theme.palette.text.secondary,
              }}
            >
              {t('projects.openSource')}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHub />}
              onClick={() => window.open('https://github.com/velyzo', '_blank')}
              sx={{
                px: 4,
                py: 1.5,
                textTransform: 'none',
                background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5b5cf6 30%, #db2777 90%)',
                },
              }}
            >
              {t('projects.visitGithub')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
