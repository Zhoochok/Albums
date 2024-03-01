const React = require("react");

module.exports = function AlbumItem({ title, album, user, url, el }) {
  console.log(album, 111);
  return (
    <div className="albums" data-albumId={el.id}>
      <a href={`/albums/${el.id}/photo`}>
        <p>
          <img className="picture" src={el.img} />
        </p>
        {el.name}
      </a>
      <button className="btn-deleteAlbum">Удалить</button>
    </div>
  );
};
