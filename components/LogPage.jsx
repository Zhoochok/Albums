const React = require('react');
const Layout = require('./Layout');

function LogPage({ title }) {
  return (
    <Layout title={title}>
      <div className="center-container">
      <h3>Welcome back!</h3>
      <form className='sign-in'>
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button>Submit</button>
      </form>
      </div>
    </Layout>
  );
}

module.exports = LogPage;