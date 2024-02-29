const React = require('react');
const Layout = require('./Layout');

module.exports = function IncorrectPage() {
  return (
    <Layout showNavbar={false}>
      <div className="incorrect">
        <h1>404</h1>
        <h4>А вы что хотели?</h4>
      </div>
    </Layout>
  );
};