function login(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if (username === 'user' && password ==='password')
    {
        document.getElementById('error-message').innerText='login successful';

    }else 
    {
        document.getElementById('error-message').innerText='invalid username or password';
    }
}
 
