// ============================================================
//  ALBUMS & TRACKS DATA
// ============================================================
const albums = [
    {
        id: 'energizer',
        name: 'Energizer',
        svg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.667 2L13 10h6l-9 12-1.333-8H2l9-12z"/></svg>',
        color: 'linear-gradient(135deg, #f59e0b, #d97706)',
        gifUrl: 'https://media.tenor.com/g_-T28U0XggAAAAi/stitch.gif',
        tracks: [
            { title: 'WILDFLOWER', artist: 'Billie Eilish', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971439/Billie_Eilish_-_WILDFLOWER_Official_Lyric_Video_fnoc8b.mp3' },
            { title: 'BIRDS OF A FEATHER', artist: 'Billie Eilish', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971412/Billie_Eilish_-_BIRDS_OF_A_FEATHER_Official_Music_Video_qguct0.mp3' },
            { title: 'What Was I Made For', artist: 'Billie Eilish', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971427/Billie_Eilish_-_What_Was_I_Made_For_Official_Music_Video_lpg0kg.mp3' },
            { title: 'The Fate of Ophelia', artist: 'Taylor Swift', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875814/Taylor%20Swift%20-%20The%20Fate%20of%20Ophelia%20%28Official%20Music%20Video%29.mp3' },
            { title: "Red (Taylor's Version)", artist: 'Taylor Swift', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875825/Taylor%20Swift%20-%20Red%20%28Taylor%27s%20Version%29%20%28Lyric%20Video%29.mp3' }
        ]
    },
    {
        id: 'relapse-malala',
        name: 'Relapse Malala',
        svg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
        color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        gifUrl: 'https://media.tenor.com/GazZv1uMhVsAAAAi/hug.gif',
        tracks: [
            { title: 'Backburner', artist: 'NIKI', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971414/NIKI_-_Backburner_Lyrics_cgei86.mp3' },
            { title: 'Oceans & Engines', artist: 'NIKI', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971333/NIKI_-_Oceans_Engines_Official_Lyric_Video_t92dqd.mp3' },
            { title: 'Everything', artist: 'Michael Bublé', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971361/Michael_Bubl%C3%A9_-_Everything_Official_Music_Video_dsie9f.mp3' },
            { title: 'Multo (Extended)', artist: 'Cup of Joe', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775874729/Multo%20%28Extended%29%20%28The%20Cozy%20Cove%20Fest%29%20-%20Cup%20of%20Joe.mp3' },
            { title: 'Deslocado', artist: 'NAPA', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875845/NAPA%20-%20Deslocado%20%28Official%20Video%29.mp3' },
            { title: 'Back To December', artist: 'Taylor Swift', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875848/Taylor%20Swift%20-%20Back%20To%20December.mp3' },
            { title: 'Tindahan ng mga Alaala', artist: 'Filipino', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875870/tindahan%20ng%20mga%20alaala.mp3' }
        ]
    },
    {
        id: 'ado-rable',
        name: 'ADO-rable',
        svg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>',
        color: 'linear-gradient(135deg, #ec4899, #be185d)',
        gifUrl: 'https://media.tenor.com/DKNqCkZ0wncAAAAi/blue-birthday.gif',
        tracks: [
            { title: 'Vivarium', artist: 'Ado', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775874385/%E3%80%90Ado%E3%80%91%E3%83%93%E3%83%90%E3%83%AA%E3%82%A6%E3%83%A0%20%28Vivarium%29.mp3' },
            { title: '唱 (Uta)', artist: 'Ado', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775874599/%E3%80%90Ado%E3%80%91%20%E5%94%B1.mp3' },
            { title: 'うっせぇわ (THE FIRST TAKE)', artist: 'Ado', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775876162/Ado%C2%A0-%C2%A0%E3%81%86%E3%81%A3%E3%81%9B%E3%81%87%E3%82%8F%C2%A0%E2%A7%B8%C2%A0THE%C2%A0FIRST%C2%A0TAKE.mp3' },
            { title: 'Aishite Aishite Aishite', artist: 'Ado', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775876115/Aishite%20Aishite%20Aishite.mp3' },
            { title: 'Kawaikute Gomen', artist: 'HoneyWorks', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775876129/Kawaikute%20Gomen.mp3' },
            { title: 'Reflection', artist: 'Lea Salonga', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971373/Lea_Salonga_-_Reflection_Lyrics_zbjp10.mp3' },
            { title: "How Far I'll Go", artist: "Auli'i Cravalho", url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971274/Moana_How_Far_I_ll_Go_Lyrics_Auli_i_Cravalho_in1tny.mp3' },
            { title: 'A Whole New World', artist: 'ZAYN & Zhavia Ward', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971286/ZAYN_Zhavia_Ward_-_A_Whole_New_World_End_Title_From__Aladdin__rg_zwK_sSEY_lbg8kl.mp3' }
        ]
    },
    {
        id: 'jpop',
        name: 'Jpop',
        svg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M15 3.5c-.88 0-1.66.45-2 1.12C12.66 3.95 11.88 3.5 11 3.5c-2 0-3.5 1.5-3.5 3.5 0 .28.05.54.12.8C6.67 7.7 5.5 8.71 5.5 10c0 1.05.61 1.96 1.5 2.45C6.11 12.94 5.5 13.85 5.5 14.9c0 1.3 1.17 2.3 2.12 2.2.07.26.12.52.12.8 0 2 1.5 3.5 3.5 3.5s2-.45 2.36-1.12c.34.67 1.12 1.12 2 1.12 2 0 3.5-1.5 3.5-3.5 0-.28-.05-.54-.12-.8.95.1 2.12-.9 2.12-2.2 0-1.05-.61-1.96-1.5-2.45.89-.49 1.5-1.4 1.5-2.45 0-1.3-1.17-2.3-2.12-2.2-.07-.26-.12-.52-.12-.8 0-2-1.5-3.5-3.5-3.5z"/></svg>',
        color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        gifUrl: 'https://media.tenor.com/acAB1T70IH4AAAAi/lilo-and-stitch-animation.gif',
        tracks: [
            { title: 'Hikaru Nara', artist: 'Goose House', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875808/Hikaru%20Nara%20-%20Goose%20House%20%5BRomaji%2C%20Espa%C3%B1ol%2C%20English%2C%20Color%20Coded%5D.mp3' },
            { title: 'Odoriko (踊り子)', artist: 'Vaundy', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875861/Vaundy%20-%20Odoriko%20%28%E8%B8%8A%E3%82%8A%E5%AD%90%29%20%28Lyrics%29%20%28Rom%E2%A7%B8Eng%29.mp3' }
        ]
    },
    {
        id: 'tj',
        name: 'TJ',
        svg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',
        color: 'linear-gradient(135deg, #10b981, #065f46)',
        gifUrl: 'https://media.tenor.com/ARHlQWxJAYgAAAAi/love-stitch.gif',
        tracks: [
            { title: 'Ikaw At Ako Pa Rin', artist: 'TJ Monterde ft KZ Tandingan', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971319/TJ_Monterde_Ft._KZ_Tandingan_-_Ikaw_At_Ako_Pa_Rin_-_Official_Lyric_Video_zz2ucs.mp3' },
            { title: 'Kung Siya Man', artist: 'TJ Monterde', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971435/TJ_Monterde_-_Kung_Siya_Man_Official_Lyric_Video_akqjqg.mp3' },
            { title: 'Tulad Mo', artist: 'TJ Monterde', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971393/TJ_Monterde_-_Tulad_Mo_Official_Music_Video_m43xy4.mp3' },
            { title: 'Puhon', artist: 'TJ Monterde', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971420/TJ_Monterde_-_Puhon_-_Official_Lyric_Video_lfzi91.mp3' },
            { title: 'Dating Tayo', artist: 'TJ Monterde', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971434/TJ_Monterde_-_Dating_Tayo_Lyric_Video_enradi.mp3' },
            { title: 'DARATING DIN', artist: 'TJ Monterde', url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875814/DARATING_DIN_-_TJ_Monterde_OFFICIAL_LYRIC_VIDEO_ovocgq.mp3' }
        ]
    }
];

// ============================================================
//  DOM REFS
// ============================================================
const albumTitle = document.getElementById('albumTitle');
const nowPlayingText = document.getElementById('nowPlayingText');
const cassetteName = document.getElementById('cassetteName');
const cassetteColor = document.getElementById('cassetteColor');
const albumsContainer = document.getElementById('albumsContainer');
const drawerToggle = document.getElementById('drawerToggle');
const sidebar = document.getElementById('sidebar');

const prevBtn = document.getElementById('prevBtn');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const nextBtn = document.getElementById('nextBtn');
const stopBtn = document.getElementById('stopBtn');
const switchBtn = document.getElementById('switchBtn');
const volumeKnobContainer = document.getElementById('volumeKnobContainer');
const volumeKnob = document.getElementById('volumeKnob');
const queueList = document.getElementById('queueList');
const queueFloating = document.getElementById('queueFloating');
const queueCloseBtn = document.getElementById('queueCloseBtn');
const queueToggleBtn = document.getElementById('queueToggleBtn');
const dynamicSticker = document.getElementById('dynamicSticker');
const stickerWrapper = document.getElementById('stickerWrapper');
const pickMeTooltip = document.getElementById('pickMeTooltip');

const audio = document.getElementById('audioPlayer');

// Animation refs
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const innerCircle1 = document.getElementById("inner-circle");
const innerCircle2 = document.getElementById("inner-circle2");

// ============================================================
//  STATE
// ============================================================
let currentAlbum = null;
let currentTrackIndex = -1; // index within currentAlbum.tracks
let isPlaying = false;
let savedVolume = 0.7;

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    audio.volume = savedVolume;
    renderAlbumCollection();
    
    // Select first album by default without playing
    if (albums.length > 0) {
        loadAlbumCassette(albums[0], false);
    }
    
    setupEventListeners();
});

// ============================================================
//  UI RENDER
// ============================================================
function renderAlbumCollection() {
    albumsContainer.innerHTML = '';
    albums.forEach(album => {
        const card = document.createElement('div');
        card.className = 'album-tape-card';
        card.id = `tape-${album.id}`;
        
        card.innerHTML = `
            <div class="tape-card-label">
                <div class="tape-card-text">${album.name}</div>
                <div class="tape-card-color" style="background: ${album.color};"></div>
            </div>
            <div class="tape-card-emoji">${album.svg}</div>
        `;
        
        card.addEventListener('click', () => {
            if (currentAlbum && currentAlbum.id === album.id) return;
            loadAlbumCassette(album, true);
        });
        
        albumsContainer.appendChild(card);
    });
}

function loadAlbumCassette(album, autoPlay = true) {
    currentAlbum = album;
    currentTrackIndex = 0;
    
    // Update active state in collection
    document.querySelectorAll('.album-tape-card').forEach(el => el.classList.remove('active'));
    const activeCard = document.getElementById(`tape-${album.id}`);
    if (activeCard) activeCard.classList.add('active');
    
    // Update main cassette visual
    albumTitle.textContent = album.name;
    cassetteName.innerHTML = `${album.svg} ${album.name}`;
    cassetteColor.style.background = album.color;
    
    // Update Dynamic Sticker
    if (dynamicSticker) {
        if (album.gifUrl) {
            dynamicSticker.src = album.gifUrl;
            dynamicSticker.style.display = 'block';
        } else {
            dynamicSticker.style.display = 'none';
        }
    }
    
    // Render Queue List
    renderQueueList(album);
    
    // Load track
    if (album.tracks.length > 0) {
        loadTrack(currentTrackIndex, autoPlay);
    }
}

function loadTrack(index, autoPlay = false) {
    if (!currentAlbum || index < 0 || index >= currentAlbum.tracks.length) return;
    
    currentTrackIndex = index;
    const track = currentAlbum.tracks[index];
    
    nowPlayingText.textContent = `${track.title} - ${track.artist}`;
    
    // Update Queue UI
    if (queueList) {
        queueList.querySelectorAll('.queue-item').forEach(el => el.classList.remove('active'));
        const activeItem = document.getElementById(`queue-track-${index}`);
        if (activeItem) activeItem.classList.add('active');
    }
    
    audio.src = track.url;
    audio.load();
    
    if (autoPlay) {
        audio.play().catch(console.error);
    }
}

// ============================================================
//  ANIMATIONS
// ============================================================
function toggleAnimation(playState) {
    circle1.style.animationPlayState = playState;
    circle2.style.animationPlayState = playState;
    innerCircle1.style.animationPlayState = playState;
    innerCircle2.style.animationPlayState = playState;
}

// ============================================================
//  CONTROLS
// ============================================================
function playNext() {
    if (!currentAlbum) return;
    if (currentTrackIndex < currentAlbum.tracks.length - 1) {
        loadTrack(currentTrackIndex + 1, true);
    } else {
        // reached end of tape, stop or reset
        loadTrack(0, false);
        audio.pause();
    }
}

function playPrev() {
    if (!currentAlbum) return;
    if (currentTrackIndex > 0) {
        loadTrack(currentTrackIndex - 1, true);
    } else {
        loadTrack(0, true); // replay first track
    }
}

// ============================================================
//  HELPERS & QUEUE
// ============================================================
function renderQueueList(album) {
    if (!queueList) return;
    queueList.innerHTML = '';
    album.tracks.forEach((track, idx) => {
        const div = document.createElement('div');
        div.className = 'queue-item';
        div.id = `queue-track-${idx}`;
        div.innerHTML = `<span>${idx + 1}. ${track.title}</span> <span>${track.artist}</span>`;
        div.addEventListener('click', () => {
            loadTrack(idx, true);
        });
        queueList.appendChild(div);
    });
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
function setupEventListeners() {
    // Drawer Toggle
    if (drawerToggle && sidebar) {
        drawerToggle.addEventListener('click', () => {
            drawerToggle.classList.toggle('open');
            sidebar.classList.toggle('open');
            
            const icon = drawerToggle.querySelector('i');
            if (drawerToggle.classList.contains('open')) {
                icon.className = 'fa-solid fa-chevron-left';
            } else {
                icon.className = 'fa-solid fa-chevron-right';
            }
        });
    }

    // Sticker Drag & Click Logic
    if (stickerWrapper && dynamicSticker) {
        let isDraggingSticker = false;
        let startX, startY;
        let initialTop, initialLeft;

        const startDrag = (clientX, clientY) => {
            isDraggingSticker = true;
            if (pickMeTooltip) pickMeTooltip.style.display = 'none';
            
            const style = window.getComputedStyle(stickerWrapper);
            initialLeft = parseInt(style.left, 10) || 0;
            initialTop = parseInt(style.top, 10) || 0;
            
            startX = clientX;
            startY = clientY;
            
            stickerWrapper.style.transition = 'none';
        };

        const onDrag = (clientX, clientY) => {
            if (!isDraggingSticker) return;
            const dx = clientX - startX;
            const dy = clientY - startY;
            stickerWrapper.style.left = (initialLeft + dx) + 'px';
            stickerWrapper.style.top = (initialTop + dy) + 'px';
        };

        const endDrag = (clientX, clientY) => {
            if (!isDraggingSticker) return;
            isDraggingSticker = false;
            stickerWrapper.style.transition = '';
            
            const dx = Math.abs(clientX - startX);
            const dy = Math.abs(clientY - startY);
            
            if (dx < 5 && dy < 5) {
                if (sidebar && !sidebar.classList.contains('open') && drawerToggle) {
                    drawerToggle.click();
                }
            }
        };

        // Mouse Events
        stickerWrapper.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY));
        window.addEventListener('mousemove', (e) => onDrag(e.clientX, e.clientY));
        window.addEventListener('mouseup', (e) => endDrag(e.clientX, e.clientY));

        // Touch Events
        stickerWrapper.addEventListener('touchstart', (e) => startDrag(e.touches[0].clientX, e.touches[0].clientY), {passive: false});
        window.addEventListener('touchmove', (e) => {
            if (isDraggingSticker) e.preventDefault();
            onDrag(e.touches[0].clientX, e.touches[0].clientY);
        }, {passive: false});
        window.addEventListener('touchend', (e) => {
            if (e.changedTouches.length > 0) {
                endDrag(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            } else {
                endDrag(startX, startY); // Fallback if lost
            }
        });
    }

    // Queue Floating Toggle
    if (queueToggleBtn && queueCloseBtn && queueFloating) {
        queueToggleBtn.addEventListener('click', () => {
            queueFloating.classList.add('open');
            queueToggleBtn.classList.add('hide');
        });
        queueCloseBtn.addEventListener('click', () => {
            queueFloating.classList.remove('open');
            queueToggleBtn.classList.remove('hide');
        });
    }

    // Play / Pause Buttons
    playBtn.addEventListener('click', () => {
        if (!currentAlbum) return;
        audio.play().catch(console.error);
    });
    
    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });
    
    // Prev / Next Buttons
    prevBtn.addEventListener('click', playPrev);
    nextBtn.addEventListener('click', playNext);

    // Stop Button
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        toggleAnimation('paused');
    });

    // Switch Button (Sequential Album)
    switchBtn.addEventListener('click', () => {
        if (albums.length === 0) return;
        let currentIdx = albums.findIndex(a => a.id === currentAlbum?.id);
        let nextIdx = (currentIdx + 1) % albums.length;
        loadAlbumCassette(albums[nextIdx], true);
    });
    
    // Audio Events
    audio.addEventListener('play', () => {
        isPlaying = true;
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'flex';
        toggleAnimation('running');
    });
    
    audio.addEventListener('pause', () => {
        isPlaying = false;
        playBtn.style.display = 'flex';
        pauseBtn.style.display = 'none';
        toggleAnimation('paused');
    });
    
    audio.addEventListener('ended', playNext);
    
    

    // Volume Knob Drag Logic
    let isDraggingKnob = false;

    const updateKnobVol = (vol) => {
        audio.volume = vol;
        savedVolume = vol;
        const deg = -135 + (vol * 270);
        volumeKnob.style.transform = `rotate(${deg}deg)`;
    };
    updateKnobVol(audio.volume);

    const handleKnobDragStart = () => {
        isDraggingKnob = true;
    };

    const handleKnobDragEnd = () => {
        isDraggingKnob = false;
    };

    const handleKnobDragMove = (clientX, clientY) => {
        if (!isDraggingKnob) return;

        const rect = volumeKnobContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        let dx = clientX - centerX;
        let dy = clientY - centerY;

        let angle = Math.atan2(dx, -dy) * (180 / Math.PI);
        if (angle < -135) angle = -135;
        if (angle > 135) angle = 135;

        let vol = (angle + 135) / 270;

        if (clientY > centerY && Math.abs(dx) < rect.width / 2) {
             if (dx < 0) { vol = 0; } else { vol = 1; }
        }

        if (vol < 0) vol = 0;
        if (vol > 1) vol = 1;

        updateKnobVol(vol);
    };

    // Mouse Events
    volumeKnobContainer.addEventListener('mousedown', handleKnobDragStart);
    window.addEventListener('mouseup', handleKnobDragEnd);
    window.addEventListener('mousemove', (e) => handleKnobDragMove(e.clientX, e.clientY));

    // Touch Events
    volumeKnobContainer.addEventListener('touchstart', handleKnobDragStart, {passive: false});
    window.addEventListener('touchend', handleKnobDragEnd);
    window.addEventListener('touchmove', (e) => {
        if (isDraggingKnob) e.preventDefault();
        if (e.touches.length > 0) {
            handleKnobDragMove(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, {passive: false});
}