const React = require("react");

function FormAddAlbum() {
  return (
    <div className="tak">
<form className="album-form" action="/albums" method="POST">
      <input type="text" name="img" placeholder="img" />
      <input type="text" name="name" placeholder="name" />
      <select id="privats">
        <option value="true">Открытый</option>
        <option value="false">Закрытый</option>
      </select>
      <button>Add albums</button>
    </form>
    </div>
  );
}

module.exports = FormAddAlbum;
