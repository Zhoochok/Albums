const formAddAlbum = document.querySelector('.album-form');

if (formAddAlbum) {
  formAddAlbum.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, img, privats } = event.target;
    const data = {
      name: name.value,
      img: img.value,
      privats: privats.value,
    };
    const response = await fetch('/api/albums', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    // console.log(res);
    if (res.message === 'success') {
      formAddAlbum.reset();
      document
        .querySelector('.albumPage')
        .insertAdjacentHTML('beforeend', res.html);
    }
  });
}
