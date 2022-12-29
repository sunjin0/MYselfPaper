
$(function(){
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
//用户栏
  $(".aouther").mouseenter(function() {
    $(".user_info").show(100)
 });
 $(".aouther").mouseleave(function() {
    $(".user_info").hide(100)
 })
 //博客验证
 $("#sumint").click(function(params) {
  if ($("#title_text").val()=="") {
      $(".alert").html(' <button type="button" class="close close_text" ><span aria-hidden="true">&times;</span></button>'+"标题不能为空，请输入后发布");
      $(".alert").show(100);
  }else if ($("#body_text").val()=="") {
      $(".alert").html(' <button type="button" class="close close_text" ><span aria-hidden="true">&times;</span></button>'+"博客不能为空，请输入后发布");
      $(".alert").show(100);
  }
})
$("body").on("click",".close_text",function(){
  $(".alert").hide();
})
//底部回顶
function scrool_blog(params) {
  if ( $(document).scrollTop()>100) {
   $(".top-back").show(100)
  }
  if ( $(document).scrollTop()==0) {
   $(".top-back").hide(100)
  }
 
}
$(window).scroll( scrool_blog)
$(".top-back").click(function (params) {
   $(document).scrollTop(0)
})
//菜单栏
var isClick=false;
$(".cataloy-btn").click(function(){
  if (isClick==false) {
      $(".cataloy").show(100);
     isClick=true;
  }else if(isClick==true){
      $(".cataloy").hide(100);
     isClick=false;
  }
 });
 //目录
 var hs=$(".typo [id^='h']");
 for (let index = 0; index < hs.length; index++) {
  const element = hs[index];
  $(".cataloy").append(' <li class="list-group-item"><a href="#'+element.id+'">'+element.innerText+'</a></li>')
 }


})