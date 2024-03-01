const button = document.querySelector('.btn-addAlbum');
const div = document.querySelector('.album-form');


button.onclick = () => {
  div.classList.toggle('active');
};
