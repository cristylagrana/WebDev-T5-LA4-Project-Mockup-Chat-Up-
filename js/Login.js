document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
  
    const users = getUsers();
  
    const validUser = users.find(user => user.username === username && user.password === password);
  
    if (validUser) {
      alert('Login successful!');
      window.location.href = 'Success.html';
    } else {
      alert('Invalid username or password!');
    }
  });
  