const passwordBox= document.getElementById('password');
const len=10;
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const spcChar="!@#$%^&*+";
const randomChar = upperCase + lowerCase + num +spcChar;

function genPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= num[Math.floor(Math.random()*num.length)];
    password+= spcChar[Math.floor(Math.random()*spcChar.length)];
    console.log(password)

    while(len>password.length){
        password +=randomChar[Math.floor(Math.random()*randomChar.length)]

        
    }
    passwordBox.value=password;
}
function copyPass(){
    passwordBox.select();
    document.execCommand("copy")
}


