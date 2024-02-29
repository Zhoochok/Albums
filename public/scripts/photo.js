const formAddPhoto = document.querySelector('.photo-form');
const deletePhoto = document.querySelector('.photoItem');

if (formAddPhoto) {
  formAddPhoto.addEventListener('submit', async (event) => {
    // останавляем стандартное поведение формы

    event.preventDefault();
    // event.target - цель события в виде obj
    // деструкоризацией из цели(форма) событий достаем наши инпуты
    const {
      description, img,
    } = event.target;

    const data = {
      description: description.value,
      img: img.value,
    };
      // отправялем  феч
    const response = await fetch('/api/photos', {
      method: 'POST',
      // здесь мы с вами говорим o том, как общаемся, JSON
      headers: { 'Content-type': 'application/json' },
      // положили все в одну коробчку, которая скрыта от глаз посторонних пользователей
      body: JSON.stringify(data),
    });
      // обрабатываем наш ответ и приводим к obj
    const res = await response.json();
    console.log(res);
    if (res.message === 'success') {
      formAddPhoto.reset();
      document
      // находим див, куда хотим добавить карточку
        .querySelector('.photoItem')
      // добавляет карточку в конец нашего дива, который мы нашли выше
        .insertAdjacentHTML('beforeend', res.html);
    }
  });
}

if (deletePhoto) {
  deletePhoto.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btn-delete')) {
      const card = event.target.closest('.card');
      const { id } = card.dataset;
      console.log(id);
      const res = await fetch(`/api/photos/${id}`, { method: 'DELETE' });
      const data = await res.json();

      if (data.message === 'success') {
        card.remove();
      }
    }
  });
}
