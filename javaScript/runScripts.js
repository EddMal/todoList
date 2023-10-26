
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
            
            <div class="container-fluid" id="${app.userInput}Container">
                <br>
                <br>
                <div class="row" style="align-content: center;">
                    <div class="col-3">
                        <button id="${app.userInput}Check" class="btn btn-info" style="background-color: yellow;"> Check </button>
                    </div>
                    <div class="col-3 offset-1">
                         <h5 style="text-align: center;"> ${app.userInput}</h5>
                    </div>
                    <div class="col-3 offset-1">
                        <button id="${app.userInput}" class="btn btn-info" style="background-color: rgb(248, 85, 35);"> Remove ${app.userInput}  </button>
                     </div>
                </div>
                <br>
            </div>
            
            `
    }
    else
    {window.alert('Item is already on the list');}
  
}

const UndoItem = () =>{
    let removeID = app.id+1;
    console.log(removeID);
    //--Make function for
    let tempArray = app.items.splice(removeID,1);
    app.items = [];
    let i = 0;
     for (element in tempArray){
        if (element !== (null || undefined)){
            app.items[i] = element;
            i++;

        }    
    }  
    console.log(app.items);
    //--Make function for end. 
    let removeDiv = document.querySelector(`#${app.userInput}Container`);
    console.log(removeDiv);
    textDiv.removeChild(removeDiv);
    app.id--;
    console.log('id now:');
    console.log(app.id);
}

function RemoveItem (id){
    let removeID = app.items.indexOf(`${id}`)
    console.log(removeID);
    removeID =+ 1;
    console.log(removeID);
    //--Make function for
    let tempArray = app.items.splice(removeID,1);
    app.items = [];
    let i = 0;
     for (element in tempArray){
        if (element !== (null || undefined)){
            app.items[i] = element;
            i++;

        }    
    }  
    console.log(app.items);
    //--Make function for end.  
    let removeDiv = document.querySelector(`#${id}Container`);
    console.log(removeDiv);
    textDiv.removeChild(removeDiv)
    app.id--;
}


btn0.addEventListener('click', AddItem);

btn1.addEventListener('click', UndoItem);

main.addEventListener('click', function (e) {
    e.preventDefault();


    console.log(e.target.id);

    let buttonChecked = e.target.id;
    buttonChecked = buttonChecked.slice(-7)
    console.log(buttonChecked);

    if( app.items.indexOf(`${e.target.id}`) !== -1){
        RemoveItem(e.target.id);
    }
    else if(buttonChecked==='Check'){
        
    }
});

