const buttonShowMore = document.getElementById('show_text');
const overlayElement = document.getElementById('overlay');
const modalElement = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const hideText = document.getElementById('hidden');


buttonShowMore.addEventListener('click', () => {
    overlayElement.style.display = 'block'; // Affiche l'overlay
    modalElement.style.display = 'block'; // Affiche la modale
    setTimeout(() => {
        modalElement.style.right = '0'; // Fait glisser la modale depuis la droite
    }, 10);
    hideText.classList.remove('hidden_text')
});

// Fermer la modale
closeModalBtn.addEventListener('click', () => {
    modalElement.style.right = '-100%'; // Fait glisser la modale vers la droite
    overlayElement.style.display = 'none'; // Masque l'overlay
    setTimeout(() => {
        modalElement.style.display = 'none'; // Masque la modale après l'animation
    }, 300);
});
