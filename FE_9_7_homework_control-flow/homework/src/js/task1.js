const login = prompt('Enter Your login');
let password;
if(login ==='' || login === null){
    alert('Canceled.');
}else if(login.length < 4){
    alert("I don't know any users having name length less than 4 symbols");
}else if(login === 'User'){
    password = prompt('Enter password');
    if(password === 'SuperUser'){
        if(new Date().getHours() <20){
            alert('Good day!');
        }else{
            alert('Good evening!');
        }
    }else if(password ==='' || password === null){
        alert('Canceled.');
    }else{
        alert('Wrong password');
    }
}else{
    alert('I don’t know you');
}
