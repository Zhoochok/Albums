const regForm = document.querySelector('.sign-up');
const authForm = document.querySelector('.sign-in');

if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = e.target;
    // console.log(name.value, email);
    if (
      name.value.trim() === '' ||
      email.value.trim() === '' ||
      password.value.trim() === '' || 
      cpassword.value.trim() === '' ||){
      alert('Заполните все поля!');
      return
    }
   if (password.value !== cpassword.value) {alert('пароли не совпадают');}
   
      const user = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
      const res = await fetch('/api/auth/registration', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (data.message === 'success') {
        window.location.assign('/');
        return;
      }
    
  });
}

if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const res = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}
