# 🎵 Audio Player - Cloudinary Streaming

A modern, responsive HTML5 audio player with playlist management that streams audio from Cloudinary.

## Features

✨ **Core Functionality:**
- Play/Pause/Skip controls
- Previous track (with 3-second threshold to restart current track)
- Progress bar with seek functionality
- Volume control
- Time display (current time / duration)
- Album artwork display

📚 **Playlist Management:**
- Multiple pre-configured playlists (Pop, Rock, Jazz, Classical)
- Click to switch between playlists
- Click on any track to play it immediately
- Visual feedback for the currently playing track
- Smooth playlist transitions

🎨 **Design:**
- Modern gradient background
- Responsive layout (works on mobile, tablet, desktop)
- Smooth animations and transitions
- Clean, intuitive user interface

## Setup Instructions

### 1. **Get Your Cloudinary Credentials**

First, sign up for a free account at [Cloudinary.com](https://cloudinary.com/users/register/free)

### 2. **Upload Audio Files to Cloudinary**

1. Log in to your Cloudinary dashboard
2. Go to Media Library
3. Upload your audio files
4. For each file, copy the **Delivery URL**

### 3. **Update the Playlists in script.js**

Replace the sample URLs in the `playlists` object with your Cloudinary URLs:

```javascript
const playlists = {
    pop: [
        {
            title: 'Your Song Title',
            artist: 'Artist Name',
            url: 'YOUR_CLOUDINARY_AUDIO_URL_HERE',
            imageUrl: 'YOUR_CLOUDINARY_IMAGE_URL_HERE'
        },
        // ... more tracks
    ],
    // ... other playlists
};
```

### 4. **Cloudinary URL Format**

Audio files typically look like:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/your-audio-file.mp3
```

Image files:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/your-image.jpg
```

### 5. **Open in Browser**

Simply open `index.html` in any modern web browser. No server setup required!

## File Structure

```
songs_player/
├── index.html       # HTML structure
├── styles.css       # Styling and animations
├── script.js        # Player logic and controls
└── README.md        # This file
```

## Browser Compatibility

Works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Change Colors
Edit the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add/Remove Playlists
1. Add new playlist name to the `playlists` object in `script.js`
2. Add corresponding button in `index.html`:
```html
<button class="playlist-btn" data-playlist="your-playlist">Your Playlist</button>
```

### Adjust Player Size
Modify max-width in `styles.css`:
```css
.container {
    max-width: 500px; /* Change this value */
}
```

## Keyboard Shortcuts (Optional Enhancement)

You can add keyboard controls by extending `script.js`:
- Space: Play/Pause
- →: Next track
- ←: Previous track
- ↑: Volume up
- ↓: Volume down

## Tips

### For Production
- Use CORS-enabled Cloudinary URLs
- Consider using CloudFront or CDN for faster loading
- Implement lazy loading for playlists with many tracks
- Add error handling for failed audio loads

### Audio Optimization on Cloudinary
Use these parameters to optimize your audio URLs:
```
// Example with optimization
https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/q_auto/your-audio.mp3
```

### Quality Settings
- `q_auto`: Automatic quality based on device
- `br_128k`: Set bitrate to 128kbps
- `ar_44100`: Set sample rate to 44.1kHz

## Troubleshooting

**Audio not playing:**
- Check that Cloudinary URLs are correct
- Verify CORS is enabled in Cloudinary settings
- Check browser console for errors (F12)

**Images not displaying:**
- Ensure image URLs are correct
- Verify the image files exist in Cloudinary
- Check file permissions

**Styling issues:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that all CSS file is loaded
- Try in incognito mode

## API Reference

### Player Controls
```javascript
// Load a specific track
loadTrack(index);

// Toggle play/pause
togglePlay();

// Go to next track
nextTrack();

// Go to previous track
previousTrack();

// Change volume (0-100)
changeVolume(value);

// Format time display
formatTime(seconds);
```

## Future Enhancements

Possible improvements:
- [ ] Shuffle and repeat modes
- [ ] Playback history
- [ ] Favorite tracks
- [ ] Local storage for user preferences
- [ ] Keyboard shortcuts
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Social media sharing
- [ ] Lyrics display
- [ ] Equalizer

## License

Free to use and modify for personal and commercial projects.

## Support

For issues with:
- **Cloudinary**: Visit [Cloudinary Docs](https://cloudinary.com/documentation)
- **HTML/CSS/JS**: Check [MDN Web Docs](https://developer.mozilla.org)
- **This Player**: Review the code or create an issue

---

Enjoy your music! 🎶
