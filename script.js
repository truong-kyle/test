function sayHi() {
    var name = document.getElementById('urNameHere').value;
    alert('Hi ' + name);
}
var count = 0;
function secret(){
    count += 1;
    if (count%10==0){
        alert('You found the secret!')

    }
}