let th1 = document.getElementsByTagName("th")[0];
let th2 = document.getElementsByTagName("th")[1];
let th3 = document.getElementsByTagName("th")[2];
let th4 = document.getElementsByTagName("th")[3];
let th5 = document.getElementsByTagName("th")[4];



th1.addEventListener("mouseover", () => {
  th1.classList.add("cl2");
  th1.classList.remove("cl1");
  th1.classList.remove("cl5");
});
th1.addEventListener("mouseout", () => {
  th1.classList.add("cl5");
  th1.classList.remove("cl2");
});

th2.addEventListener("dblclick", () => {
  th2.classList.add("cl3");
  th2.classList.remove("cl1");
});

th3.addEventListener("click", () => {
  th3.classList.add("cl4");
  th3.classList.remove("cl1");
});

function enlargeText() {
  const textElement = document.querySelector(".text");

 
  textElement.style.fontSize = `${parseFloat(getComputedStyle(textElement).fontSize)*1.5}px`;
}

function resetText() {
  const textElement = document.querySelector(".text");
  textElement.style.fontSize = "16px";
}

let sum =0;
function addNumber(number) {
    sum += number;
}
function showResult() {
    alert("Сумма цифр: " + sum);
}

 const userName = prompt("Введите ваше имя:");
 if (userName) {
   alert("Привет, " + userName + "!");
 } else {
   alert("Привет, незнакомец!");
 }

