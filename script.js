// ============================================
// CLOUDINARY CONFIGURATION
// ============================================
const CLOUDINARY_CONFIG = {
    cloudName: 'dxmgdfim6',
    apiKey: '878711512564229',
    folder: 'tracks'
};

// ============================================
// AUDIO PLAYER STATE & TRACKS
// ============================================
let tracks = [
    {
        title: 'WILDFLOWER',
        artist: 'Billie Eilish',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971439/Billie_Eilish_-_WILDFLOWER_Official_Lyric_Video_fnoc8b.mp3'
    },
    
    {
        title: 'Ikaw At Ako Pa Rin',
        artist: 'TJ Monterde ft KZ Tandingan',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971319/TJ_Monterde_Ft._KZ_Tandingan_-_Ikaw_At_Ako_Pa_Rin_-_Official_Lyric_Video_zz2ucs.mp3'
    },
    {
        title: 'Kung Siya Man',
        artist: 'TJ Monterde',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971435/TJ_Monterde_-_Kung_Siya_Man_Official_Lyric_Video_akqjqg.mp3'
    },

    {
        title: 'Tulad Mo',
        artist: 'TJ Monterde',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971393/TJ_Monterde_-_Tulad_Mo_Official_Music_Video_m43xy4.mp3'
    },
    {
        title: 'Everything',
        artist: 'Michael Bublé',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971361/Michael_Bubl%C3%A9_-_Everything_Official_Music_Video_dsie9f.mp3'
    },
    {
        title: 'Puhon',
        artist: 'TJ Monterde',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971420/TJ_Monterde_-_Puhon_-_Official_Lyric_Video_lfzi91.mp3'
    },
    {
        title: 'BIRDS OF A FEATHER',
        artist: 'Billie Eilish',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971412/Billie_Eilish_-_BIRDS_OF_A_FEATHER_Official_Music_Video_qguct0.mp3'
    },
    {
        title: 'Dating Tayo',
        artist: 'TJ Monterde',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971434/TJ_Monterde_-_Dating_Tayo_Lyric_Video_enradi.mp3'
    },
    {
        title: 'What Was I Made For',
        artist: 'Billie Eilish',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971427/Billie_Eilish_-_What_Was_I_Made_For_Official_Music_Video_lpg0kg.mp3'
    },
    {
        title: 'Backburner',
        artist: 'NIKI',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971414/NIKI_-_Backburner_Lyrics_cgei86.mp3'
    },
    {
        title: 'Oceans & Engines',
        artist: 'NIKI',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971333/NIKI_-_Oceans_Engines_Official_Lyric_Video_t92dqd.mp3'
    },
    {
        title: 'Reflection',
        artist: 'Lea Salonga',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971373/Lea_Salonga_-_Reflection_Lyrics_zbjp10.mp3'
    },
    {
        title: 'How Far I\'ll Go',
        artist: 'Auli\'i Cravalho',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971274/Moana_How_Far_I_ll_Go_Lyrics_Auli_i_Cravalho_in1tny.mp3'
    },
    {
        title: 'DARATING DIN',
        artist: 'TJ Monterde',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971417/DARATING_DIN_-_TJ_Monterde_OFFICIAL_LYRIC_VIDEO_ovocgq.mp3'
    },
    {
        title: 'A Whole New World',
        artist: 'ZAYN & Zhavia Ward',
        url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971286/ZAYN_Zhavia_Ward_-_A_Whole_New_World_End_Title_From__Aladdin__rg_zwK_sSEY_lbg8kl.mp3'
    }
];

const playerState = {
    isPlaying: false,
    currentTrackIndex: 0,
    volume: 70,
    isShuffled: false
};

// ============================================
// DOM ELEMENTS
// ============================================

// Views
const mainView = document.getElementById('mainView');
const playerView = document.getElementById('playerView');

// Home View Elements
const recentlyPlayedGrid = document.getElementById('recentlyPlayed');
const recommendedList = document.getElementById('recommendedList');

// Player View Elements
const backBtn = document.getElementById('backBtn');
const cdContainer = document.getElementById('cdContainer');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');

// Controls
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const favBtn = document.getElementById('favBtn');

// Progress
const progressInput = document.getElementById('progressInput');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// Mini Player
const miniPlayer = document.getElementById('miniPlayer');
const miniTitle = document.getElementById('miniTitle');
const miniArtist = document.getElementById('miniArtist');
const miniPlayBtn = document.getElementById('miniPlayBtn');
const miniPlayerContent = document.getElementById('miniPlayerContent');

// Bottom Navigation
const navBtns = document.querySelectorAll('.nav-btn');

// Audio
const audioPlayer = document.getElementById('audioPlayer');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializePlayer();
    setupEventListeners();
    renderHomeView();
});

function initializePlayer() {
    audioPlayer.volume = playerState.volume / 100;
    if (tracks.length > 0) {
        loadTrack(0);
    }
}

// ============================================
// VIEW MANAGEMENT
// ============================================

function showHomeView() {
    mainView.classList.add('active-view');
    playerView.classList.remove('active-view');
    navBtns.forEach(btn => {
        if (btn.dataset.view === 'main') btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

function showPlayerView() {
    mainView.classList.remove('active-view');
    playerView.classList.add('active-view');
}

// ============================================
// HOME VIEW RENDERING
// ============================================

function renderHomeView() {
    // Recently Played - show first 3 tracks
    recentlyPlayedGrid.innerHTML = '';
    const recentlyPlayedTracks = tracks.slice(0, 3);
    
    recentlyPlayedTracks.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'album-item';
        item.innerHTML = `<div class="album-item-cover">🎵</div>`;
        item.addEventListener('click', () => {
            loadTrack(index);
            showPlayerView();
        });
        recentlyPlayedGrid.appendChild(item);
    });
    
    // Recommended - show remaining tracks
    recommendedList.innerHTML = '';
    const recommendedTracks = tracks.slice(3);
    
    recommendedTracks.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'song-item';
        const actualIndex = 3 + index;
        
        item.innerHTML = `
            <div class="song-item-info">
                <div class="song-item-title">${track.title}</div>
                <div class="song-item-artist">${track.artist}</div>
            </div>
            <div class="song-item-icon">▶</div>
        `;
        
        item.addEventListener('click', () => {
            loadTrack(actualIndex);
            showPlayerView();
        });
        
        recommendedList.appendChild(item);
    });
}

// ============================================
// TRACK LOADING
// ============================================

function loadTrack(index) {
    if (tracks.length === 0) {
        nowPlayingTitle.textContent = 'No tracks loaded';
        nowPlayingArtist.textContent = 'Add songs to the tracks array';
        return;
    }
    
    // Wrap index if out of bounds
    if (index < 0) {
        playerState.currentTrackIndex = tracks.length - 1;
    } else if (index >= tracks.length) {
        playerState.currentTrackIndex = 0;
    } else {
        playerState.currentTrackIndex = index;
    }
    
    const track = tracks[playerState.currentTrackIndex];
    
    // Update audio source
    audioPlayer.src = track.url;
    
    // Update metadata in player view
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist || 'Unknown Artist';
    
    // Update mini player
    miniTitle.textContent = track.title;
    miniArtist.textContent = track.artist || 'Unknown Artist';
    
    // Reset progress
    progressInput.value = 0;
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    durationEl.textContent = '0:00';
    
    // Load the track
    audioPlayer.load();
    
    // If playing, start the new track
    if (playerState.isPlaying) {
        audioPlayer.play().catch(error => {
            console.log('Playback failed:', error);
            playerState.isPlaying = false;
            updatePlayButtons(false);
            cdContainer.classList.remove('playing');
        });
    }
}

// ============================================
// PLAYBACK CONTROL
// ============================================

function updatePlayButtons(isPlaying) {
    if (isPlaying) {
        playIcon.className = 'fas fa-pause';
        miniPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playIcon.className = 'fas fa-play';
        miniPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function togglePlay() {
    if (playerState.isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play().catch(error => {
            console.log('Playback failed:', error);
        });
    }
}

function previousTrack() {
    loadTrack(playerState.currentTrackIndex - 1);
}

function nextTrack() {
    if (playerState.isShuffled) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * tracks.length);
        } while (tracks.length > 1 && randomIndex === playerState.currentTrackIndex);
        loadTrack(randomIndex);
    } else {
        loadTrack(playerState.currentTrackIndex + 1);
    }
}

function toggleShuffle() {
    playerState.isShuffled = !playerState.isShuffled;
    shuffleBtn.style.opacity = playerState.isShuffled ? '1' : '0.7';
    shuffleBtn.style.color = playerState.isShuffled ? '#60a5fa' : '#93c5fd';
}

// ============================================
// PROGRESS & TIME
// ============================================

function updateProgress() {
    if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressInput.value = percent;
        progressFill.style.width = percent + '%';
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
}

function updateDuration() {
    durationEl.textContent = formatTime(audioPlayer.duration);
}

function seekTrack(e) {
    const seekTime = (e.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
}

function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Play/Pause
    playBtn.addEventListener('click', togglePlay);
    miniPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlay();
    });
    
    // Track Navigation
    prevBtn.addEventListener('click', previousTrack);
    nextBtn.addEventListener('click', nextTrack);
    
    // Shuffle
    shuffleBtn.addEventListener('click', toggleShuffle);
    
    // Favorite button (placeholder)
    favBtn.addEventListener('click', () => {
        favBtn.classList.toggle('active');
    });
    
    // Back Button
    backBtn.addEventListener('click', showHomeView);
    
    // Mini Player Click (show player view)
    miniPlayerContent.addEventListener('click', (e) => {
        if (!miniPlayBtn.contains(e.target)) {
            showPlayerView();
        }
    });
    
    // Progress Bar
    progressInput.addEventListener('input', seekTrack);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    audioPlayer.addEventListener('ended', nextTrack);
    
    // Audio Events
    audioPlayer.addEventListener('play', () => {
        playerState.isPlaying = true;
        updatePlayButtons(true);
        cdContainer.classList.add('playing');
    });
    
    audioPlayer.addEventListener('pause', () => {
        playerState.isPlaying = false;
        updatePlayButtons(false);
        cdContainer.classList.remove('playing');
    });
    
    // Bottom Navigation
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (view === 'main') {
                showHomeView();
            }
            // Other views (search, favorites, profile) not yet implemented
        });
    });
    
    // Prevent "See All" link from refreshing page
    document.querySelector('.see-all').addEventListener('click', (e) => {
        e.preventDefault();
    });
}