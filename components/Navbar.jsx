const React = require('react');

function Navbar({ user, url }) {
  return (
    <nav className="menu-wrap">
      <ul className="ulka">
        <li>
          <a href="/">Main page</a>
        </li>
        {!user ? (
          <li>
            <a href="/auth/registration">Sign-up</a>
          </li>
        ) : (
          <li>
            <a href="/albums">Albums</a>
          </li>
        )}
        {user ? (
          <>
            <li>
              <a>{user.name}</a>
            </li>
            {url === '/albums' ? (
              <li>
                <button className="btn-addAlbum">Add Album</button>
              </li>
            ) : (
              <li>
                <button className="btn-addPhoto">Add Photo</button>
              </li>
            )}
            <li>
              <a href="/api/auth/logout">logout</a>
            </li>
          </>
        ) : (
          <li>
            <a href="/auth/authorization">Sign-in</a>
          </li>
        )}
      </ul>
    </nav>
  );
}

module.exports = Navbar;
