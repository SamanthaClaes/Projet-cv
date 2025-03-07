const buttonShowMore = document.getElementById('show_text');
const overlayElement = document.getElementById('overlay');
const modalElement = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const hideText = document.getElementById('hidden');
const formationButton = document.getElementById('button_formation');
const tinytext = document.getElementById('tiny_text_test');
const expText = document.getElementById('exp_text');
const formationText = document.getElementById('formation_text');
const expButton = document.getElementById('button_experience')
const descButton = document.getElementById('button_description');


formationButton.addEventListener('click', () => {
    tinytext.classList.add('hidden')
    expText.classList.add('hidden')
    formationText.classList.remove('hidden')
})
expButton.addEventListener('click', () => {
    tinytext.hidden = true;
    expText.hidden = false;
    formationText.hidden = true;
})
descButton.addEventListener('click', () => {
    tinytext.hidden = false;
    expText.hidden = true;
    formationText.hidden = true;
})



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