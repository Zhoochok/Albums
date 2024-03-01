const formAddPhoto = document.querySelector('.photo-form');
const deletePhoto = document.querySelector('.photoItem');

if (formAddPhoto) {
  formAddPhoto.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { description, img } = event.target;
    const { id } = event.target.dataset;
    const data = {
      description: description.value,
      img: img.value,
    };
    const response = await fetch(`/api/photos/add/${id}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.message === 'success') {
      formAddPhoto.reset();
      document
        .querySelector('.photoItem')
        .insertAdjacentHTML('beforeend', res.html);
    }
  });
}

if (deletePhoto) {
  deletePhoto.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btn-delete')) {
      const card = event.target.closest('.card');
      const { id } = card.dataset;
      const res = await fetch(`/api/photos/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.message === 'success') {
        card.remove();
      }
    }
  });
}
