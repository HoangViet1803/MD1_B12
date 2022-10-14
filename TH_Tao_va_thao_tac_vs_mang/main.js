let myArr = [];
document.querySelector("#push").addEventListener('click', addFn);
function addFn() {
    let number = document.querySelector("#number").value;
    myArr.push(number);
}
document.querySelector("#display").addEventListener('click',displayFn);
function displayFn() {
    for (let i = 0; i < myArr.length; ++i) {
        let p = document.createElement("p");
        p.innerHTML = `Element ${i} = ${myArr[i]}`;
        document.body.appendChild(p)
    }
}