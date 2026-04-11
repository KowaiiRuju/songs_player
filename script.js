// ============================================================
//  ALBUMS & TRACKS DATA
// ============================================================
const albums = [
    {
        id: 'energizer',
        name: 'Energizer',
        emoji: '⚡',
        color: 'linear-gradient(135deg, #f59e0b, #d97706)',
        tracks: [
            {
                title: 'WILDFLOWER',
                artist: 'Billie Eilish',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971439/Billie_Eilish_-_WILDFLOWER_Official_Lyric_Video_fnoc8b.mp3'
            },
            {
                title: 'BIRDS OF A FEATHER',
                artist: 'Billie Eilish',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971412/Billie_Eilish_-_BIRDS_OF_A_FEATHER_Official_Music_Video_qguct0.mp3'
            },
            {
                title: 'What Was I Made For',
                artist: 'Billie Eilish',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971427/Billie_Eilish_-_What_Was_I_Made_For_Official_Music_Video_lpg0kg.mp3'
            },
            {
                title: 'The Fate of Ophelia',
                artist: 'Taylor Swift',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875814/Taylor%20Swift%20-%20The%20Fate%20of%20Ophelia%20%28Official%20Music%20Video%29.mp3'
            },
            {
                title: "Red (Taylor's Version)",
                artist: 'Taylor Swift',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875825/Taylor%20Swift%20-%20Red%20%28Taylor%27s%20Version%29%20%28Lyric%20Video%29.mp3'
            }
        ]
    },
    {
        id: 'relapse-malala',
        name: 'Relapse Malala',
        emoji: '💙',
        color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        tracks: [
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
                title: 'Everything',
                artist: 'Michael Bublé',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971361/Michael_Bubl%C3%A9_-_Everything_Official_Music_Video_dsie9f.mp3'
            },
            {
                title: 'Multo (Extended)',
                artist: 'Cup of Joe',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775874729/Multo%20%28Extended%29%20%28The%20Cozy%20Cove%20Fest%29%20-%20Cup%20of%20Joe.mp3'
            },
            {
                title: 'Deslocado',
                artist: 'NAPA',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875845/NAPA%20-%20Deslocado%20%28Official%20Video%29.mp3'
            },
            {
                title: 'Back To December',
                artist: 'Taylor Swift',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875848/Taylor%20Swift%20-%20Back%20To%20December.mp3'
            },
            {
                title: 'Tindahan ng mga Alaala',
                artist: 'Filipino',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875870/tindahan%20ng%20mga%20alaala.mp3'
            }
        ]
    },
    {
        id: 'ado-rable',
        name: 'ADO-rable',
        emoji: '🎤',
        color: 'linear-gradient(135deg, #ec4899, #be185d)',
        tracks: [
            {
                title: 'Vivarium',
                artist: 'Ado',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775874385/%E3%80%90Ado%E3%80%91%E3%83%93%E3%83%90%E3%83%AA%E3%82%A6%E3%83%A0%20%28Vivarium%29.mp3'
            },
            {
                title: '唱 (Uta)',
                artist: 'Ado',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775874599/%E3%80%90Ado%E3%80%91%20%E5%94%B1.mp3'
            },
            {
                title: 'うっせぇわ (THE FIRST TAKE)',
                artist: 'Ado',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775876162/Ado%C2%A0-%C2%A0%E3%81%86%E3%81%A3%E3%81%9B%E3%81%87%E3%82%8F%C2%A0%E2%A7%B8%C2%A0THE%C2%A0FIRST%C2%A0TAKE.mp3'
            },
            {
                title: 'Aishite Aishite Aishite',
                artist: 'Ado',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775876115/Aishite%20Aishite%20Aishite.mp3'
            },
            {
                title: 'Kawaikute Gomen',
                artist: 'HoneyWorks',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775876129/Kawaikute%20Gomen.mp3'
            },
            {
                title: 'Reflection',
                artist: 'Lea Salonga',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971373/Lea_Salonga_-_Reflection_Lyrics_zbjp10.mp3'
            },
            {
                title: "How Far I'll Go",
                artist: "Auli'i Cravalho",
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971274/Moana_How_Far_I_ll_Go_Lyrics_Auli_i_Cravalho_in1tny.mp3'
            },
            {
                title: 'A Whole New World',
                artist: 'ZAYN & Zhavia Ward',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971286/ZAYN_Zhavia_Ward_-_A_Whole_New_World_End_Title_From__Aladdin__rg_zwK_sSEY_lbg8kl.mp3'
            }
        ]
    },
    {
        id: 'jpop',
        name: 'Jpop',
        emoji: '🌸',
        color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        tracks: [
            {
                title: 'Hikaru Nara',
                artist: 'Goose House',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875808/Hikaru%20Nara%20-%20Goose%20House%20%5BRomaji%2C%20Espa%C3%B1ol%2C%20English%2C%20Color%20Coded%5D.mp3'
            },
            {
                title: 'Odoriko (踊り子)',
                artist: 'Vaundy',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875861/Vaundy%20-%20Odoriko%20%28%E8%B8%8A%E3%82%8A%E5%AD%90%29%20%28Lyrics%29%20%28Rom%E2%A7%B8Eng%29.mp3'
            }
        ]
    },
    {
        id: 'tj',
        name: 'TJ',
        emoji: '🎵',
        color: 'linear-gradient(135deg, #10b981, #065f46)',
        tracks: [
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
                title: 'Puhon',
                artist: 'TJ Monterde',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971420/TJ_Monterde_-_Puhon_-_Official_Lyric_Video_lfzi91.mp3'
            },
            {
                title: 'Dating Tayo',
                artist: 'TJ Monterde',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1773971434/TJ_Monterde_-_Dating_Tayo_Lyric_Video_enradi.mp3'
            },
            {
                title: 'DARATING DIN',
                artist: 'TJ Monterde',
                url: 'https://res.cloudinary.com/dxmgdfim6/video/upload/v1775875814/DARATING_DIN_-_TJ_Monterde_OFFICIAL_LYRIC_VIDEO_ovocgq.mp3'
            }
        ]
    }
];

// Store durations
const trackDurations = {};

// Flatten into a global array for lookup
let allTracks = [];
albums.forEach(album => {
    album.tracks.forEach((track, i) => {
        allTracks.push({
            ...track,
            albumId: album.id,
            albumName: album.name,
            albumEmoji: album.emoji,
            albumColor: album.color,
            globalIndex: allTracks.length
        });
    });
    // Re-stamp globalIndex after push
});
// Fix globalIndex
allTracks = allTracks.map((t, i) => ({ ...t, globalIndex: i }));

// ============================================================
//  PLAYER STATE
// ============================================================
// ============================================================
//  LIKES PERSISTENCE (localStorage)
// ============================================================
function loadLikes() {
    try {
        const stored = localStorage.getItem('music_hub_liked_tracks');
        return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
}
function saveLikes(likedSet) {
    try {
        localStorage.setItem('music_hub_liked_tracks', JSON.stringify([...likedSet]));
    } catch {}
}

const state = {
    currentIndex: -1,
    isPlaying: false,
    isShuffled: false,
    isRepeating: false,
    volume: 70,
    liked: loadLikes()
};

// ============================================================
//  DOM REFS
// ============================================================
const $ = id => document.getElementById(id);
const audio = $('audioPlayer');

const playerTitle   = $('playerTitle');
const playerArtist  = $('playerArtist');
const playerThumb   = $('playerThumb');
const playerFavBtn  = $('playerFavBtn');
const playBtn       = $('playBtn');
const playIcon      = $('playIcon');
const prevBtn       = $('prevBtn');
const nextBtn       = $('nextBtn');
const shuffleBtn    = $('shuffleBtn');
const repeatBtn     = $('repeatBtn');
const progressInput = $('progressInput');
const progressFill  = $('progressFill');
const currentTimeEl = $('currentTime');
const durationEl    = $('duration');
const volumeInput   = $('volumeInput');
const volumeFill    = $('volumeFill');
const volBtn        = $('volBtn');
const chipTitle     = $('chipTitle');
const chipArtist    = $('chipArtist');

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderSidebarAlbums();
    renderAllAlbumSections();
    renderLibraryGrid();
    setupEventListeners();
    audio.volume = state.volume / 100;
    preloadDurations();
});

// ============================================================
//  PRELOAD DURATIONS
// ============================================================
function preloadDurations() {
    allTracks.forEach((track, idx) => {
        if (!track.url) return;
        const audio = new Audio();
        audio.addEventListener('loadedmetadata', () => {
            trackDurations[idx] = audio.duration;
            const durEl = document.getElementById(`dur-${idx}`);
            if (durEl) durEl.textContent = fmt(audio.duration);
        });
        audio.src = track.url;
    });
}

// ============================================================
//  SIDEBAR ALBUMS
// ============================================================
function renderSidebarAlbums() {
    const list = $('albumNavList');
    list.innerHTML = '';
    albums.forEach(album => {
        const li = document.createElement('li');
        li.className = 'album-nav-item';
        li.dataset.albumId = album.id;
        li.innerHTML = `
            <div class="album-nav-dot" style="background:${album.color};">${album.emoji}</div>
            <div class="album-nav-info">
                <div class="album-nav-name">${album.name}</div>
                <div class="album-nav-count">${album.tracks.length} songs</div>
            </div>
        `;
        li.addEventListener('click', () => scrollToAlbum(album.id));
        list.appendChild(li);
    });
}

// ============================================================
//  HOME: FLAT SONG LIST (grouped by album)
// ============================================================
function renderAllAlbumSections() {
    const container = $('allAlbumSections');
    container.innerHTML = '';

    // Build one unified song table with album group headers
    const wrapper = document.createElement('div');
    wrapper.className = 'flat-song-list';

    albums.forEach(album => {
        // Skip albums with no real URL
        const realTracks = album.tracks.filter(t => t.url);
        if (realTracks.length === 0) return;

        // Album group header row (anchor for sidebar scroll)
        const groupHeader = document.createElement('div');
        groupHeader.className = 'flat-group-header';
        groupHeader.id = 'section-' + album.id;
        groupHeader.innerHTML = `
            <div class="flat-group-dot" style="background:${album.color};">${album.emoji}</div>
            <span class="flat-group-name">${album.name}</span>
            <span class="flat-group-count">${realTracks.length} songs</span>
            <button class="section-play-all flat-play-all" data-album-id="${album.id}">
                <i class="fas fa-play"></i> Play All
            </button>
        `;
        groupHeader.querySelector('.flat-play-all').addEventListener('click', (e) => {
            e.stopPropagation();
            const firstIdx = allTracks.findIndex(t => t.albumId === album.id && t.url);
            if (firstIdx !== -1) loadAndPlay(firstIdx);
        });
        wrapper.appendChild(groupHeader);

        // Song rows
        const table = document.createElement('div');
        table.className = 'song-table';
        table.id = 'table-' + album.id;
        realTracks.forEach((track, i) => {
            const globalIdx = allTracks.findIndex(t => t.albumId === album.id && t.title === track.title);
            renderSongRow(table, track, i + 1, globalIdx);
        });
        wrapper.appendChild(table);
    });

    container.appendChild(wrapper);
}

function renderSongRow(container, track, num, globalIdx) {
    const row = document.createElement('div');
    row.className = 'song-row';
    row.id = `row-${globalIdx}`;
    row.dataset.idx = globalIdx;

    const isLiked = state.liked.has(globalIdx);
    const likeIcon = isLiked ? 'fas fa-heart' : 'far fa-heart';
    const likeClass = isLiked ? 'song-action-btn like-btn liked' : 'song-action-btn like-btn';

    row.innerHTML = `
        <div class="song-row-num">
            <span class="num-text">${num}</span>
            <span class="play-icon-hover"><i class="fas fa-play"></i></span>
        </div>
        <div class="song-row-info">
            <div class="song-row-title">${track.title}</div>
            <div class="song-row-artist">${track.artist}</div>
        </div>
        <div class="song-row-duration" id="dur-${globalIdx}">—</div>
        <div class="song-row-actions">
            <button class="${likeClass}" data-idx="${globalIdx}" title="Like"><i class="${likeIcon}"></i></button>
        </div>
    `;

    row.addEventListener('click', (e) => {
        if (!e.target.closest('.song-action-btn')) {
            loadAndPlay(globalIdx);
        }
    });

    row.querySelector('.like-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(globalIdx, row.querySelector('.like-btn'));
    });

    container.appendChild(row);
}

// ============================================================
//  LIBRARY GRID
// ============================================================
function renderLibraryGrid() {
    const grid = $('libraryGrid');
    grid.innerHTML = '';
    albums.forEach(album => {
        const card = document.createElement('div');
        card.className = 'album-card';
        card.innerHTML = `
            <div class="album-card-art" style="background:${album.color};">${album.emoji}</div>
            <div class="album-card-name">${album.name}</div>
            <div class="album-card-count">${album.tracks.length} songs</div>
        `;
        card.addEventListener('click', () => {
            showPage('home');
            setNavActive('navHome');
            setTimeout(() => scrollToAlbum(album.id), 100);
        });
        grid.appendChild(card);
    });
}

// ============================================================
//  SEARCH
// ============================================================
function setupSearch() {
    const searchInput = $('searchInput');
    const searchClear = $('searchClear');
    const searchResultsContainer = $('searchResultsContainer');
    const searchResults = $('searchResults');
    const allAlbumSections = $('allAlbumSections');

    function doSearch(query) {
        query = query.trim().toLowerCase();
        if (!query) {
            searchResultsContainer.style.display = 'none';
            allAlbumSections.style.display = '';
            searchClear.style.display = 'none';
            return;
        }
        searchClear.style.display = '';
        const matches = allTracks.filter(t =>
            t.title.toLowerCase().includes(query) ||
            t.artist.toLowerCase().includes(query) ||
            t.albumName.toLowerCase().includes(query)
        );

        searchResultsContainer.style.display = '';
        allAlbumSections.style.display = 'none';
        searchResults.innerHTML = '';

        if (matches.length === 0) {
            searchResults.innerHTML = '<div style="padding:20px;color:var(--text-muted);font-size:14px;">No songs found.</div>';
            return;
        }

        matches.forEach((track, i) => {
            renderSongRow(searchResults, track, i + 1, track.globalIndex);
        });
    }

    searchInput.addEventListener('input', () => doSearch(searchInput.value));
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        doSearch('');
        searchInput.focus();
    });

    // Mobile search sync
    const mobileInput = $('searchInputMobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', () => {
            searchInput.value = mobileInput.value;
            doSearch(mobileInput.value);
        });
    }
}

// ============================================================
//  SCROLL TO ALBUM
// ============================================================
function scrollToAlbum(albumId) {
    showPage('home');
    setNavActive('navHome');
    const section = document.getElementById('section-' + albumId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight sidebar item
        document.querySelectorAll('.album-nav-item').forEach(el => el.classList.remove('active'));
        const sidebarItem = document.querySelector(`[data-album-id="${albumId}"]`);
        if (sidebarItem) sidebarItem.classList.add('active');
        document.querySelector('.app-wrapper').classList.remove('sidebar-open');
    }
}

// ============================================================
//  LOAD & PLAY
// ============================================================
function loadAndPlay(index) {
    if (index < 0 || index >= allTracks.length) return;
    const track = allTracks[index];
    if (!track.url) return alert('No audio URL for this track.');

    // Remove playing highlight from old row
    document.querySelectorAll('.song-row.playing').forEach(r => r.classList.remove('playing'));

    state.currentIndex = index;
    audio.src = track.url;
    audio.load();

    // Update player bar
    playerTitle.textContent = track.title;
    playerArtist.textContent = track.artist;
    chipTitle.textContent = track.title;
    chipArtist.textContent = track.artist;

    // Thumb color
    playerThumb.style.background = track.albumColor;
    playerThumb.innerHTML = `<span style="font-size:20px">${track.albumEmoji}</span>`;

    // Highlight row
    const row = document.getElementById(`row-${index}`);
    if (row) {
        row.classList.add('playing');
        // Show eq bar in number cell
        const numEl = row.querySelector('.play-icon-hover');
        if (numEl) numEl.innerHTML = '<div class="eq-bars"><div class="eq-bar" style="height:8px"></div><div class="eq-bar" style="height:12px"></div><div class="eq-bar" style="height:6px"></div></div>';
    }

    // Update like button state
    updateFavBtn();

    audio.play().then(() => {
        state.isPlaying = true;
        updatePlayBtn();
        playerThumb.classList.add('playing');
    }).catch(err => {
        console.error('Playback error:', err);
    });
}

function updateFavBtn() {
    const liked = state.liked.has(state.currentIndex);
    playerFavBtn.className = 'player-fav-btn' + (liked ? ' liked' : '');
    playerFavBtn.innerHTML = liked ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
}

function toggleLike(idx, btn) {
    if (state.liked.has(idx)) {
        state.liked.delete(idx);
        btn.classList.remove('liked');
        btn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        state.liked.add(idx);
        btn.classList.add('liked');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    saveLikes(state.liked);
    if (idx === state.currentIndex) updateFavBtn();
}

// ============================================================
//  PLAYBACK CONTROLS
// ============================================================
function togglePlay() {
    if (state.currentIndex === -1) {
        loadAndPlay(0);
        return;
    }
    if (state.isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
}

function prev() {
    if (state.currentIndex <= 0) {
        loadAndPlay(allTracks.length - 1);
    } else {
        loadAndPlay(state.currentIndex - 1);
    }
}

function next() {
    if (state.isShuffled) {
        let r;
        do { r = Math.floor(Math.random() * allTracks.length); }
        while (allTracks.length > 1 && r === state.currentIndex);
        loadAndPlay(r);
    } else if (state.currentIndex >= allTracks.length - 1) {
        loadAndPlay(0);
    } else {
        loadAndPlay(state.currentIndex + 1);
    }
}

function updatePlayBtn() {
    if (state.isPlaying) {
        playIcon.className = 'fas fa-pause';
    } else {
        playIcon.className = 'fas fa-play';
    }
}

// ============================================================
//  PAGE NAVIGATION
// ============================================================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    const el = pageId === 'home' ? $('pageHome') : $('pageLibrary');
    if (el) el.classList.add('active-page');
}

function setNavActive(navId) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(navId).classList.add('active');
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
function setupEventListeners() {
    // Play / Pause
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    // Shuffle
    shuffleBtn.addEventListener('click', () => {
        state.isShuffled = !state.isShuffled;
        shuffleBtn.classList.toggle('active', state.isShuffled);
    });

    // Repeat
    repeatBtn.addEventListener('click', () => {
        state.isRepeating = !state.isRepeating;
        repeatBtn.classList.toggle('active', state.isRepeating);
    });

    // Like in player bar
    playerFavBtn.addEventListener('click', () => {
        if (state.currentIndex === -1) return;
        const btn = document.querySelector(`[data-idx="${state.currentIndex}"].like-btn`);
        toggleLike(state.currentIndex, btn || playerFavBtn);
    });

    // Progress
    progressInput.addEventListener('input', () => {
        if (audio.duration) {
            audio.currentTime = (progressInput.value / 100) * audio.duration;
        }
    });

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const pct = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = pct + '%';
            progressInput.value = pct;
            currentTimeEl.textContent = fmt(audio.currentTime);
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = fmt(audio.duration);
        // Update track duration in row
        const el = document.getElementById(`dur-${state.currentIndex}`);
        if (el) el.textContent = fmt(audio.duration);
        trackDurations[state.currentIndex] = audio.duration;
    });

    audio.addEventListener('play', () => {
        state.isPlaying = true;
        updatePlayBtn();
        playerThumb.classList.add('playing');
    });

    audio.addEventListener('pause', () => {
        state.isPlaying = false;
        updatePlayBtn();
        playerThumb.classList.remove('playing');
    });

    audio.addEventListener('ended', () => {
        if (state.isRepeating) {
            audio.currentTime = 0;
            audio.play();
        } else {
            state.isPlaying = true; // keep playing mode for next
            next();
        }
    });

    // Volume
    volumeInput.addEventListener('input', () => {
        const v = volumeInput.value;
        audio.volume = v / 100;
        volumeFill.style.width = v + '%';
        state.volume = v;
        const icon = volBtn.querySelector('i');
        if (v == 0) icon.className = 'fas fa-volume-xmark';
        else if (v < 50) icon.className = 'fas fa-volume-low';
        else icon.className = 'fas fa-volume-high';
    });

    // Volume mute toggle
    volBtn.addEventListener('click', () => {
        if (audio.volume > 0) {
            state._savedVol = audio.volume;
            audio.volume = 0;
            volumeInput.value = 0;
            volumeFill.style.width = '0%';
        } else {
            audio.volume = state._savedVol || 0.7;
            volumeInput.value = (audio.volume * 100);
            volumeFill.style.width = (audio.volume * 100) + '%';
        }
    });

    // Sidebar toggle
    $('sidebarToggle').addEventListener('click', () => {
        const wrapper = document.querySelector('.app-wrapper');
        if (window.innerWidth <= 768) {
            wrapper.classList.toggle('sidebar-open');
        } else {
            wrapper.classList.toggle('sidebar-collapsed');
        }
    });

    // Nav buttons
    $('navHome').addEventListener('click', () => {
        showPage('home');
        setNavActive('navHome');
        document.querySelector('.app-wrapper').classList.remove('sidebar-open');
    });

    $('navLibrary').addEventListener('click', () => {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
        $('pageLibrary').classList.add('active-page');
        setNavActive('navLibrary');
        document.querySelector('.app-wrapper').classList.remove('sidebar-open');
    });

    // Search
    setupSearch();

    // Intersect observer: highlight sidebar album as you scroll
    const sections = document.querySelectorAll('.album-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id.replace('section-', '');
                document.querySelectorAll('.album-nav-item').forEach(el => el.classList.remove('active'));
                const sidebarItem = document.querySelector(`[data-album-id="${id}"]`);
                if (sidebarItem) sidebarItem.classList.add('active');
            }
        });
    }, { threshold: 0.3, root: $('contentScroll') });

    sections.forEach(s => observer.observe(s));
}

// ============================================================
//  HELPERS
// ============================================================
function fmt(secs) {
    if (!secs || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}