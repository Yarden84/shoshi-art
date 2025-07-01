# Strapi Category Setup Guide

This guide will help you set up your Strapi content to work with the category-based artwork display.

## Current Setup

You have a collection type called "artwork" with 4 images under categories: Paintings, Children, Sculpture, Other.

## Option 1: Use Your Current Structure (Recommended)

### 1. Update Your Strapi Content Type

1. Go to **Content-Type Builder**
2. Edit your "artwork" collection type
3. Add these fields:
   - **title** (Text, required) - This will be "Paintings", "Children", etc.
   - **category** (Text, required) - This will be "Paintings", "Children", etc.
   - **image** (Media, single) - Upload your category images

### 2. Add Your Category Entries

1. Go to **Content Manager** → **Artwork**
2. Create 4 entries:

#### Entry 1: Paintings
- Title: "Paintings"
- Category: "Paintings"
- Image: Upload your paintings category image

#### Entry 2: Children
- Title: "Children"
- Category: "Children"
- Image: Upload your children category image

#### Entry 3: Sculpture
- Title: "Sculpture"
- Category: "Sculpture"
- Image: Upload your sculpture category image

#### Entry 4: Other
- Title: "Other"
- Category: "Other"
- Image: Upload your other category image

### 3. Set Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click on **"Public"** role
3. Enable **"Artwork"**: find, findOne
4. Click **"Save"**

### 4. Publish All Entries

Make sure all 4 entries are published (not just saved).

## Option 2: Create Individual Artworks (Alternative)

If you prefer to have individual artwork pieces instead of categories:

### 1. Create New Content Type

1. Go to **Content-Type Builder**
2. Create a new collection type called **"Artwork"**
3. Add these fields:
   - **title** (Text, required)
   - **description** (Rich Text)
   - **medium** (Text)
   - **dimensions** (Text)
   - **year** (Number)
   - **price** (Number)
   - **featured** (Boolean, default: false)
   - **slug** (UID, target field: title)
   - **category** (Text) - for filtering
   - **image** (Media, single)

### 2. Add Sample Artworks

Create individual artwork entries with:
- Title: "Sunset Over Mountains"
- Category: "Paintings"
- Medium: "Oil on Canvas"
- Featured: true
- Upload image

## Testing Your Setup

1. **Keep Strapi running** on `http://localhost:1337`
2. **Start your Next.js app**:
   ```bash
   npm run dev
   ```
3. **Visit your homepage** at `http://localhost:3000`
4. **Check the Artwork section** - you should see your 4 category images

## What You Should See

- **4 category cards** with your images
- **Hover effects** on the cards
- **Links to gallery** with category filters
- **Fallback images** if Strapi data isn't available

## Troubleshooting

### Images Not Showing
- Check that images are uploaded in Strapi
- Verify permissions are set correctly
- Make sure entries are published

### Categories Not Loading
- Check browser console for errors
- Verify Strapi is running on port 1337
- Check that content types are saved

### Links Not Working
- Verify the category field is filled in Strapi
- Check that the gallery page handles category filters

## Next Steps

Once your categories are working:
1. **Add more individual artworks** to each category
2. **Update the gallery page** to show filtered results
3. **Add about and contact content**
4. **Customize the styling** as needed 