import '../scss/main.scss';
import '../../index.html';

const submitBtn = document.querySelector('.attribute__text--button');
const closeBtn = document.querySelector('.close-button');
const mailBtn = document.querySelector('.mail__submit');
const form = document.querySelector('form');

const toggleForm = (e) => {
  e.preventDefault();
  form.classList.toggle('mail--active');
};

submitBtn.addEventListener('click', toggleForm);
closeBtn.addEventListener('click', toggleForm);
mailBtn.addEventListener('click', toggleForm);
