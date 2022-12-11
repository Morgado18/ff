function enviarArea(){
  let avisoArea = document.getElementById('avisoArea');
  let textarea = document.getElementById('textarea').value;
  if(textarea==""){
    avisoArea.innerHTML="Campo vazio"
    avisoArea.style.color="red"
  }
}

function enviarID(){
  let avidoID = document.getElementById('avidoID');
  let inputID = document.getElementById('inputID').value;
  if(inputID==""){
    avidoID.innerHTML="Campo vazio"
    avidoID.style.color="red"
  }
}

// ir ao topo

function topo(elemento){
  //document.querySelector(elemento).scrollIntoView({behavior:"smooth"});
  document.querySelector(elemento).scrollIntoView({behavior:"smooth"});

}
//document.getElementById('irAoTopo').addEventListener('click', function(evento){
  document.querySelector("#irAoTopo").addEventListener('click', function(event){
    event.preventDefault();
 // event.preventDefault();
  topo('#topo')
})



let pHeader = `<header id="topo">
<div class="logo">
  <img src="css/imgs/LOGOff.png">
</div>
<nav>
  <ul>    
    <li><a href="index.html">Home</a></li>
    <li><a href="#">Entretenimento</a></li>
    <li><a href="sobre.html">Sobre</a></li>
    <li><a href="#">Contatos</a></li>
    <li><a href="#">Planos</a></li>
    <li style="color: #fff;"><i class="fa-solid fa-cart-shopping"></i></li>
  </ul>
</nav>
</header>`;
let pMostraHeader = document.getElementById('pMostraHeader').innerHTML=pHeader;

/**/
