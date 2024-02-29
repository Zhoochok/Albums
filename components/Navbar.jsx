const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Main</a>
        </li>
        <li>
          <a href="/itemPage">ItemPage</a>
        </li>
        {user ? (
          <>
            <li>
              <a>{user.name}</a>
            </li>
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
