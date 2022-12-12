// Menu Lateral

let pMenuLateral = `<div class="navigation">
<ul>
 <li class="list active">
  <a href="index.html">
    <span class="icon"><i class="fa-solid fa-house"></i></span>
    <span class="title">Home</span>
  </a>
 </li>
 <li class="list">
  <a href="entretenimento.html">
    <span class="icon"><i class="fa-brands fa-paypal"></i></span>
    <span class="title">Entretenimento</span>
  </a>
 </li>
 <li class="list">
  <a href="sobre.html">
    <span class="icon"><i class="fa-solid fa-user"></i></span>
    <span class="title">Sobre</span>
  </a>
 </li>
 <li class="list">
  <a href="contatos.html">
    <span class="icon"><i class="fa-sharp fa-solid fa-comment"></i></span>
    <span class="title">Contatos</span>
  </a>
 </li>
 <li class="list">
  <a href="planos.html">
    <span class="icon"><i class="fa-regular fa-pen-to-square"></i></span>
    <span class="title">Planos</span>
  </a>
 </li>
</ul>
</div>`;
let pMostraMenu = document.getElementById('pMostraMenu').innerHTML=pMenuLateral;

const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item)=>{
  item.addEventListener('click',activeLink);
})

// Slide

let pSlide = `<div class="slider">
<div class="slides">
  <input type="radio" name="radio" id="radio1">
  <input type="radio" name="radio" id="radio2">
  <input type="radio" name="radio" id="radio3">
  <input type="radio" name="radio" id="radio4">
  <input type="radio" name="radio" id="radio5">
  <div class="slide first">
    <img src="css/imgs/fundo1.JPG">
  </div>
  <div class="slide">
    <img src="css/imgs/fundo2.PNG">
  </div>
  <div class="slide">
    <img src="css/imgs/fundo3.jpg">
  </div>
  <div class="slide">
    <img src="css/imgs/fundo4.JPG">
  </div>
  <div class="slide">
    <img src="css/imgs/fundo5.JPG">
  </div>
  <div class="nvg-auto">
    <div id="auto-btn1"></div>
    <div id="auto-btn2"></div>
    <div id="auto-btn3"></div>
    <div id="auto-btn4"></div>
    <div id="auto-btn5"></div>
  </div>
  <div class="nvg-manual">
    <label for="radio1" class="manual-btn"></label>
    <label for="radio2" class="manual-btn"></label>
    <label for="radio3" class="manual-btn"></label>
    <label for="radio4" class="manual-btn"></label>
    <label for="radio5" class="manual-btn"></label>
  </div>
</div> 
</div>`;
let pMostraSlide = document.getElementById('pMostraSlide').innerHTML=pSlide;

let contador = 1;
document.getElementById('radio1').checked = true;
  setInterval(()=>{
    proximaImagem();
  }, 3000)
  function proximaImagem(){
    contador++;
    if(contador > 5){
      contador = 1;
    }
    document.getElementById('radio'+contador).checked = true;
  }


let actualizacao = document.getElementById('actualizacao');
let data = new Date();
let hr = data.getHours();
actualizacao.textContent=data;
