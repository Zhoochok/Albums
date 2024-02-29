const React = require("react");
const Layout = require("./Layout");
const FormAddAlbum = require('./FormAddAlbum')

module.exports = function Album({ title, album, user}) {
  return (
    <Layout title={title}>
        <FormAddAlbum />
      <div className="albumPage">
        {album.map((el) => (
          <a href={`/albums/${el.id}/photo`}>
            <div className="albums">
              <p>
                <img className="picture" src={el.img} />
              </p>
              {el.name}
            </div>
          </a>
        ))}
      </div>
    </Layout>
  );
};
