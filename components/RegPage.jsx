const React = require("react");
const Layout = require("./Layout");

function RegPage({ title }) {
  return (
    <Layout title={title}>
      <div className="center-container">
        <h3>Zdarova!</h3>
        <form className="sign-up">
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="password" name="cpassword" placeholder="cpassword" />
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegPage;
