const modal = document.getElementById('videoModal');
const video = document.getElementById('projectVideo');
const openButtons = document.querySelectorAll('[data-video]');
const closeButtons = document.querySelectorAll('[data-close]');

function openModal(src) {
  video.src = src;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  video.play().catch(() => {});
}

function closeModal() {
  video.pause();
  video.removeAttribute('src');
  video.load();
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

openButtons.forEach((button) => {
  button.addEventListener('click', () => openModal(button.dataset.video));
});

closeButtons.forEach((button) => {
  button.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
