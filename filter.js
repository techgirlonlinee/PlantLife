$(".catlinks a").on("click", function(){
  var filter=$(this).attr("data-filter")
  $(".all").hide()
  $(filter).show()
  
$(".catlinks a").removeClass("selected")  
	$(this).addClass("selected")
  
  return false
})

$(".catlinks .green").on("click", function(){
  $(".redflowers").css("display","none")
  $(".plumeria").css("display","none")
})

$(".catlinks .erthang").on("click", function(){
  $(".redflowers").css("display","inline-block")
  $(".plumeria").css("display","inline-block")
  $("div:nth-child(8)").css("margin-left", "0px")
  $(".plumeria").css("left","0px")
  $(".redflowers").css("left","0px")
  $(".redflowers").css("padding-left","10px")
})

$(".catlinks .flower").on("click", function(){
  $(".plumeria").css("display","inline-block")
  $(".plumeria").css("left","-117px")
  $(".redflowers").css("display","inline-block")
  $(".redflowers").css("left","-140px")
})

$(".wrapper").on("scroll", function(){
  $(".move").css("display","none")
})

var currentNumber = 0

$(".overlay a img").on("click", function (){
  	currentNumber = currentNumber + 1
  	$('.count').text(currentNumber)
})


$(".overlay a img").on("click", function (){
$(".note").fadeIn().delay(1900).fadeOut(".note")
})






