const React = require('react');
const Layout = require('./Layout');

function RegPage({ title }) {
  return (
    <Layout title={title}>
      <div className="center-container">
        <h3 className="text">Welcome to the club, buddy</h3>
        <form className="sign-up">
          <input type="text" name="name" placeholder="name" required />
          <input type="email" name="email" placeholder="email" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <input
            type="password"
            name="cpassword"
            placeholder="cpassword"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegPage;
