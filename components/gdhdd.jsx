
      <Layout title={title} url={url} user={user} album={album}>
        <div className="center-container">
          {user && <FormAddAlbum />}
          {album.map((el) => {
            el.userId === user.id ? (
              <>
                <p>Мой альбом</p>
                <div className="myAlbum">
                  <AlbumItem user={user} key={el.id} el={el} />
                </div>
              </>
            ) : (
              <>
                <p>Чужие</p>
                <div className="notmyAlbum">
                  <AlbumItem user={user} key={el.id} el={el} />
                </div>
              </>
            );
          })}
        </div>
      </Layout>