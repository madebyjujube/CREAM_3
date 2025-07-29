const parallaxText = document.getElementById('parallax-text');
const containers = document.querySelectorAll(".vid-container");
const languageSelect = document.getElementById('language-select');

const tixtreeButton = document.getElementById('tixtree-button');
const tixtreeWrapper = document.getElementById('tixtree-wrapper');
const closeBtn = document.getElementById('tixtree-close');

let ticking = false;

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
  startVid();
  updateCloseButtonVisibility();
});
window.addEventListener('resize', updateCloseButtonVisibility);
tixtreeButton.addEventListener('click', openTixtree);

if (closeBtn) {
  closeBtn.addEventListener('click', closeTixtree);
}

document.addEventListener('click', closeTixtreeOutside);
window.addEventListener('scroll', handleScroll);

// FUCNTIONS
// Initialize mobile close button if it exists
function updateCloseButtonVisibility() {
  if (!closeBtn || !tixtreeWrapper) return;
  
  const isMobile = window.innerWidth <= 768;
  const isTixtreeVisible = tixtreeWrapper.style.display === 'block';
  
  if (isMobile && isTixtreeVisible) {
    closeBtn.style.display = 'flex';
    closeBtn.style.opacity = '1';
  } else {
    closeBtn.style.display = 'none';
    closeBtn.style.opacity = '0';
  }
}

function startVid() {
  const vid = document.getElementById('headerVideo');
  if (vid && vid.paused) {
    vid.play().catch((e) => {
      console.log('Autoplay failed:', e);
    });
  }
}

function openTixtree() {
  if (!tixtreeWrapper) return;
  tixtreeWrapper.style.display = 'block';
  setTimeout(() => {
    tixtreeWrapper.style.opacity = '1';
    updateCloseButtonVisibility(); // Update close button when opening
  }, 10);
}

function closeTixtree() {
  if (!tixtreeWrapper) return;
  tixtreeWrapper.style.opacity = '0';
  setTimeout(() => {
    tixtreeWrapper.style.display = 'none';
    updateCloseButtonVisibility(); // Update close button when closing
  }, 400);
}

function closeTixtreeOutside(e) {
  if (!tixtreeWrapper || !tixtreeButton) return;
  const isClickInside = tixtreeWrapper.contains(e.target) || tixtreeButton.contains(e.target);
  if (!isClickInside && tixtreeWrapper.style.display === 'block') {
    closeTixtree();
  }
}

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      parallaxFx(scrolled);
      toggleLanguageSelector(scrolled);
      ticking = false;
    });
    ticking = true;
  }
}

function parallaxFx(scrolled) {
  if (!parallaxText) return;
  const speed = 0.3;
  parallaxText.style.transform = `translateY(${scrolled * speed}px)`;
  // Removed the height change as it might cause layout issues
}

function toggleLanguageSelector(scrolled) {
  if (!languageSelect) return;
  languageSelect.classList.toggle('hidden', scrolled > 20);
}