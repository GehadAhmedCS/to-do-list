const hrs=document.getElementById('hrs');
const mins=document.getElementById('mins');
const sec=document.getElementById('sec');


setInterval(()=>{

    const current_time= new Date();
// console.log(current_time.getHours());


hrs.innerHTML=(current_time.getHours()<10? "0":"")+(current_time.getHours());
mins.innerHTML=(current_time.getMinutes()<10? "0":"")+(current_time.getMinutes());
sec.innerHTML=(current_time.getSeconds()<10? "0":"")+(current_time.getSeconds());





},1000)



// /////////////qout generator
var qoute=document.getElementById("qoute");

const url_api="https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes "

async function generateqoutes(url){
    const response= await fetch(url);
    var data= await response.json();
    const result=JSON.parse(data.contents)

    // console.log(data);
    // console.log(result[randomNumber].q);

    let randomNumber= Math.floor(Math.random()*50)
    // console.log(randomNumber)
    const final_qoute=result[randomNumber].q;
    

   
    // console.log(result);
    // console.log(final_qoute);
     qoute.innerHTML=final_qoute; 
    
    
}
generateqoutes(url_api);

// ////////////////////////////////

var add_note=document.getElementById("add-note");
var note_container=document.getElementById("note-container-d");
var notes_content=document.querySelectorAll(".note-content")


function updateStorage(){
    localStorage.setItem("notes",note_container.innerHTML);

}


function showNotes(){
    note_container.innerHTML=localStorage.getItem("notes");
}
showNotes();


add_note.addEventListener('click',()=>{

    let inputBox=document.createElement("p");
    let trash=document.createElement("img");
    trash.src="assets/5016735.png"
    inputBox.className="note-content"
    
    inputBox.setAttribute("contenteditable","true")

    note_container.appendChild(inputBox).appendChild(trash);

    console.log('hello');

    console.log(note_container.innerHTML);
    



    updateStorage()
    





})



note_container.addEventListener("click",(e)=>{
//   console.log(
//     e.target.tagName
//   );

if (e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updateStorage()


}else if(e.target.tagName==="P"){

     notes_content=document.querySelectorAll(".note-content")

    notes_content.forEach(note =>{
        note.onkeyup=function(){
            updateStorage()
            console.log("hi");
        }
       

        


     })

    
    


}


document.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }

})
})

// //////////////////to do-list

var add_task=document.getElementById("add-task");
var task_container=document.getElementById("list-task-container");
var inputTaskBox=document.getElementById("input-task-box")

function saveTasks(){
   localStorage.setItem("tasks",task_container.innerHTML)
}

function updateTaskStorage() {
   task_container.innerHTML= localStorage.getItem("tasks");
}
updateTaskStorage();
add_task.addEventListener("click",function(){

    if(inputTaskBox.value==''){

        alert("please enter your task")
    }else {
        let li=document.createElement("li");
         li.innerHTML=inputTaskBox.value;
         task_container.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);


        inputTaskBox.value=''
        saveTasks();



    }

    


})

task_container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("cheacked");
        saveTasks();
    }else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveTasks()
    }
})

