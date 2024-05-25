//coded by sreeraj
		
const a=document.querySelector(".D-Link");
const image=document.querySelector(".image");
const generatebtn=document.querySelector(".G-btn");
const input=document.querySelector(".input");

generatebtn.addEventListener("click",()=>{
	image.style.display="block"
let content=input.value;
image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${content}`
//click the qr image to download
 
//download section   
var api=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${content}`;
 //blob =binary large object
fetch(api).then((response)=>response.blob()).then((data)=>{
	console.log(data)
  let url=URL.createObjectURL(data);
  a.href=url;
  a.download="QRIMAGE";
 
})

})



	
