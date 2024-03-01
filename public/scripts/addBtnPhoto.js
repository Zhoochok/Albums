const nebutton = document.querySelector('.btn-addPhoto');
const nediv = document.querySelector('.photo-form');

nebutton.onclick = () => {
  const currentDisplay1 = nediv.style.display;
  // console.log(currentDisplay1);
  if (currentDisplay1 === 'block') {
    // console.log('123')
    nediv.style.display = 'none';
  } else {
    // console.log('123', '123');
    nediv.style.display = 'block';
  }
};
