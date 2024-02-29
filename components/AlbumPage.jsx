const React = require("react");
const Layout = require("./Layout");

module.exports = function Album({ title, album}) {
  return (
    <Layout title={title}>
      <div className="albumPage">
        {album.map((el) => (
          <a href={`/albums/${el.name}/photo`}>
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
