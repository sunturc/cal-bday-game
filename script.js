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


// ==================== MUSIC AUTOPLAY WORKAROUND ====================
const music = document.getElementById('birthdayMusic');

function playMusic() {
    music.play();
    document.removeEventListener('click', playMusic);
}

document.addEventListener('click', playMusic);
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
