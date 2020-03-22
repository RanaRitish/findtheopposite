function findOpposite() {
    var inputWord = document.getElementById("userinput").value;
    console.log(inputWord);
    document.getElementById('output').innerHTML = "Not" +" "+ inputWord +" !";
    event.preventDefault();
}