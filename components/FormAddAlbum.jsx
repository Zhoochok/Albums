const React = require('react');

function FormAddAlbum() {
  return (
    <form className="album-form" action="/albums" method="POST">
      <input type="text" name="img" placeholder="img" />
      <input type="text" name="name" placeholder="name" />
      <select id="private">
            <option value="true">Открытый</option>
            <option value="false">Закрытый</option>
          </select>
      <button>Add photo</button>

    </form>
  );
}

module.exports = FormAddAlbum;
