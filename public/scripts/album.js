const formAddAlbum = document.querySelector(".album-form");
const deleteAlbum = document.querySelector(".albumPage");

if (formAddAlbum) {
  formAddAlbum.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, img, privats } = event.target;
    const data = {
      name: name.value,
      img: img.value,
      privats: privats.value,
    };
    const response = await fetch("/api/albums", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    // console.log(res);
    if (res.message === "success") {
      formAddAlbum.reset();
      document
        .querySelector(".albumPage")
        .insertAdjacentHTML("beforeend", res.html);
    }
  });
}

if (deleteAlbum) {
  deleteAlbum.addEventListener("click", async (event) => {
    if (event.target.classList.contains("btn-deleteAlbum")) {
      const card = event.target.closest(".albums");
      const { albumid } = card.dataset;
      console.log(albumid);
      const res = await fetch(`/api/albums/${albumid}`, { method: "DELETE" });
      const data = await res.json();
      if (data.message === "success") {
        card.remove();
      }
    }
  });
}
