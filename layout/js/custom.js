//submenu
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});
//탭메뉴
var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(event){
    event.preventDefault();
    var target = $(this);
    var index = target.index();
    
    //alert(index);
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display","none");
    tabCont.eq(index).css("display","block");
});