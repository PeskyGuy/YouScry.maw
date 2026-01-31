# YouScry - Video Setup

## YouTube API Integration (NEW!)

YouScry now integrates with YouTube's Data API v3 to display wizard-related videos dynamically!

### Setup Instructions

1. **Get a YouTube API Key:**
   - Go to [Google Cloud Console](https://console.developers.google.com/)
   - Create a new project or select an existing one
   - Enable the "YouTube Data API v3"
   - Create credentials (API Key)
   - Copy your API key

2. **Configure the API Key:**
   - Open `youtube-api.js`
   - Replace `YOUR_YOUTUBE_API_KEY_HERE` with your actual API key
   - Open `watch-youtube.html`
   - Replace `YOUR_YOUTUBE_API_KEY_HERE` with your actual API key (appears twice)

3. **Run the Site:**
   - Open `index.html` in a web browser
   - The site will automatically load wizard-related videos from YouTube

### Features

- **Automatic Wizard Filtering:** Videos are filtered to only show wizard, magic, and fantasy-related content
- **Search Functionality:** Search for specific wizard videos using the search bar
- **YouTube Player Integration:** Watch videos directly on the site using YouTube's embedded player
- **Related Videos:** See related wizard videos in the sidebar

### Wizard Keywords

The site filters videos based on these keywords:
- wizard, wizards, magic, mage, sorcerer, spell, fantasy wizard

### API Usage Notes

- The YouTube Data API has a daily quota limit (10,000 units per day for free tier)
- Each search request costs 100 units
- Monitor your usage in the Google Cloud Console

---

## Adding Local Video Files

To add video files to YouScry:

1. Create a `videos` folder in the YouScry.maw directory
2. Place your video files in the `videos` folder (MP4, WebM formats supported)
3. Update the watch.html file to reference your video files

Example:
```html
<video width="640" height="480" controls>
    <source src="videos/your-file.mp4" type="video/mp4">
    <source src="videos/your-file.webm" type="video/webm">
    Your scrying device does not support video playback.
</video>
```

## Current Video References

The watch.html page currently references:
- `videos/street-bard.mp4` / `videos/street-bard.webm` - Street performance example

## Creating Additional Watch Pages

To create more watch pages:
1. Copy watch.html to a new file (e.g., watch-video2.html)
2. Update the video source paths
3. Update the title, description, and metadata
4. Link to it from index.html

## Video Formats

Recommended formats for best compatibility:
- **MP4** (H.264 codec) - Best compatibility
- **WebM** (VP8/VP9 codec) - Good for web
- Provide both formats for maximum compatibility

## Thumbnails

The site uses CSS-generated gradient thumbnails. These are automatically styled and don't require image files.
