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

const url_api="https://zenquotes.io/api/quotes "

async function generateqoutes(url){
    const response= await fetch(url);
    var data= await response.json();
    // console.log(data);


    
    

    let randomNumber= Math.floor(Math.random()*50)
    // console.log(randomNumber)
    const final_qoute=data[randomNumber].q;
    

   
    // console.log(result);
    console.log(final_qoute);
     qoute.innerHTML=final_qoute; 
    
    
}
generateqoutes(url_api);

// ////////////////////////////////




// //////////////////////////////////
// add_note.addEventListener('click',()=>{

//     let inputBox=document.createElement("p");
//     let trash=document.createElement("img");
//     let labelImg=document.createElement("label");
//     let imageInput=document.createElement("input");
//     let img_icon=document.createElement("img");


//     // img_icon.src="assets/upload-svgrepo-com.svg";
//     trash.src="assets/5016735.png";
//     trash.classList.add("trash-icon")

//     img_icon.className="upload-image";
//     labelImg.for="imgUpload";
//     inputBox.className="note-content";
//     img_icon.setAttribute("data-toggle","tooltip");
//     img_icon.setAttribute("data-placement","top");
//     img_icon.setAttribute("title","Upload Image");

//     imageInput.id="imgUpload"

//     imageInput.setAttribute("type", "file");
//     imageInput.setAttribute("accept", "image/*");
//     inputBox.setAttribute("contenteditable","true");
//     inputBox.appendChild(labelImg).appendChild(img_icon);
//     inputBox.appendChild(imageInput);  // Add the file input (it will be hidden by default)

//     note_container.appendChild(inputBox).appendChild(trash);
//     imageInput.style.display = "none"; // Hide the file input by default


//     console.log('hello');
 

//     // console.log(note_container.innerHTML);
//     updateStorage()
// })


// note_container.addEventListener("click",(e)=>{


// if (e.target.classList.contains("trash-icon")){

//          e.target.parentElement.remove();
//         // console.log("delete button");
        
//         updateStorage()


    

// }else if(e.target.tagName==="P"){

//      notes_content=document.querySelectorAll(".note-content")

//     notes_content.forEach(note =>{
//         note.onkeyup=function(){
//             updateStorage()
//             console.log("hi");
//         }
//      })

// }

// document.addEventListener("keydown",(e)=>{
//     if(e.key==="Enter"){
//         document.execCommand("insertLineBreak");
//         e.preventDefault();
//     }

// })
// })

// //////////////////to do-list









// Handle file upload to display image in the note


        // this files[0] contain object of files and the index 0 contains the meant file
       
      
            // taking new instance of file reader that has methods like reaasdataurl 
            // and readastext and readadarraybuffer 
            // we use it ti handle the image file and read it as based64 encoded data 
            // in the reader function after loading the image we use the adata result as the img src
           




// ///////////////add note////////////////////////
var addNoteBtn=document.getElementById("add-note");
var note_container=document.getElementById("note-container-d ");
var noteTitle=document.getElementById("note-title");
var noteContent=document.getElementById("note-content-d");

var savebtn=document.getElementById("savebtn")


function notelocalStorage(){
    localStorage.setItem("notes",note_container.innerHTML)
}
function updateNoteStorage(){
    if (localStorage.getItem("notes")){
        note_container.innerHTML=localStorage.getItem("notes")
    }
}
updateNoteStorage()
addNoteBtn.addEventListener("click",function(){
    
    
    

    if(noteTitle ==null){
        console.log("there is no content");
        
    }


    let note=`<div class="notes bg-white rounded-2 p-3 my-3">
                          <h3 class="bg-secondary text-capitalize" contenteditable="true" id="note-title">${noteTitle?noteTitle.innerHTML:"add note"}</h3>
                          <hr>
                          <div class="row">
                            <div class="col-md-8 col-sm-12 col-12">
                              <div class="note-content">
                                <p class="note-content" contenteditable="true" id="note-content-d"  >${noteContent?noteContent.innerHTML:"content"}</p>

                              </div>

                            </div>
                            <div class="col-md-4 col-sm-12 col-12 " id="hidden-image">
                              <div class="image-upload bg-gray d-flex align-items-center justify-content-center  " id="note-image">
                                
                                <img src="" alt="" id="uploadedImage"> 
                              </div>

                            </div>
                            <div class="col-12 col-auto">
                              <div class="assets-note d-flex align-items-center justify-content-end ">
                                <div class="upload-image ">
                                  
                                  <label for="upload-image-input"><img src="assets/upload-svgrepo-com.svg" alt="upload image" id="upload-img"></label>
                                  <input type="file" accept="image/*" class="d-none" id="upload-image-input">

                                

                                </div>
                                <div class="delete-btn">
                                  <img src="assets/5016735.png" alt="trash-icon" id="trash">
                                </div>
                              <!--  <div id="savebtn">
                                  <span>save</span>
                                </div>-->

                              </div>

                            </div>
                          </div>

                          
                        </div>`

    note_container.innerHTML+=note;

    notelocalStorage()
    console.log("note added to container");
    

})


note_container.addEventListener("click", (e) => {
  if (e.target.id==="trash") {
      const note = e.target.closest(".notes"); 
      
      if (note) {

        console.log("delete");
        
          note.remove(); 
          notelocalStorage(); 
      }
  }
  
});



note_container.addEventListener("focus",(e)=>{
    if(e.target.id==="note-title"&& e.target.textContent==="add note")
    {
      e.target.textContent="";
      console.log("lol!");
      
  
    }else if(e.target.id==="note-content-d"&&e.target.textContent==="content"){
      e.target.textContent="";
      console.log("lol!");
    }
  },true);
  
  
  note_container.addEventListener("input",(e)=>{
    if(e.target.id==="note-title")
    {
      notelocalStorage();
    }
    if(e.target.id==="note-content-d"){
      notelocalStorage();
  
    }
    
  },true);



  note_container.addEventListener("click", (e) => {
    if (e.target.id==="trash") {
        const note = e.target.closest(".notes"); 
        
        if (note) {
          console.log("delete");
          note.remove(); 
          notelocalStorage(); 
        }
    }


    if(e.target.id==="upload-image-input"){
      const uploadimageinput=document.getElementById("upload-image-input");
      uploadimageinput.addEventListener("change",(e)=>{
        const file = e.target.files[0]; 
        console.log(file);
        

        
    

      if (file) {
        console.log("heyyyyyy");
        
        const uploadimageinput2= e.target.closest(".row").querySelector("#note-image");
        let uploadimageinput2_content=uploadimageinput2.
        console.log(uploadimageinput2);
        
        const hidden_image=uploadimageinput2.querySelector("#hidden-image");
        console.log(hidden_image);
        
        hidden_image.classList.remove("d-none")
        const uploadedImage=uploadimageinput2.querySelector("#uploadedImage");
        console.log(uploadedImage);
        
        
          const reader = new FileReader();
  
          reader.onload = function (event) {
           
              
              uploadedImage.src = event.target.result; 
              uploadedImage.style.display = "block";   
             
          };
  
          reader.readAsDataURL(file); // Convert the file to a Data URL
      }
  
      })
     
      console.log("hhhhhhh");
    }
  
  });
  
  















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

