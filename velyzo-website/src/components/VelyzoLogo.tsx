import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface VelyzoLogoProps {
  size?: number;
  variant?: 'default' | 'minimal' | 'animated';
  onClick?: () => void;
}

const VelyzoLogo: React.FC<VelyzoLogoProps> = ({ 
  size = 40, 
  variant = 'default',
  onClick 
}) => {

  const logoMotion = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: { 
        duration: 0.3,
        rotate: { duration: 0.6 }
      }
    },
    tap: { scale: 0.95 }
  };

  const renderLogo = () => {
    switch (variant) {
      case 'minimal':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            style={{ display: 'block' }}
          >
            <defs>
              <linearGradient id={`velyzoGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              </linearGradient>
              <filter id={`shadow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" floodColor="#000000"/>
              </filter>
            </defs>
            
            <rect 
              x="6" 
              y="6" 
              width="52" 
              height="52" 
              rx="12" 
              ry="12"
              fill={`url(#velyzoGrad-${size})`}
              filter={`url(#shadow-${size})`}
            />
            
            <path 
              d="M 22 22 L 32 42 L 42 22" 
              stroke="#ffffff" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            
            <path 
              d="M 25 26 L 32 38 L 39 26" 
              stroke="#ffffff" 
              strokeWidth="0.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              opacity="0.4"
            />
          </svg>
        );

      case 'animated':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            style={{ display: 'block' }}
          >
            <defs>
              <linearGradient id={`animatedGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              </linearGradient>
              <filter id={`glow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <motion.rect 
              x="6" 
              y="6" 
              width="52" 
              height="52" 
              rx="12" 
              ry="12"
              fill={`url(#animatedGrad-${size})`}
              filter={`url(#glow-${size})`}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            />
            
            <motion.path 
              d="M 22 22 L 32 42 L 42 22" 
              stroke="#ffffff" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            
            <motion.path 
              d="M 25 26 L 32 38 L 39 26" 
              stroke="#ffffff" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              opacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </svg>
        );

      default:
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            style={{ display: 'block' }}
          >
            <defs>
              <linearGradient id={`defaultGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              </linearGradient>
              <filter id={`defaultShadow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.15" floodColor="#1e293b"/>
              </filter>
            </defs>
            
            <rect 
              x="6" 
              y="6" 
              width="52" 
              height="52" 
              rx="12" 
              ry="12"
              fill={`url(#defaultGrad-${size})`}
              filter={`url(#defaultShadow-${size})`}
            />
            
            <path 
              d="M 22 22 L 32 42 L 42 22" 
              stroke="#ffffff" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            
            <path 
              d="M 25 26 L 32 38 L 39 26" 
              stroke="#ffffff" 
              strokeWidth="0.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              opacity="0.4"
            />
          </svg>
        );
    }
  };

  return (
    <Box
      component={motion.div}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={logoMotion}
      onClick={onClick}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        '&:hover': onClick ? {
          transform: 'translateY(-2px)',
        } : {},
      }}
    >
      {renderLogo()}
    </Box>
  );
};

export default VelyzoLogo;
