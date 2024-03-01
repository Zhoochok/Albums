const React = require('react');

function Navbar({ user, url }) {
  // console.log(window.location.pathname);
  // console.log(url === '/albums', '<--');
  return (
    <nav>
      <ul>
        <li>
          <a href="/">MainPage</a>
        </li>
        <li>
          <a href="/albums">Albums</a>
        </li>
        {user ? (
          <>
            <li>
              <a>{user.name}</a>
            </li>
            {url === '/albums' ? (
              <li>
                <button className="btn-addAlbum">AddAlbum</button>
              </li>
            ) : (
              <li>
                <button className="btn-addPhoto">AddPhoto</button>
              </li>
            )}
            <li>
              <a href="/api/auth/logout">logout</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/auth/registration">Sign-up</a>
            </li>
            <li>
              <a href="/auth/authorization">Sign-in</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

module.exports = Navbar;
