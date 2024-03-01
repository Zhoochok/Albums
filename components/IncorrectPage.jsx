const React = require('react');
const Layout = require('./Layout');

module.exports = function IncorrectPage() {
  return (
    <Layout showNavbar={false}>
        <h1 className='animate__animated animate__hinge'>404</h1>
      <div className="incorrect ">
        {/* <h4>А вы что хотели?</h4> */}
        <img
          src="https://i.pinimg.com/originals/05/29/71/0529711d950b3449cb7861c200c62e3c.gif"
          width={600}
          height={500}
        />
      </div>
    </Layout>
  );
};
