let title=document.querySelector("#text");
let notesElement=document.querySelector('.notes');

let description=document.querySelector('#description');
let submit=document.querySelector(".submit");

let notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(element => {
        addNotes(element)
    });
}
/*When user clicks add button it will add the note to the screen and local storage*/
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
})
function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    let descVal=description.value;
    if(obj){
        titleval=obj.title;
        descVal=obj.description;
    }
    /*Writes the users note into the note card element*/
    if(titleval){
        card.innerHTML=`<h3>${titleval}</h3>
                                    <p class="ptag">${descVal}</p>
                             <button class="delete">Delete</button>`;
        notesElement.appendChild(card);
        updateLs()
    }
    let deleteNote=card.querySelector(".delete");
    deleteNote.addEventListener('click', ()=>{
        card.remove();
        updateLs();
    })
}
function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            description:element.children[1].innerText
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}
/*Adding Drag and Drop Functionality*/
/*Adding option to change background color to navigation*/

/*Adding Sticky Note Change Functionality*/