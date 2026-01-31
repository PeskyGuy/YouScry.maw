// YouTube API Configuration
const API_KEY = 'AIzaSyDIwa92SDj1GwBUdLYLYjhntVcOqcXhiAo'; // Replace with your actual API key
const WIZARD_KEYWORDS = ['wizard', 'wizards', 'magic', 'mage', 'sorcerer', 'spell', 'fantasy wizard'];

// Load videos when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, attempting to load wizard videos...');
    loadWizardVideos();
});

// Search function
function searchVideos() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        loadWizardVideos(query);
    } else {
        loadWizardVideos();
    }
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchVideos();
            }
        });
    }
});

// Main function to load wizard videos from YouTube
async function loadWizardVideos(customQuery = null) {
    const query = customQuery || 'wizard magic fantasy';
    const maxResults = 12;
    
    try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${API_KEY}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.error) {
            displayError('API Error: ' + data.error.message);
            return;
        }
        
        if (data.items && data.items.length > 0) {
            // Filter for wizard-related videos (but be less strict)
            const wizardVideos = filterWizardVideos(data.items);
            
            // If filtering removed too many, just use all results
            const videosToShow = wizardVideos.length > 0 ? wizardVideos : data.items;
            
            displayVideos(videosToShow);
            displayFeaturedVideo(videosToShow[0]);
        } else {
            displayError('No wizard videos found. Try a different search!');
        }
    } catch (error) {
        console.error('Error loading videos:', error);
        displayError('Failed to load videos. Error: ' + error.message);
    }
}

// Filter videos to ensure they're wizard-related
function filterWizardVideos(videos) {
    return videos.filter(video => {
        const title = video.snippet.title.toLowerCase();
        const description = video.snippet.description.toLowerCase();
        const combined = title + ' ' + description;
        
        // Check if any wizard keyword is present
        return WIZARD_KEYWORDS.some(keyword => combined.includes(keyword));
    });
}

// Display featured video
function displayFeaturedVideo(video) {
    const featuredContent = document.getElementById('featured-content');
    if (!featuredContent || !video) return;
    
    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const description = video.snippet.description;
    const thumbnail = video.snippet.thumbnails.medium.url;
    
    featuredContent.innerHTML = `
        <table class="featured-video" cellpadding="0" cellspacing="0">
            <tr>
                <td class="featured-thumb">
                    <a href="watch-youtube.html?v=${videoId}">
                        <img src="${thumbnail}" alt="${escapeHtml(title)}" style="width: 200px; height: 150px; border: 1px solid #ccc;">
                    </a>
                </td>
                <td class="featured-info">
                    <h3><a href="watch-youtube.html?v=${videoId}">${escapeHtml(title)}</a></h3>
                    <div class="description">${escapeHtml(description.substring(0, 150))}...</div>
                    <div class="meta">From YouTube | Wizard Content</div>
                </td>
            </tr>
        </table>
    `;
}

// Display video grid
function displayVideos(videos) {
    const container = document.getElementById('wizard-videos');
    if (!container) return;
    
    if (videos.length === 0) {
        container.innerHTML = '<p>No wizard videos found. Try searching for something else!</p>';
        return;
    }
    
    let html = '<table class="video-grid" cellpadding="0" cellspacing="0"><tr>';
    
    videos.forEach((video, index) => {
        if (index > 0 && index % 4 === 0) {
            html += '</tr><tr>';
        }
        
        const videoId = video.id.videoId;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.default.url;
        const channelTitle = video.snippet.channelTitle;
        
        html += `
            <td class="video-cell">
                <a href="watch-youtube.html?v=${videoId}">
                    <img src="${thumbnail}" alt="${escapeHtml(title)}" style="width: 100%; height: 90px; border: 1px solid #ccc;">
                </a>
                <div class="video-title"><a href="watch-youtube.html?v=${videoId}">${escapeHtml(title)}</a></div>
                <div class="video-meta">By: ${escapeHtml(channelTitle)}</div>
            </td>
        `;
    });
    
    html += '</tr></table>';
    container.innerHTML = html;
}

// Display error message
function displayError(message) {
    console.error('Display error called:', message);
    const container = document.getElementById('wizard-videos');
    const featuredContent = document.getElementById('featured-content');
    
    const errorHtml = `
        <div style="padding: 20px; background-color: #fff3cd; border: 1px solid #ffc107; color: #856404;">
            <strong>Note:</strong> ${escapeHtml(message)}
            <br><br>
            <strong>Troubleshooting:</strong>
            <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Check browser console (F12) for detailed errors</li>
                <li>Verify your API key is correct in youtube-api.js</li>
                <li>Make sure YouTube Data API v3 is enabled in Google Cloud Console</li>
                <li>Check if you've exceeded your daily quota</li>
            </ul>
        </div>
    `;
    
    if (container) {
        container.innerHTML = errorHtml;
        console.log('Error displayed in wizard-videos container');
    }
    if (featuredContent) {
        featuredContent.innerHTML = errorHtml;
        console.log('Error displayed in featured-content container');
    }
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
