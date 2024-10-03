let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("#check");
let input=document.querySelector("input");
let list=document.querySelector("#list");
btn.addEventListener("click",async ()=>{
    let collName=input.value;   
    let data=await getcollege(collName);
    showList(data);
})

async function showList(data){
    for(li of data){
        let lst=document.createElement("li");
        lst.classList.add("style");
        lst.innerText=li.name;
        list.appendChild(lst);
    }
}
async function getcollege(collName){
    try{
       let res=await axios.get(url+collName);
        return res.data;
    }catch(e){
        console.log("Error - ",e);
    }
}

 
