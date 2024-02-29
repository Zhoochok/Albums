const React = require('react');
const Layout = require('./Layout');

function LogPage({ title }) {
  return (
    <Layout title={title}>
      <h3>Welcome back!</h3>
      <form className='sign-in'>
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button>Submit</button>
      </form>
    </Layout>
  );
}

module.exports = LogPage;