const highlight = function(){
    // highlight
    hljs.highlightAll();
}

// modal
const modal = function(){
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    })
    document.querySelector(".modal-close").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("hide");
    })
}

// tabmenu
const tabMenu = function(){
    const tabBtn = document.querySelectorAll(".view-title > ul > li");
    const tabCont = document.querySelectorAll(".view-cont > div");
    
    tabBtn.forEach((el, index) => {
        el.addEventListener("click", ()=>{
            tabBtn.forEach(btn => {
                btn.classList.remove("active");
            });
            el.classList.add("active");

            // 모든 컨텐츠 박스 안보이게~
            tabCont.forEach(hide => {
                hide.style.display = "none"
            })
            tabCont[index].style.display = "block"
            // 내가 클릭한 컨텐츠 박스를 보이게~
        })
    })
}