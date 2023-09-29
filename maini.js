function checkUser() {
    let Login = document.getElementById('1').value 
    document.write('Здравствуй, ' + Login)

}

function oi() {
    let Kub = document.getElementById('3').value 
    var x = Number(prompt('Кубы и квадраты:'));
    document.write(`${x}^2 = ${x*x}`);
    document.write(`${x}^3 = ${x*x*x}`)  
}