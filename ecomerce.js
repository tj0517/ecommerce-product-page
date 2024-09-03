document.getElementById("p1").addEventListener('click',function() {zdj(1)})
document.getElementById("p2").addEventListener('click',function() {zdj(2)})
document.getElementById("p3").addEventListener('click',function() {zdj(3)})
document.getElementById("p4").addEventListener('click',function() {zdj(4)})
document.getElementById("main_photo").addEventListener('click',open)
document.getElementById("left_arrow").addEventListener('click',function() {change(1)})
document.getElementById("right_arrow").addEventListener('click',function() {change(2)})
document.getElementById("x").addEventListener('click',closee)
var nr_zdj=1;
var z=1;
function zdj(nr)
{
$("#main_photo").attr("src","images/image-product-"+nr+".jpg")
$("#p"+nr).css({
"opacity" :"50%",
"border" : "orange 3px solid"   
})
$("#p"+nr_zdj).css({
    "opacity" :"100%",
    "border" : "none"   
})
nr_zdj=nr;
z=nr;
}
function open()
{
$("#photo_zoom").css("display","block");
$("#maska").css("display","block"); 
$("#main_photo2").attr("src","images/image-product-"+z+".jpg")
$(".p").css({
    "opacity" :"100%",
    "border" : "none"  
    })
}
function change(nr)
{
if(nr==1)
{
    z=z-1
    if(z==0)
    {
    z=4;    
    }
    $("#main_photo2").attr("src","images/image-product-"+z+".jpg")    
}
if(nr==2)
{
    z=z+1
    if(z==5)
    {
    z=1;    
    }
    $("#main_photo2").attr("src","images/image-product-"+z+".jpg")    
}
}
function closee()
{
    $("#photo_zoom").css("display","none");
    $("#maska").css("display","none");   
    $("#main_photo").attr("src","images/image-product-"+z+".jpg")  
    $("#p"+z).css({
        "opacity" :"50%",
        "border" : "orange 3px solid"   
        })  
        nr_zdj=z;
}