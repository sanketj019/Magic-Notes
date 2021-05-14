showNotes();

//if user adds note, save it to loalStorage.
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    console.log(notesObj);
    showNotes();
})
//function to show notes from localstorage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html1 = "";
    notesObj.forEach(function (element, index) {
        html1 +=`<div class="note my-2 mx-2 card" style ="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}"class="btn btn-primary" onclick="deleteNote(this.id)">Delete</button>
            </div>
        </div>`;
    });

    let notesElm = document.getElementById("notes");
        if (notesObj.length != 0) {
            notesElm.innerHTML = html1;
        }
        else {
            notesElm.innerHTML = "please add notes";
        }
}

//function to delete note
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
//search functionality
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal= search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('note');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})

