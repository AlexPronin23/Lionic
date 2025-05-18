const header__nav = document.querySelector("#header__nav");
const bgBtn = document.querySelector("#burger-btn");
const bgBtnImg = document.querySelector("#burger-btn-img");

bgBtn.onclick = () =>{
    
    if(header__nav.classList.toggle('open')){

        bgBtnImg.src = "./assets/icon/header/close-btn.svg";

    }else{
        bgBtnImg.src = "./assets/icon/header/burger_btn.svg";
    }
}
