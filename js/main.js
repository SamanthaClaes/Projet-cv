/*
/!*Modal*!/
const overlayElement = document.getElementById('overlay');
const modalElement = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');

/!*buttons*!/

const showMoreButton = document.getElementById('show_text');
const formationButton = document.getElementById('button_formation');
const experienceButton = document.getElementById('button_experience');
const descriptionButton = document.getElementById('button_description');

/!*Contenu*!/

const formationText = document.getElementById('formation_text');
const experienceText = document.getElementById('exp_text');
const descriptionText = document.getElementById('tiny_text_test');


descriptionButton.addEventListener('click',()=>{
    formationText.hidden=true;
    experienceText.hidden=true;
    descriptionText.hidden=false;
})


formationButton.addEventListener('click',()=>{
    formationText.hidden=false;
    experienceText.hidden=true;
    descriptionText.hidden=true;
})

experienceButton.addEventListener('click',()=>{
    formationText.hidden=true;
    experienceText.hidden=false;
    descriptionText.hidden=true;
})




showMoreButton.addEventListener('click', () => {
    overlayElement.style.display = 'block'; // Affiche l'overlay
    modalElement.style.display = 'block'; // Affiche la modale
    setTimeout(() => {
        modalElement.style.right = '0'; // Fait glisser la modale depuis la droite
    }, 10);
})

closeModalBtn.addEventListener('click', () => {
    modalElement.style.right = '-100%'; // Fait glisser la modale vers la droite
    overlayElement.style.display = 'none'; // Masque l'overlay
    setTimeout(() => {
        modalElement.style.display = 'none'; // Masque la modale après l'animation
    }, 300);
});*/
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nav = document.querySelector('.carousel-nav');

slides.forEach((_, index) => {
    const btn = document.createElement('button');
    if (index === 0) btn.classList.add('active');
    nav.appendChild(btn);
});

const buttons = Array.from(nav.children);
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});