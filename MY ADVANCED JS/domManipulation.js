const button = document.getElementById('button');
button.addEventListener('click', ()=>{
  alert('you just clicked on the wrong button Nigga ')
})

function changeText(){
  document.getElementById("demo").innerHTML = "the Text is dynamic";
}

function changeText1(){
  document.getElementById("bots").innerHTML = "the Text is not dynamic";
}

const button00 = document.getElementById("button2");
button2.addEventListener("click", ()=>{
      changeText1()
});

const button01 = document.getElementById(btn);
btn.addEventListener("click", ()=>{
 changeText2()
});