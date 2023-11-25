
const input= document.createElement("input");
const clsBtn= document.createElement("button");
const opnBtn= document.createElement("button");
opnBtn.innerText="open"
clsBtn.innerText="close"
document.body.append(input,clsBtn,opnBtn)
opnBtn.disabled=true;
clsBtn.addEventListener("click",()=>{
    opnBtn.disabled=false;
    clsBtn.disabled=true;
    input.disabled=true;

})
opnBtn.addEventListener("click",()=>{
    opnBtn.disabled=true;
    clsBtn.disabled=false;
    input.disabled=false;


})
