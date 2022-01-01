let dscreen = document.getElementById("displayScreen");

let result = document.getElementById("result");




function display(number) {
    dscreen.innerText += number;
}


function Calculate() {
    try {
        result.value = eval(dscreen.innerText)
    } catch (err) {
        result.value = "Invalid"
    }


}


function cl() {
    dscreen.innerText = "";
    result.value = "";

}

function del() {
    dscreen.innerText = dscreen.innerText.slice(0, -1)
}
document.body.addEventListener("keypress", keypress)

function keypress(a) {
    let result = document.querySelector("#displayScreen");
    if ((a.key >= 0 && a.key < 10) || a.key === "+" || a.key === "-" || a.key === "*" || a.key === "/" || a.key === "." || a.key === "%") {
        result.innerText += a.key
    } else if (a.key === "Enter") {
        Calculate()
    } else if (a.key === "Backspace") {
        del()
    }


}