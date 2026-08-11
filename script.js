// ================================================================
// 🎂 TYPE ALL FRIEND MESSAGES HERE! 🎂
// Add as many friends as you want. Put their name in quotes,
// followed by a colon, and their letter in quotes!
// ================================================================
const birthdayLetters = {
    "Irfan Suroso": "We may less hang out anymore, but we hope the gift we prepares for you are conveying how much we care about you, cheers, Happy fucking Birthday!",
    "mario": "kaya orang aja tir ulang taun. semoga selain bab, segala urusan yg lain bisa lancar. 🥰",
    "Nina N Ningrum": "Selamat ulang tahun neng tir sehat selalu, selalu bahagia dalam keadaan apapun yaa, salam manis t'nina 🌸",
"Askuzz": "Heppi besdey Tiaraaa. Semoga panjang umur dan sehat selaluu. Semoga babang Valko segera riliss! Dan Semoga semua-semua hal2 baik terjadi sepanjang tahun inii! Aku ingin towewew Valkoo 🫶✨️✨️",
"njel": "MET ULTAH CAL, makasih udah ngajak main terus dan nemenin kehidupan per-game-an!! Semoga diberkahi umur panjang dan kondisi sehat senantiasa. Keep being everyone's friend!",
    "Bunga dan Randy": "Selamat Ulang Tahun! Semoga selalu diberikan yang Terbaik, berhasil move-on dari mantan gebetan, dan segera didatangi calon pacar yang bucin, introvert, pintar, dan tajir itu.",
"ULAT SABU": "Always be happy person mbatir",
"Aya": `It's been quite a rocky road this past year and a lot of things have happened. It takes a lot of strength to move forward no matter what life throws at you but I'm grateful that you keep walking forward. There are many things are still in store for you and many more experiences that will come your way. You are strong, have made leaps through many things and still look at the best qualities in other people.

I wish nothing but the best for you. May it always be sunshine after the rain, and may you always find the reason to smile no matter what happens. Never give up on the things you enjoy and the things that make your life worthwhile. Never let anything dampen you, or dim the brilliance that is you. I wish you the very best, many gifts, a bounty of happiness and so many more chances to enjoy life. You are so loved, always remember that.

Happy birthday dearest, I wish you have a beautiful day today.`,
"Andini SA": `Selamat ulang, tahuuun~
Selamat ulang, tahuuun~
Selamat ulang tahun, Tiara~
Selamat ulang tahuuun~~~~~~

Ciye yang nambah usiaaa~
Nggak habis habis aku berdoa buat boddhisatva reincarnated satu ini. May all the happiness, riches and the blessing of the world be upon you because you deserve it! 

Keep being the kind person you are, and please know that a lot of people love you!! Live long, live happily, live successfully and spread the kindness like its pandemic!! 

Sincerely temen onlenmu, Ndeneee`,
  "ENFJ Slay 💅🏻": `SELAMAT ULANG TAHUN BABU WANYANYAN!! 🌻
CEPET KAYAAAAAAAA 🫵🏻
KERJA DI SQUARE ENIX 🫵🏻
TAHUN DEPAN DAPET JODOHNYA 🫵🏻
PANJANG OEMOER, SEHAT TEROOOSS, RAJIN OLAHRAGA, BAHAGYAAAAAAA 🫵🏻
JAYAAA JAYAAA JAYAAAA 🎉🎉🎉🎉`,
};
// ================================================================


// ================================================================
// 🎵 MINI MUSIC PLAYER & PLAYLIST MANAGER 🎵
// Add as many songs as you want to this list!
// ================================================================
const playlist = [
    { title: "🎵 Silk & Cinder", file: "track1.mp3" },
    { title: "🎵 Meshrabiya", file: "track2.mp3" },
    { title: "🎵 Sirocco Nostalgia", file: "track3.mp3" },
    { title: "🎵 Red Sand", file: "track4.mp3" },
 { title: "🎵 Wadi Walk", file: "track5.mp3" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let isMuted = false;

const music = document.getElementById('birthdayMusic');
const trackTitleEl = document.getElementById('track-title');
const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnMute = document.getElementById('btn-mute');

// 1. Load a track by its index in the playlist
function loadTrack(index) {
    currentTrackIndex = index;
    music.src = playlist[currentTrackIndex].file;
    trackTitleEl.innerText = playlist[currentTrackIndex].title;
}

// 2. Play the current track
function playTrack() {
    music.play().then(() => {
        isPlaying = true;
        btnPlay.innerText = "⏸️";
    }).catch(error => {
        console.log("Waiting for user interaction to play audio...");
    });
}

// 3. Pause the current track
function pauseTrack() {
    music.pause();
    isPlaying = false;
    btnPlay.innerText = "▶️";
}

// 4. Toggle Play/Pause Button
btnPlay.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevents triggering document autoplay listener
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});

// 5. Next Track Button
function nextSong() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) playTrack();
}
btnNext.addEventListener('click', function(e) {
    e.stopPropagation();
    nextSong();
});

// 6. Previous Track Button
btnPrev.addEventListener('click', function(e) {
    e.stopPropagation();
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) playTrack();
});

// 7. Mute/Unmute Button
btnMute.addEventListener('click', function(e) {
    e.stopPropagation();
    isMuted = !isMuted;
    music.muted = isMuted;
    btnMute.innerText = isMuted ? "🔇" : "🔊";
});

// 8. Automatically play the next song when the current one ends!
music.addEventListener('ended', function() {
    nextSong();
});

// 9. Load the first track immediately on page load
loadTrack(0);

// 10. Autoplay Workaround: Play on first click anywhere on the page
function firstClickAutoplay() {
    if (!isPlaying) {
        playTrack();
    }
    document.removeEventListener('click', firstClickAutoplay);
}
document.addEventListener('click', firstClickAutoplay);
// ===================================================================
// ===================================================================


// --- 1. MAILBOX MODAL LOGIC ---
const openMailBtn = document.getElementById('open-mail-btn');
const closeMailBtn = document.getElementById('close-mail-btn');
const mailModal = document.getElementById('mail-modal');
const senderListContainer = document.getElementById('sender-list');
const letterDisplay = document.getElementById('letter-display');

// Open the Mailbox
openMailBtn.addEventListener('click', function() {
    mailModal.classList.add('show');
});

// Close the Mailbox when clicking 'X'
closeMailBtn.addEventListener('click', function() {
    mailModal.classList.remove('show');
});

// Close the Mailbox if clicking the dark background outside the card
mailModal.addEventListener('click', function(event) {
    if (event.target === mailModal) {
        mailModal.classList.remove('show');
    }
});

// Automatically generate a button for each friend name above!
function buildMailbox() {
    senderListContainer.innerHTML = ''; 
    
    for (const friendName in birthdayLetters) {
        const btn = document.createElement('button');
        btn.classList.add('sender-btn');
        btn.innerText = friendName;
        
        btn.addEventListener('click', function() {
            document.querySelectorAll('.sender-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            letterDisplay.innerText = birthdayLetters[friendName];
        });
        
        senderListContainer.appendChild(btn);
    }
}
buildMailbox();


// --- 2. THE MASTER MENU BUILDER ---
function setupCategory(categoryName) {
    const categoryBtn = document.getElementById('btn-category-' + categoryName);
    const optionsMenu = document.getElementById(categoryName + '-options');
    
    categoryBtn.addEventListener('click', function() {
        optionsMenu.classList.toggle('show');
    });

    const itemLayer = document.getElementById('item-' + categoryName);
    
    function removeAllStyles() {
        itemLayer.classList.remove(
            categoryName + '-style-1', 
            categoryName + '-style-2', 
            categoryName + '-style-3'
        );
    }

    document.getElementById('btn-' + categoryName + '-1').addEventListener('click', function() {
        removeAllStyles();
        itemLayer.style.display = 'block';
        itemLayer.classList.add(categoryName + '-style-1');
    });

    document.getElementById('btn-' + categoryName + '-2').addEventListener('click', function() {
        removeAllStyles();
        itemLayer.style.display = 'block';
        itemLayer.classList.add(categoryName + '-style-2');
    });

    document.getElementById('btn-' + categoryName + '-3').addEventListener('click', function() {
        removeAllStyles();
        itemLayer.style.display = 'block';
        itemLayer.classList.add(categoryName + '-style-3');
    });

    document.getElementById('btn-' + categoryName + '-off').addEventListener('click', function() {
        removeAllStyles();
        itemLayer.style.display = 'none';
    });
}

// --- START THE GAME ---
setupCategory('hair');
setupCategory('shirt');
setupCategory('pants');
setupCategory('accessories');
setupCategory('robe');
setupCategory('shoes');

// ================================================================
// --- 3. 3D DESERT DUNE PARALLAX EFFECT (No. 5) ---
// ================================================================
const desertScene = document.getElementById('scene');

document.addEventListener('mousemove', function(event) {
    // 1. Calculate mouse position relative to the center of the window (-1 to +1)
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    
    // 2. Shift the background image slightly opposite to the mouse direction
    // Default center is 50% 50%. We shift it by up to +/- 4%
    const moveX = 50 + (x * 4);
    const moveY = 50 + (y * 4);
    
    // 3. Apply the new background position to the scene
    if (desertScene) {
        desertScene.style.backgroundPosition = `${moveX}% ${moveY}%`;
    }
});

// ================================================================
// --- 4. INTERACTIVE HAPPY BOUNCE ON CLICK (No. 4) ---
// ================================================================
const characterBase = document.querySelector('.character-base');

if (characterBase) {
    // 1. When the character is clicked, add the 'bounce' animation class
    characterBase.addEventListener('click', function() {
        characterBase.classList.add('bounce');
    });

    // 2. When the jump animation finishes (0.5s later), remove the class 
    //    so he can be clicked and bounce again anytime!
    characterBase.addEventListener('animationend', function() {
        characterBase.classList.remove('bounce');
    });
}
