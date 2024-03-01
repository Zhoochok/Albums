const React = require("react");

function FormAddPhoto({ album }) {
  return (
    <form className="photo-form" action="/photos" method="POST" data-id={album.id}>
      {/* <input type="text" name="img" placeholder="img" /> */}
      <input type="file" name="img" placeholder="img"/>
      <input type="text" name="description" placeholder="description" />
      <button>Add photo</button>
      </form>
  );
}

module.exports = FormAddPhoto;
