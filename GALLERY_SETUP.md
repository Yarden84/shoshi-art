# Gallery Collection Setup

This guide will help you set up the "gallery" collection in Strapi for your artwork section.

## Step 1: Create Gallery Collection Type

1. Go to **Content-Type Builder** in Strapi admin
2. Click **"Create new collection type"**
3. Name it **"Gallery"**
4. Add these fields:
   - **title** (Text, required) - The artwork title
   - **description** (Rich Text) - Artwork description
   - **medium** (Text) - e.g., "Oil on Canvas"
   - **dimensions** (Text) - e.g., "24" x 36""
   - **year** (Number) - Year created
   - **price** (Number) - Price (optional)
   - **featured** (Boolean) - Check this for featured artworks
   - **slug** (UID) - Auto-generated from title
   - **image** (Media, single) - Upload artwork image

5. Click **"Save"**

## Step 2: Set Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click on **"Public"** role
3. Enable **"Gallery"**: find, findOne
4. Click **"Save"**

## Step 3: Add Sample Artworks

1. Go to **Content Manager** → **Gallery**
2. Click **"Create new entry"**
3. Fill in sample data:
   - Title: "Sunset Over Mountains"
   - Medium: "Oil on Canvas"
   - Dimensions: "24" x 36""
   - Year: 2023
   - Featured: ✅ (check this)
   - Upload an image
   - Add a description
4. Click **"Save"** then **"Publish"**
5. Add 3-4 more artworks

## Step 4: Test Your App

1. **Keep Strapi running** on `http://localhost:1337`
2. **Start your Next.js app**: `npm run dev`
3. **Visit your homepage** at `http://localhost:3000`
4. **Check the Artwork section** - you should see your featured artworks

## What You Should See

- **Featured artworks** from your gallery collection
- **Images** from Strapi
- **Titles** from Strapi
- **Links** to individual artwork pages
- **Fallback** to static images if no Strapi data

## Troubleshooting

### No Images Showing
- Check that images are uploaded in Strapi
- Verify permissions are set correctly
- Make sure entries are published

### No Artworks Loading
- Check browser console for errors
- Verify Strapi is running on port 1337
- Check that content types are saved

### Console Errors
- Make sure the collection is named "gallery" (not "artworks")
- Verify the API endpoint is `/api/gallery`
- Check that all required fields are filled 