const button = document.querySelector('.btn-addAlbum');
const div = document.querySelector('.album-form');


button.onclick = () => {
  const currentDisplay = div.style.display;
  console.log(currentDisplay);
  if (currentDisplay === 'block') {
    console.log(123);
    div.style.display = 'none'
  } else {
    console.log(123123);
    div.style.display = 'block'
  }
};
