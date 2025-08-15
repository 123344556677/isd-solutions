#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build completed successfully!"
    echo "You can now deploy the contents of the 'dist/public' directory to your hosting platform."
    echo ""
    echo "For Vercel:"
    echo "  - The vercel.json file is already configured"
    echo "  - Deploy the entire project directory"
    echo ""
    echo "For Netlify:"
    echo "  - The _redirects file is already configured"
    echo "  - Set the publish directory to 'dist/public'"
    echo ""
    echo "For other platforms:"
    echo "  - Upload the contents of 'dist/public' directory"
    echo "  - Ensure your hosting platform supports SPA routing"
else
    echo "Build failed! Please check the error messages above."
    exit 1
fi 