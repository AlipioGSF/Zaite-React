let imgCarrossel = 1;
const carrosselImgs = [
    {
      num: 1,
      img: '../img/banner1.png',
      color: 'rgb(0, 226, 0, 0.15)',
      text: 'Zaite consultoria'
    },
    {
      num: 2,
      img: '../img/banner2.png',
      color: 'rgb(0, 226, 0, 0.15)',
      text: 'Zaite consultoria 2'
    },
    {
      num: 3,
      img: '../img/banner3.png',
      color: 'rgb(0, 226, 0, 0.15)',
      text: 'Zaite consultoria 3'
    }
]

document.getElementById("imageLocal").setAttribute("src", carrosselImgs[0].img);
document.getElementById("textCarrossel").innerText = carrosselImgs[0].text;
document.getElementById("textLocal").style.backgroundColor = carrosselImgs[0].color;
controller();

const buttonLocal = document.getElementById("buttonLocal");

function setImgCarrossel(){
    setInterval(()=>{
        for(let imagem of carrosselImgs){
            imagem.num === imgCarrossel?
            document.getElementById("imageLocal").setAttribute("src", imagem.img):null;
            imagem.num === imgCarrossel?
            document.getElementById("textCarrossel").innerText = imagem.text:null;
            imagem.num === imgCarrossel?
            document.getElementById("textLocal").style.backgroundColor = imagem.color:null;
            controller();
        }
        
        switch(imgCarrossel){
          case 1:
            imgCarrossel=2
            break;
          case 2:
            imgCarrossel=3
            break;
          case 3:
            imgCarrossel=1
            break;
        }
      }, 3000);
}

function addButton(){
  for(let item of carrosselImgs){
    const button = document.createElement('button');
    button.setAttribute("value", item.num);
    button.setAttribute("onClick", `controller(${item.num})`);
    button.classList.add("btnCarrossel");
    buttonLocal.appendChild(button);
  }
}

function controller(n){
  if(n){
    imgCarrossel = n;
    document.getElementById("imageLocal").setAttribute("src", carrosselImgs[n-1].img);
    document.getElementById("textCarrossel").innerText = carrosselImgs[n-1].text;
    document.getElementById("textLocal").style.backgroundColor = carrosselImgs[n-1].color;
  }
  const buttons = document.querySelectorAll('.btnCarrossel');
  buttons.forEach((btn) => {
    const value = btn.getAttribute("value"); 
    value == imgCarrossel?btn.style.backgroundColor = "green":btn.style.backgroundColor = "transparent";
  })
}

addButton();
controller();
setImgCarrossel();
