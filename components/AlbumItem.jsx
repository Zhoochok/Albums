const React = require('react');
const Layout = require('./Layout');
const FormAddAlbum = require('./FormAddAlbum');

module.exports = function AlbumItem({ title, album, user, url, el }) {
  // console.log(album);
  return (
    <a href={`/albums/${el.id}/photo`}>
      <div className="albums">
        <p>
          <img className="picture" src={el.img} />
        </p>
        {el.name}
      </div>
    </a>
  );
};
