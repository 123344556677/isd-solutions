# ISD Solutions - IT Solutions & Corporate Services

A modern, responsive website for ISD Solutions, showcasing IT services including Odoo, ERP, FBR Digital Invoicing, Web & Mobile Development, and Digital Transformation solutions.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Optimized for all devices and screen sizes
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance**: Fast loading with optimized assets and animations
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn/ui components
- **Routing**: Wouter for client-side routing
- **Theming**: Next-themes for dark/light mode
- **Build Tool**: Vite for fast development and building
- **Deployment**: Firebase Hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TechPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client && npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Firebase Deployment

The project is configured for Firebase Hosting deployment with the following commands:

#### Quick Deploy
```bash
npm run deploy
```
This command builds the project and deploys to Firebase hosting.

#### Specific Deployment Commands
```bash
# Build and deploy only hosting
npm run deploy:hosting

# Deploy to preview channel
npm run deploy:preview

# Firebase management commands
npm run firebase:login      # Login to Firebase
npm run firebase:init       # Initialize Firebase project
npm run firebase:serve      # Serve locally for testing
npm run firebase:status     # Check Firebase project status
```

#### Manual Deployment Steps
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

3. **Deploy only hosting**
   ```bash
   firebase deploy --only hosting
   ```

### Deployment URLs
- **Production**: https://isd-solutions.web.app
- **Project Console**: https://console.firebase.google.com/project/isd-solutions/overview

## 📁 Project Structure

```
TechPortfolio/
├── client/                 # React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── types/         # TypeScript type definitions
│   ├── public/            # Static assets
│   └── package.json       # Client dependencies
├── firebase.json          # Firebase configuration
├── .firebaserc            # Firebase project settings
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine crawling rules
└── package.json           # Root dependencies and scripts
```

## 🎨 Customization

### Theme Colors
The project uses a custom color scheme defined in `tailwind.config.ts`:
- **Primary Red**: #dc2626
- **Background**: Dynamic based on theme
- **Text**: Theme-aware colors

### Logo
- **Light Theme**: `isd-logo-light.svg` (black text)
- **Dark Theme**: `isd-logo-dark.svg` (white text)
- **Automatic Switching**: Based on user's theme preference

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Structured Data**: Schema.org markup for better search results
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Proper crawling instructions
- **Social Media**: Open Graph and Twitter Card optimization
- **Performance**: Optimized for Core Web Vitals

## 📱 Pages

- **Home**: Company overview and services introduction
- **About**: Company information and team details
- **Services**: Detailed service offerings
- **Projects**: Portfolio and case studies
- **Testimonials**: Client feedback and reviews
- **Contact**: Contact form and company information
- **Legal**: Privacy Policy and Terms & Conditions

## 🚀 Performance

- **Build Size**: Optimized bundle with code splitting
- **Loading Speed**: Fast initial page load
- **Animations**: Smooth scroll animations and transitions
- **Images**: Optimized and responsive images
- **Fonts**: System fonts for better performance

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # TypeScript type checking
npm run deploy       # Build and deploy to Firebase
```

### Environment Variables
Create a `.env` file in the client directory for any environment-specific configurations.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support or questions, please contact:
- **Email**: info@isdsolutions.com
- **Phone**: +92 300 807 8456
- **Address**: 1st Floor Potohar Plaza - Blue Area, Lahore

---

**ISD Solutions** - Transforming businesses through innovative technology solutions. 