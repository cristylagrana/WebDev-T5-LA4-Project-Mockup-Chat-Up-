document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value;
  
    const users = getUsers();
  
    // Check if user already exists
    const userExists = users.some(user => user.username === username);
  
    if (userExists) {
      alert('Username already taken!');
    } else {
      users.push({ username, password });
      saveUsers(users);
      alert('Sign up successful! You can now log in.');
      window.location.href = 'Login.html';
    }
  });
  