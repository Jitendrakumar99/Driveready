// console.log("lkbgjhkl")
var i=true;
function fun(data)
{
	if(i==true)
	{
	const ch11 = document.getElementsByClassName("ch11")[0];
	const ch12 = document.getElementsByClassName("ch12")[0];
	const ch13 = document.getElementsByClassName("ch13")[0];
   
	ch11.classList.toggle("rotate1");
	ch12.classList.toggle("rotate3");
	ch13.classList.toggle("rotate2");
	var y=document.getElementsByClassName(data)[0];
	y.style.width="350px"
	i=false;
	}
	else
	{
		const ch11 = document.getElementsByClassName("ch11")[0];
		const ch12 = document.getElementsByClassName("ch12")[0];
		const ch13 = document.getElementsByClassName("ch13")[0];
	ch11.classList.toggle("rotate1");
	ch12.classList.toggle("rotate3");
	ch13.classList.toggle("rotate2");
		var x=document.getElementsByClassName(data)[0];
	    x.style.width="0px"
	i=true;
	}
	// console.log(x)
}
// function fun2(data)
// {
// 	var x=document.getElementsByClassName(data)[0];
// 	var y=document.getElementsByClassName("blo");
// 	x.style.width="0px"
// 	y.style.display="none"
	
// 	// console.log(x)
// }
var emb=document.getElementsByTagName("h1")[0];
emb.setAttribute("data-aos","fade-right")
emb.setAttribute("data-aos-duration","2000")

var emb1=document.getElementsByTagName("h1")[1];
emb1.setAttribute("data-aos","fade-right")
emb1.setAttribute("data-aos-duration","3000")

var emb3=document.getElementsByTagName("h6")[0];
emb3.setAttribute("data-aos","fade-right")
emb3.setAttribute("data-aos-duration","4000")

var upmove=document.querySelectorAll(".upmove");
// console.log(upmove);

upmove.setAttribute("data-aos","fade-up")
upmove.setAttribute("data-aos-duration","1000")