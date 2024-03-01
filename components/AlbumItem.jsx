const React = require("react");

module.exports = function AlbumItem({ title, album, user, url, el }) {
  return (
    <div className="albums" data-albumId={el.id}>
      <a href={`/albums/${el.id}/photo`}>
        <p>
          <img className="picture" src={el.img} />
        </p>
        {el.name}
      </a>
     {user && el.userId === user.id && <button className="btn-deleteAlbum">Удалить</button>}
    </div>
  );
};
