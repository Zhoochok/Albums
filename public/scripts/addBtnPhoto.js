const nebutton = document.querySelector('.btn-addPhoto');
const nediv = document.querySelector('.photo-form');

nebutton.onclick = () => {
  nediv.classList.toggle('active');
};