const displaySlip = document.querySelector(".slip")
const button = document.querySelector(".button")

const getSlip = async function (){
  const data1 = await fetch("https://api.adviceslip.com/advice");
  const data2 = await data1.json();
  const {slip:{advice}} = data2;
  displaySlip.textContent = advice;
}
button.addEventListener('click',getSlip)