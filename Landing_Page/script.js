
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const playNowBtn = document.getElementById('playNowBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const bulbGlow = document.querySelector('.bulb-glow');
const bulbContainer = document.getElementById('bulbContainer');
const bulb = document.getElementById('bulb');
const body = document.body;

function openAuthModal() {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

playNowBtn.addEventListener('click', openAuthModal);
closeModal.addEventListener('click', closeAuthModal);

// Event: Click outside modal
authModal.addEventListener('click', function (e) {
    if (e.target === authModal) {
        closeAuthModal();
    }
});

// Event: Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && authModal.classList.contains('active')) {
        closeAuthModal();
    }
});

// ============================================
// Tab Switching
// ============================================

loginTab.addEventListener('click', function () {
    // UI Update
    loginTab.classList.add('active');
    signupTab.classList.remove('active');

    // Form Display
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';

    // Text Update
    modalTitle.textContent = 'Welcome Back';
    modalDesc.textContent = 'Sign in to continue your musical journey';
});

signupTab.addEventListener('click', function () {
    // UI Update
    signupTab.classList.add('active');
    loginTab.classList.remove('active');

    // Form Display
    signupForm.style.display = 'flex';
    loginForm.style.display = 'none';

    // Text Update
    modalTitle.textContent = 'Create Account';
    modalDesc.textContent = 'Join the NeonBeats community today';
});



loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Show success animation
    const submitBtn = loginForm.querySelector('.auth-submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    submitBtn.style.pointerEvents = 'none';

    setTimeout(() => {
        alert('✅ Login Successful!\n🎵 Welcome to Bajale!\n🔥 Song toe bajale.');
        submitBtn.innerHTML = '<span>Login Now</span><i class="fas fa-arrow-right"></i>';
        submitBtn.style.pointerEvents = 'auto';
        window.location.href = "../Music_page/index1.html";
    }, 1500);
});

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = signupForm.querySelector('.auth-submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
    submitBtn.style.pointerEvents = 'none';

    setTimeout(() => {
        alert('✅ Account Created Successfully!\n\n🎉 Welcome to the NeonBeats Family!\n🎵 Let the music play!\n\n[Demo for Hackathon]');
        submitBtn.innerHTML = '<span>Create Account</span><i class="fas fa-arrow-right"></i>';
        submitBtn.style.pointerEvents = 'auto';
        closeAuthModal();
    }, 1500);
});

// ============================================
// Bulb Theme System
// ============================================

let currentTheme = 0;

const themes = [
    {
        name: 'Dark',
        bg: '#0a0a0f',
        bulbColor: '#ffd700',
        bulbShadow: '0 0 25px #ffd700, 0 0 50px rgba(255, 215, 0, 0.4), 0 0 80px rgba(255, 215, 0, 0.2), inset -8px -8px 20px rgba(0,0,0,0.25), inset 8px 8px 25px rgba(255,255,255,0.4)',
        glowColor: 'rgba(255,215,0,0.3)',
        accent: '#e7cd39b1'
    },
    {
        name: 'Cyan',
        bg: '#0a1414',
        bulbColor: '#00f0ff',
        bulbShadow: '0 0 25px #00f0ff, 0 0 50px rgba(0, 240, 255, 0.4), 0 0 80px rgba(118, 213, 219, 0.2), inset -8px -8px 20px rgba(0,0,0,0.25), inset 8px 8px 25px rgba(255,255,255,0.4)',
        glowColor: 'rgba(0,240,255,0.3)',
        accent: '#00f0ff'
    },
    {
        name: 'Purple',
        bg: '#140a1e',
        bulbColor: '#b347ea',
        bulbShadow: '0 0 25px #b347ea, 0 0 50px rgba(179, 71, 234, 0.4), 0 0 80px rgba(179, 71, 234, 0.2), inset -8px -8px 20px rgba(0,0,0,0.25), inset 8px 8px 25px rgba(255,255,255,0.4)',
        glowColor: 'rgba(179,71,234,0.3)',
        accent: '#bf73e6'
    },
    {
        name: 'Green',
        bg: '#0a140f',
        bulbColor: '#00ff88',
        bulbShadow: '0 0 25px #00ff88, 0 0 50px rgba(0, 255, 136, 0.4), 0 0 80px rgba(0, 255, 136, 0.2), inset -8px -8px 20px rgba(0,0,0,0.25), inset 8px 8px 25px rgba(255,255,255,0.4)',
        glowColor: 'rgba(0,255,136,0.3)',
        accent: '#00ff88'
    }
];

function changeTheme() {

    bulbContainer.classList.add('pulled');
    setTimeout(() => {
        bulbContainer.classList.remove('pulled');
    }, 250);

    currentTheme = (currentTheme + 1) % themes.length;
    const theme = themes[currentTheme];
    body.style.backgroundColor = theme.bg;
    bulb.style.background = theme.bulbColor;
    bulb.style.boxShadow = theme.bulbShadow;
    bulbGlow.style.background = `radial-gradient(circle, ${theme.glowColor}, transparent 70%)`;


    console.log(` Theme Changed: ${theme.name} | Background: ${theme.bg}`);
}

// Event: Bulb Click
bulbContainer.addEventListener('click', changeTheme);

document.addEventListener('keydown', function (e) {
    if (e.code === 'Space' && !authModal.classList.contains('active')) {
        e.preventDefault();
        changeTheme();
    }
});

// page load
window.addEventListener('load', function () {
    console.log('%c🎵 Bajale Hackathon Project Loaded!', 'color: #00f0ff; font-size: 20px; font-weight: bold;');
    console.log('%c💡 Click "PLAY NOW" to see login/signup modal', 'color: #ffd700; font-size: 14px;');
    console.log('%c🔮 Pull the bulb or press SPACE to change theme', 'color: #b347ea; font-size: 14px;');
    console.log('%c⌨️ Press ESC to close modal', 'color: #00ff88; font-size: 14px;');
});

