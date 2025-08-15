# ISD Solutions - IT Solutions & Corporate Services

A modern, responsive website for ISD Solutions, showcasing IT services and corporate solutions with a beautiful, theme-aware design.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Theme Support**: Light/Dark theme switching with persistent preferences
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized for speed and user experience
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Wouter** - Lightweight client-side routing
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd TechPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Deploy automatically** - Vercel will detect the Vite configuration
3. **Configuration**: The `vercel.json` file is already configured for SPA routing

### Netlify

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
3. **Configuration**: The `_redirects` file is already configured for SPA routing

### Other Platforms

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Upload** the contents of `dist/public` to your hosting platform
3. **Configure SPA routing** to redirect all routes to `index.html`

## 📁 Project Structure

```
TechPortfolio/
├── client/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility functions
│   │   └── types/              # TypeScript type definitions
│   ├── public/                 # Static assets
│   └── index.html              # Main HTML file
├── dist/                       # Build output
├── vercel.json                 # Vercel configuration
├── deploy.sh                   # Deployment script
└── package.json                # Dependencies and scripts
```

## 🎨 Theme System

The application supports both light and dark themes:

- **Automatic detection** of system preference
- **Manual switching** via the theme toggle in the navbar
- **Persistent storage** of user preference
- **Smooth transitions** between themes

## 📱 Pages

- **Home** (`/`) - Landing page with hero section and services overview
- **About** (`/about`) - Company information and team details
- **Services** (`/services`) - Detailed services with interactive accordion
- **Projects** (`/projects`) - Portfolio of completed projects
- **Testimonials** (`/testimonials`) - Client testimonials and reviews
- **Contact** (`/contact`) - Contact form and company information

## 🔧 Configuration Files

### Vercel (`vercel.json`)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Netlify (`client/public/_redirects`)
```
/*    /index.html   200
```

## 🚀 Quick Deploy

Use the provided deployment script:

```bash
./deploy.sh
```

This will build the project and provide deployment instructions.

## 🐛 Troubleshooting

### 404 Errors on Deployment

If you're getting 404 errors on deployment:

1. **Check routing configuration** - Ensure your hosting platform supports SPA routing
2. **Verify redirect rules** - Make sure all routes redirect to `index.html`
3. **Check build output** - Ensure the build completed successfully

### Build Issues

1. **Clear cache**: `npm run build -- --force`
2. **Reinstall dependencies**: `rm -rf node_modules && npm install`
3. **Check Node version**: Ensure you're using Node.js 16+ or 18+

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: info@isdsolutions.com
- Website: [ISD Solutions](https://isdsolutions.com)

---

Built with ❤️ by ISD Solutions 