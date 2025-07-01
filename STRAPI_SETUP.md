# Strapi CMS Setup Guide

This guide will help you set up Strapi CMS for your art portfolio website.

## 1. Install Strapi

```bash
npx create-strapi-app@latest shoshi-art-cms --quickstart
```

## 2. Create Content Types

### Artwork Content Type
1. Go to Content-Type Builder
2. Create a new Collection Type called "Artwork"
3. Add the following fields:
   - **title** (Text, required)
   - **description** (Rich Text)
   - **medium** (Text)
   - **dimensions** (Text)
   - **year** (Number)
   - **price** (Number)
   - **featured** (Boolean, default: false)
   - **slug** (UID, target field: title)
   - **image** (Media, single)

### About Content Type
1. Create a new Single Type called "About"
2. Add the following fields:
   - **title** (Text, required)
   - **content** (Rich Text)
   - **bio** (Text)
   - **artistImage** (Media, single)

### Contact Info Content Type
1. Create a new Single Type called "Contact Info"
2. Add the following fields:
   - **email** (Email, required)
   - **phone** (Text)
   - **address** (Text)
   - **socialLinks** (JSON)
     - instagram (Text)
     - facebook (Text)
     - twitter (Text)

## 3. Configure Permissions

1. Go to Settings > Users & Permissions Plugin > Roles
2. Select "Public" role
3. Enable the following permissions:
   - **Artwork**: find, findOne
   - **About**: find
   - **Contact Info**: find

## 4. Add Sample Data

### Sample Artworks
Add a few sample artworks with:
- Title: "Sunset Over Mountains"
- Medium: "Oil on Canvas"
- Dimensions: "24" x 36""
- Year: 2023
- Featured: true
- Upload an image

### Sample About Content
- Title: "About Me"
- Bio: "Shoshi Haizler is a passionate artist who loves painting, drawing, and sculpting..."
- Upload an artist image

## 5. Environment Configuration

Make sure your `.env.local` file has:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 6. Test the Integration

1. Start your Strapi server: `npm run develop`
2. Start your Next.js app: `npm run dev`
3. Visit your homepage to see the dynamic content

## 7. Deployment

### Strapi Deployment Options:
- **Railway**: Easy deployment with free tier
- **Render**: Good free tier option
- **Heroku**: Paid but reliable
- **DigitalOcean**: Self-hosted option

### Update Environment Variables:
After deploying Strapi, update your `.env.local`:
```
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-url.com
```

## 8. Content Management

Once set up, you can:
- Add/edit artworks through the Strapi admin panel
- Upload and manage images
- Update about page content
- Manage contact information
- All changes will automatically appear on your website

## 9. Advanced Features

### Image Optimization
Strapi automatically provides different image sizes:
- thumbnail
- small
- medium
- large

### API Features
- Filter artworks by featured status
- Search by title or description
- Pagination for large galleries
- Real-time updates

## 10. Troubleshooting

### Common Issues:
1. **CORS errors**: Make sure Strapi allows your domain
2. **Image not loading**: Check the image URL format
3. **API not responding**: Verify the Strapi URL in environment variables

### Useful Commands:
```bash
# Start Strapi in development
npm run develop

# Build Strapi for production
npm run build

# Start Strapi in production
npm run start
``` 