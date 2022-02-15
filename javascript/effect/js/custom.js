 //highlight
 const highlight = function(){
    hljs.highlightAll();
    }
    
    //modal
    const modal = function(){              
        document.querySelector(".source-btn").addEventListener("click", ()=>{  //버튼을 클릭했을 때 이벤트 지정.
            document.querySelector("#modal").classList.add("show");        //처음에는 보여야 하므로 hide 클래스를 제거.
            document.querySelector("#modal").classList.remove("hide");     
        });
        //modal-close 닫기 버튼 클릭 했을 때.
        document.querySelector(".modal-close").addEventListener("click", ()=>{
        document.querySelector("#modal").classList.add("hide"); // 닫기를 클릭하면 안보여야 하므로 hide클래스를 추가.
        })
    }
    modal(); //모달 창 함수를 실행.
   
    //tabMenu
    const tabMenu = function(){
        const tabBtn = document.querySelectorAll(".view-title > ul > li");
        const tabCont = document.querySelectorAll(".view-cont > div");
   
        //각각의 버튼을 클릭하면 경고창을 띄어주세요
        tabBtn.forEach((btn, index)=>{
            btn.addEventListener("click",()=>{
                //모든 클래스 active 삭제
                tabBtn.forEach(el=>{
                 el.classList.remove("active");
                })
                //클릭한건 액티브 추가  
                btn.classList.add("active");                        
   
                //모든 컨텐츠 박스 안보이게
                tabCont.forEach(cont=>{
                 cont.style.display = "none";
                });
                //내가 클릭한 콘텐츠 박스는 보이게
                tabCont[index].style.display = "block";
            });
        })
    }
    tabMenu();        //탭 메뉴 함수를 실행.                       
      
   
   // <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   
   //  //jQuery를 이용한 방법.
   //  const modal = function(){
   //      $(".source-btn").click(()=>{
   //          $("#modal").addClass("show");
   //      })
   //      $(".modal-close").click(()=>{
   //          $("#modal").removeClass("show");
   //      })
   //  }
   //  modal();