# VelyzoLogo React Component

A professional, animated React component for the Velyzo logo that matches the website's design system.

## Features

- **Three variants**: `default`, `minimal`, `animated`
- **Customizable size**: Any size from small icons to large displays
- **Framer Motion animations**: Smooth hover effects and entrance animations
- **Consistent branding**: Uses the same gradients as the rest of the website
- **Professional design**: Clean, corporate-friendly appearance
- **TypeScript support**: Full type definitions included

## Usage

### Basic Usage

```tsx
import VelyzoLogo from './components/VelyzoLogo';

// Simple logo with default settings
<VelyzoLogo />

// Logo with custom size
<VelyzoLogo size={64} />

// Logo with click handler
<VelyzoLogo 
  size={48} 
  onClick={() => navigate('/')} 
/>
```

### Variants

#### Default Variant
```tsx
<VelyzoLogo size={40} variant="default" />
```
- Professional appearance with shadow
- Uses the website's signature gradient (#6366f1 → #ec4899)
- Perfect for navigation bars and headers

#### Minimal Variant  
```tsx
<VelyzoLogo size={32} variant="minimal" />
```
- Clean, simplified design
- Lighter shadow for subtle appearance
- Great for smaller spaces and secondary locations

#### Animated Variant
```tsx
<VelyzoLogo size={56} variant="animated" />
```
- Entrance animations with spring physics
- Path drawing animation for the V shape
- Enhanced gradient with 3 color stops
- Perfect for hero sections and showcases

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `40` | Width and height of the logo in pixels |
| `variant` | `'default' \| 'minimal' \| 'animated'` | `'default'` | Visual style variant |
| `onClick` | `() => void` | `undefined` | Click handler function |

### Design System Integration

The VelyzoLogo component automatically integrates with the website's design system:

- **Colors**: Uses the same gradient palette as buttons and headings
- **Shadows**: Consistent with Material-UI elevation system
- **Animations**: Matches Framer Motion patterns used throughout the site
- **Typography**: Complements the website's font choices

### Examples in Use

#### Navbar
```tsx
<VelyzoLogo 
  size={32} 
  variant="default" 
  onClick={() => navigate('/')} 
/>
```

#### Hero Section
```tsx
<VelyzoLogo size={64} variant="animated" />
```

#### Footer
```tsx
<VelyzoLogo size={28} variant="minimal" />
```

### Animation Details

- **Hover Effect**: Scale up with subtle rotation
- **Tap Effect**: Scale down for tactile feedback  
- **Entrance**: Fade in with scale animation
- **Path Animation** (animated variant): SVG path drawing effect

### Accessibility

- Proper contrast ratios maintained
- Click handlers include appropriate cursor styles
- Semantic HTML structure
- Screen reader friendly

### Performance

- Lightweight SVG-based rendering
- Efficient Framer Motion animations
- No external dependencies beyond Material-UI and Framer Motion
- Optimized for fast loading and smooth interactions

---

This component replaces static SVG files with a dynamic, interactive React component that enhances the user experience while maintaining the professional brand identity.
