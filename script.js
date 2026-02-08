// script.js - Updated to 28 items (27 videos + 1 photo), active class for amazing effect, full responsive

document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const buttons = document.querySelector('.buttons');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const confetti = document.getElementById('confetti');

    // Reveal
    setTimeout(() => {
        message.classList.remove('hidden');
        buttons.classList.remove('hidden');
    }, 1000);

    // Hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 4}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }
    setInterval(createHeart, 400);

    // Dodge (mouse + touch)
    function dodgeButton(e) {
        e.preventDefault();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        if (!clientX || !clientY) return;

        const rect = noBtn.getBoundingClientRect();
        const dist = Math.hypot(
            clientX - (rect.left + rect.width / 2),
            clientY - (rect.top + rect.height / 2)
        );
        if (dist < 120) {
            const angle = Math.atan2(
                clientY - (rect.top + rect.height / 2),
                clientX - (rect.left + rect.width / 2)
            );
            let newX = rect.left + Math.cos(angle + Math.PI) * (window.innerWidth < 768 ? 150 : 200);
            let newY = rect.top + Math.sin(angle + Math.PI) * (window.innerWidth < 768 ? 150 : 200);
            newX = Math.max(10, Math.min(window.innerWidth - rect.width - 10, newX));
            newY = Math.max(10, Math.min(window.innerHeight - rect.height - 10, newY));
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;
        }
    }

    noBtn.addEventListener('mousemove', dodgeButton);
    noBtn.addEventListener('touchmove', dodgeButton, { passive: false });
    noBtn.addEventListener('touchstart', dodgeButton, { passive: false });

    // Yes → Memories with 28 items
    yesBtn.addEventListener('click', () => {
        createConfetti();

        setTimeout(() => {
            document.body.innerHTML = '';

            const memories = document.createElement('div');
            memories.id = 'memories-page';
            memories.innerHTML = `
                <h2 class="memories-title">Our Eternal Love Story ❤️ - Scroll Through Our Magical Moments</h2>
                <div class="video-gallery">
                    <!-- Video 1 -->
                    <div class="video-slide">
                        <div class="video-header">The day you lit up my world with your smile – forever my sunshine! 🌟</div>
                        <video autoplay muted loop playsinline>
                            <source src="video1.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 2 -->
                    <div class="video-slide">
                        <div class="video-header">Our laughter echoes in my heart – you're my favorite melody! 🎶</div>
                        <video autoplay muted loop playsinline>
                            <source src="video2.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 3 -->
                    <div class="video-slide">
                        <div class="video-header">In your eyes, I found my home – endless love, my darling! 🏡❤️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video3.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 4 -->
                    <div class="video-slide">
                        <div class="video-header">Every hug feels like heaven – you're my angel! 👼</div>
                        <video autoplay muted loop playsinline>
                            <source src="video4.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 5 -->
                    <div class="video-slide">
                        <div class="video-header">With you, every moment is a dream come true! ✨</div>
                        <video autoplay muted loop playsinline>
                            <source src="video5.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 6 -->
                    <div class="video-slide">
                        <div class="video-header">Your love is my greatest adventure – let's explore forever! 🗺️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video6.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 7 -->
                    <div class="video-slide">
                        <div class="video-header">Dancing through life with you – my perfect partner! 💃🕺</div>
                        <video autoplay muted loop playsinline>
                            <source src="video7.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 8 -->
                    <div class="video-slide">
                        <div class="video-header">Sunsets are beautiful, but nothing compares to you! 🌅</div>
                        <video autoplay muted loop playsinline>
                            <source src="video8.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 9 -->
                    <div class="video-slide">
                        <div class="video-header">Holding your hand makes everything right! 🤝❤️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video9.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 10 -->
                    <div class="video-slide">
                        <div class="video-header">You're the spark that ignites my soul! 🔥</div>
                        <video autoplay muted loop playsinline>
                            <source src="video10.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 11 -->
                    <div class="video-slide">
                        <div class="video-header">Our story is my favorite fairy tale! 📖✨</div>
                        <video autoplay muted loop playsinline>
                            <source src="video11.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 12 -->
                    <div class="video-slide">
                        <div class="video-header">Whispers of love in every breeze with you! 🌬️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video12.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 13 -->
                    <div class="video-slide">
                        <div class="video-header">You're my forever and always! ♾️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video13.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 14 -->
                    <div class="video-slide">
                        <div class="video-header">Sweet kisses that melt my heart! 💋</div>
                        <video autoplay muted loop playsinline>
                            <source src="video14.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 15 -->
                    <div class="video-slide">
                        <div class="video-header">Adventures await us – together! 🚀</div>
                        <video autoplay muted loop playsinline>
                            <source src="video15.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 16 -->
                    <div class="video-slide">
                        <div class="video-header">Your smile is my daily dose of happiness! 😊</div>
                        <video autoplay muted loop playsinline>
                            <source src="video16.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 17 -->
                    <div class="video-slide">
                        <div class="video-header">Love blooms eternally with you! 🌹</div>
                        <video autoplay muted loop playsinline>
                            <source src="video17.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 18 -->
                    <div class="video-slide">
                        <div class="video-header">You're the missing piece to my puzzle! 🧩</div>
                        <video autoplay muted loop playsinline>
                            <source src="video18.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 19 -->
                    <div class="video-slide">
                        <div class="video-header">Endless cuddles and love! 🐻</div>
                        <video autoplay muted loop playsinline>
                            <source src="video19.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 20 -->
                    <div class="video-slide">
                        <div class="video-header">Our love is timeless and true! ⏳❤️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video20.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 21 -->
                    <div class="video-slide">
                        <div class="video-header">Every glance from you sets my heart racing! 💓</div>
                        <video autoplay muted loop playsinline>
                            <source src="video21.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 22 -->
                    <div class="video-slide">
                        <div class="video-header">Building dreams together, one moment at a time! 🛠️❤️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video22.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 23 -->
                    <div class="video-slide">
                        <div class="video-header">Your voice is the sweetest sound I know! 🎤</div>
                        <video autoplay muted loop playsinline>
                            <source src="video23.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 24 -->
                    <div class="video-slide">
                        <div class="video-header">Lost in your love, found in your arms! 🤗</div>
                        <video autoplay muted loop playsinline>
                            <source src="video24.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 25 -->
                    <div class="video-slide">
                        <div class="video-header">You're my happy place! 🏖️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video25.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 26 -->
                    <div class="video-slide">
                        <div class="video-header">Grateful for every second with you! 🙏❤️</div>
                        <video autoplay muted loop playsinline>
                            <source src="video26.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Video 27 -->
                    <div class="video-slide">
                        <div class="video-header">Our journey is just beginning – infinite love! 🚀</div>
                        <video autoplay muted loop playsinline>
                            <source src="video27.mp4" type="video/mp4">
                        </video>
                    </div>
                    <!-- Photo 28 (image29 with caption) -->
                    <div class="video-slide image-slide">
                        <div class="video-header">One day we will make it official: Husband and Wife ❤️</div>
                        <img src="image29.jpeg">
                </div>
                <audio id="bg-music" autoplay loop>
                    <source src="music.mp3" type="audio/mpeg">
                </audio>
                <!-- Modal -->
                <div id="video-modal">
                    <div id="modal-header"></div>
                    <video id="modal-video" controls playsinline></video>
                </div>
            `;
            document.body.appendChild(memories);

            const bgMusic = document.getElementById('bg-music');
            bgMusic.volume = 0.3;

            const videos = document.querySelectorAll('.video-slide video');
            const modal = document.getElementById('video-modal');
            const modalVideo = document.getElementById('modal-video');
            const modalHeader = document.getElementById('modal-header');

            // IntersectionObserver for active class (amazing effect on selected)
            const observerOptions = {
                root: document.querySelector('.video-gallery'),
                threshold: 0.6,
                rootMargin: '0px'
            };
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('active', entry.isIntersecting);
                });
            }, observerOptions);

            document.querySelectorAll('.video-slide').forEach(slide => {
                observer.observe(slide);

                const media = slide.querySelector('video') || slide.querySelector('img');
                const headerText = slide.querySelector('.video-header').textContent;

                slide.addEventListener('click', () => {
                    if (media.tagName === 'VIDEO') {
                        videos.forEach(v => v.pause());

                        modalVideo.src = media.querySelector('source').src;
                        modalVideo.muted = false;
                        modalVideo.volume = 0.7;
                        modalVideo.play();
                        modalVideo.style.display = '';

                        let modalImg = document.getElementById('modal-img');
                        if (modalImg) modalImg.style.display = 'none';

                    } else { // Image
                        let modalImg = document.getElementById('modal-img');
                        if (!modalImg) {
                            modalImg = document.createElement('img');
                            modalImg.id = 'modal-img';
                            modalImg.style = modalVideo.style.cssText;
                            modal.appendChild(modalImg);
                        }
                        modalImg.src = media.src;
                        modalImg.style.display = '';

                        modalVideo.style.display = 'none';
                    }

                    modalHeader.textContent = headerText;
                    bgMusic.volume = 0.1;

                    modal.style.display = 'flex';
                });
            });

            modal.addEventListener('click', (e) => {
                if (e.target !== modalVideo && e.target !== document.getElementById('modal-img') && e.target !== modalHeader) {
                    if (modalVideo) modalVideo.pause();
                    modal.style.display = 'none';
                    bgMusic.volume = 0.3;
                    videos.forEach(v => {
                        v.muted = true;
                        v.play();
                    });
                }
            });

            const gallery = document.querySelector('.video-gallery');
            gallery.addEventListener('scroll', () => {
                videos.forEach(video => {
                    if (!video) return; // Skip images
                    const rect = video.getBoundingClientRect();
                    const isVisible = (window.innerWidth > 768) 
                        ? (rect.left >= -100 && rect.right <= window.innerWidth + 100)
                        : (rect.top >= -100 && rect.bottom <= window.innerHeight + 100);
                    if (isVisible) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            });

            if (videos[0]) videos[0].play();
        }, 600);
    });

    // Confetti
    function createConfetti() {
        for (let i = 0; i < 150; i++) {
            const piece = document.createElement('div');
            piece.classList.add('confetti-piece');
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            piece.style.animationDuration = `${Math.random() * 2 + 2}s`;
            confetti.appendChild(piece);
            setTimeout(() => piece.remove(), 5000);
        }
    }

    noBtn.addEventListener('click', () => alert('Aww, but our love is undeniable! Try Yes? 😘'));
});