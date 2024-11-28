const formLogin = document.getElementById('formLogin')

formLogin.addEventListener('submit', async (event) => {
  event.preventDefault()
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const user = {
    email: email.value,
    password: password.value
  }
  try {

    const response = await fetch('https://firstapi-j64y.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })

    if (response.ok) {
      const data = await response.json();
      console.log('Login bem sucedido', data);
      localStorage.setItem('token', data.token)
      window.location.href = '../index.html'
    } else {
      const error = response.json();
      console.error('Deu bom não ', error);
      alert('Login falhou: ' + (error.message || 'Erro desconhecido'));

    }
  } catch (error) {
    console.error(error)
  }

})