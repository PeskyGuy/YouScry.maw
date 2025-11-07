# YouScry - Video Setup

## Adding Video Files

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
