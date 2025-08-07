import React, { useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, GetApp, Web, Code, Lock, MoreHoriz, Close, Apple } from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [moreProjectsOpen, setMoreProjectsOpen] = useState(false);

  const moreProjects = [
    { name: 'Eulionline', isOpenSource: true },
    { name: 'Dividend Dreams', isOpenSource: true },
    { name: 'Cupercourier', isOpenSource: true },
    { name: 'Velaris', isOpenSource: true },
    { name: 'ReturnTime', isOpenSource: true },
    { name: 'diec', isOpenSource: true },
    { name: 'Destor', isOpenSource: true },
    { name: 'ChatBox', isOpenSource: true },
    { name: 'blt', isOpenSource: true },
    { name: 'dctl', isOpenSource: true },
    { name: 'Jojo', isOpenSource: true },
    { name: 'pybench', isOpenSource: true },
    { name: 'vocules', isOpenSource: true },
    { name: 'ideora', isOpenSource: true },
  ];

  const projects = [
    {
      title: 'Connecto',
      description: t('projects.connecto.description'),
      technologies: ['Swift', 'iOS', 'watchOS'],
      isOpenSource: true,
      links: {
        github: 'https://github.com/Velyzo/Connecto',
        testflight: 'https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE',
        appstore: 'https://apps.apple.com/app/connecto/YOUR_APP_ID',
      },
      color: theme.palette.primary.main,
    },
    {
      title: 'WidgetDock',
      description: t('projects.widgetdock.description'),
      technologies: ['Swift', 'macOS', 'Widget Manager'],
      isOpenSource: true,
      links: {
        github: 'https://github.com/widgetdock',
        website: 'https://widgetdock.app',
      },
      color: theme.palette.secondary.main,
    },
    {
      title: 'PassKit',
      description: t('projects.passkit.description'),
      technologies: ['Swift', 'macOS', 'iOS'],
      isOpenSource: false,
      links: {
        website: '#', // Coming soon
      },
      color: theme.palette.primary.main,
    },
    {
      title: 'Velink',
      description: t('projects.velink.description'),
      technologies: ['React', 'Next.js', 'Analytics'],
      isOpenSource: true,
      links: {
        github: 'https://github.com/Velyzo/velink',
        website: 'https://velink.me',
      },
      color: theme.palette.secondary.main,
    },
    {
      title: 'Stryd',
      description: t('projects.stryd.description'),
      technologies: ['React Native', 'Mobile', 'Health'],
      isOpenSource: true,
      links: {
        github: 'https://github.com/Velyzo/Stryd',
        website: '#', // Coming soon
      },
      color: theme.palette.primary.main,
    },
    {
      title: 'PiVision',
      description: t('projects.pivision.description'),
      technologies: ['Swift', 'iOS', 'Raspberry Pi'],
      isOpenSource: true,
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
      appstore: { icon: <Apple />, label: 'App Store' },
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: project.color,
                        flex: 1,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Chip
                      icon={project.isOpenSource ? <Code /> : <Lock />}
                      label={project.isOpenSource ? t('projects.labels.openSource') : t('projects.labels.proprietary')}
                      size="small"
                      sx={{
                        ml: 2,
                        backgroundColor: project.isOpenSource ? 'rgba(76, 175, 80, 0.8)' : 'rgba(255, 152, 0, 0.8)', // More visible
                        color: project.isOpenSource ? '#ffffff' : '#ffffff', // White text for visibility
                        border: project.isOpenSource ? '2px solid #4caf50' : '2px solid #ff9800', // Thicker border
                        fontWeight: 'bold', // Bold text
                        '& .MuiChip-icon': {
                          color: project.isOpenSource ? '#ffffff' : '#ffffff', // White icons
                        },
                      }}
                    />
                  </Box>
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
          
          {/* More Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: projects.length * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Card
              sx={{
                height: '100%',
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(99, 102, 241, 0.05) 100%)`,
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 3,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 20px 40px rgba(99, 102, 241, 0.2)`,
                },
              }}
              onClick={() => setMoreProjectsOpen(true)}
            >
              <CardContent sx={{ 
                p: 4, 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 300,
              }}>
                <MoreHoriz 
                  sx={{ 
                    fontSize: 60, 
                    color: theme.palette.primary.main,
                    mb: 2 
                  }} 
                />
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  More Projects
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6, mb: 2 }}
                >
                  Discover {moreProjects.length} additional open source projects
                </Typography>
                <Chip
                  icon={<Code />}
                  label="All Open Source"
                  size="medium"
                  sx={{
                    backgroundColor: 'rgba(76, 175, 80, 0.8)',
                    color: '#ffffff',
                    border: '2px solid #4caf50',
                    fontWeight: 'bold',
                    '& .MuiChip-icon': {
                      color: '#ffffff',
                    },
                  }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </Box>

        {/* More Projects Dialog */}
        <Dialog
          open={moreProjectsOpen}
          onClose={() => setMoreProjectsOpen(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(99, 102, 241, 0.05) 100%)`,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          <DialogTitle sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
          }}>
            More Open Source Projects
            <IconButton onClick={() => setMoreProjectsOpen(false)}>
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {moreProjects.map((project, index) => (
                <Box
                  key={project.name}
                  sx={{
                    display: 'inline-block',
                    width: { xs: '50%', sm: '33%', md: '25%' },
                    p: 1,
                  }}
                >
                  <Card
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, rgba(76, 175, 80, 0.05) 100%)`,
                      border: '1px solid rgba(76, 175, 80, 0.2)',
                      borderRadius: 2,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#4caf50',
                        transform: 'translateY(-5px)',
                      },
                    }}
                    onClick={() => window.open(`https://github.com/velyzo/${project.name.toLowerCase()}`, '_blank')}
                  >
                    <Typography variant="body2" fontWeight={600} mb={1}>
                      {project.name}
                    </Typography>
                    <Chip
                      icon={<Code />}
                      label="Open Source"
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(76, 175, 80, 0.8)',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        '& .MuiChip-icon': {
                          color: '#ffffff',
                          fontSize: '0.8rem',
                        },
                      }}
                    />
                  </Card>
                </Box>
              ))}
            </Box>
          </DialogContent>
        </Dialog>

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
