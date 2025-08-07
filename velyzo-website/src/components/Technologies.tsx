import React from 'react';
import {
  Box,
  Typography,
  Container,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  SiSwift, 
  SiReact, 
  SiJavascript, 
  SiPython, 
  SiNodedotjs, 
  SiGithub,
  SiFigma,
  SiAndroid,
  SiHtml5,
  SiCss3,
  SiAmazon,
  SiMysql,
  SiDigitalocean,
  SiDiscord,
  SiCloudflare
} from 'react-icons/si';

// Type-safe icon renderer
const IconRenderer: React.FC<{ IconComponent: any, size?: number }> = ({ IconComponent, size = 40 }) => {
  const Icon = IconComponent as React.ComponentType<{ size: number }>;
  return <Icon size={size} />;
};

const Technologies = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const technologies = [
    { name: 'Swift / iOS', icon: SiSwift, color: '#FF6B35' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Android', icon: SiAndroid, color: '#3DDC84' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
    { name: 'Discord', icon: SiDiscord, color: '#7289DA' },
    { name: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },
  ];

  return (
    <Box
      id="technologies"
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
              {t('technologies.title')}
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
              {t('technologies.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 140,
                  height: 140,
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px) scale(1.05)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${tech.color}40`,
                    boxShadow: `0 20px 40px ${tech.color}30`,
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 1,
                    color: tech.color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <IconRenderer IconComponent={tech.icon} size={40} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    px: 1,
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Box
              sx={{
                maxWidth: 800,
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
                  color: theme.palette.text.primary,
                }}
              >
                {t('technologies.continuous')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                }}
              >
                {t('technologies.continuousText')}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Technologies;
