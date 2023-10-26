
//TODO:
// 1. Handle the reading of form field in a better manner, should be read by click on button.

// Create reference to button from index.html
const btn0 = document.querySelector('#btn0');
const textDiv = document.querySelector('#text');
const inputForm = document.querySelector('#search-Form');
const main = document.querySelector('#main');


// Best practise declare a const object for global variables to reduce clutter.
const app = {
    userInput: null,
    inputValidated: null,
    lastButtonPressed: null,
    id : 0,
    items: []
};

console.log('Start');

inputForm['userInput'].addEventListener('keypress', function (e) {
    
    if (e.key === "Enter") {
        // Cancel the default action, if needed
        e.preventDefault();
        // Trigger the button element with a click
        app.userInput = e.target.value;
        console.log(e.target.value);
        document.getElementById("btn0").click();
      }
    
});

//Add respons when no character is found.
const AddItem = () =>{
    
    const formData = inputForm['userInput'].value;
    console.log(formData);
    app.userInput= formData;

    if( app.items.indexOf(`${app.userInput}`) === -1)
    {
        app.items[app.id] = formData;
        app.id++;
        console.log(app.items);
    
   
    textDiv.innerHTML += `
            <br>
            <br>
            <div class="container-fluid" id="${app.userInput}container">
                <div class="row" style="align-content: center;">
                    <div class="col-3">
                        <button id="${app.userInput}checked" class="btn btn-info" style="background-color: yellow;"> Check </button>
                    </div>
                    <div class="col-3 offset-1">
                         <h5 style="text-align: center;"> ${app.userInput}</h5>
                    </div>
                    <div class="col-3 offset-1">
                        <button id="${app.userInput}" class="btn btn-info" style="background-color: rgb(248, 85, 35);"> Remove ${app.userInput}  </button>
                     </div>
                </div>
            </div>
            <br>
            `
    }
    else
    {window.alert('Item is already on the list');}
  
}

const UndoItem = () =>{
    let removeID = app.id+1;
    console.log(removeID);
        app.items.splice(removeID,1);    
    let removeDiv = document.querySelector(`#${app.userInput}container`);
    console.log(removeDiv);
    textDiv.removeChild(removeDiv)
  
}

btn0.addEventListener('click', AddItem);

btn1.addEventListener('click', UndoItem);

main.addEventListener('click', function (e) {
    e.preventDefault();

    let todo = e.target.id;
    console.log(todo);
    app.lastButtonPressed = todo
    
});

