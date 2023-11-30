let name = document.querySelector(".fn");
let lastname = document.querySelector(".ln");
let namef = document.querySelector("#fn");
let lastnamef = document.querySelector("#ln");
let bmi = document.querySelector("#bmi");
let natije = document.querySelector("#natije ");
let result = document.querySelector(".result");
let birthday = document.querySelector(".birthday");
let birthdayf = document.querySelector("#birthday");
let show = document.querySelector(".show");


result.addEventListener("click", function () {
   let height = document.querySelector(".height").value;
   let wight = document.querySelector(".weight").value;
   let BMI = wight / (height * height);
  if(name.value !="" && lastname.value !="" && height.value !="" && wight.value !=""){
  show.style.display = "flex";

  }
  namef.innerHTML = `نام : ${name.value}`;
  lastnamef.innerHTML = `نام خانوادگی : ${lastname.value}`
  birthdayf.innerHTML = `تولد : ${birthday.value}`
  bmi.innerHTML = BMI

  
  if (BMI < 18.5) {
    bmi.innerHTML = "کاهش وزن";
    bmi.style.backgroundColor ="lightskyblue"
  }
  if (18.5 < BMI && 24.9 > BMI) {
    bmi.innerHTML = "وزن معمول";
    bmi.style.backgroundColor ="lightgreen"

  }
  if (24.9 < BMI && 29.5 > BMI) {
    bmi.innerHTML = "وزن بالا";
    bmi.style.backgroundColor ="yellow"

  }
  if (29.5 < BMI && 34.9 > BMI) {
    bmi.innerHTML = "اضافه وزن";
    bmi.style.backgroundColor ="orange"


  } if(BMI > 34.9) {
    bmi.innerHTML = "چاقی";
    bmi.style.backgroundColor ="red"

  }
 
});
