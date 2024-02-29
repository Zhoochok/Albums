const React = require("react");

function FormAddPhoto() {
  return (

      <form className="photo-form" action="/photos" method="POST">
        <input type="text" name="img" placeholder="img" />
        <input type="text" name="description" placeholder="description" />
        <input type="text" name="description" placeholder="description" />
        <button>Add photo</button>
      </form>

  );
}

module.exports = FormAddPhoto;
