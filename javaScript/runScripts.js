
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
    addedItemId:0,
    items: []
};

console.log('Start');

inputForm['userInput'].addEventListener('keypress', function (e) {
    
    if (e.key === "Enter") {
        // Cancel the default action, if needed
        e.preventDefault();
        // Trigger the button element with a click
        app.userInput = e.target.value.trim();
        console.log(e.target.value);
        document.getElementById("btn0").click();
      }
    
});

//Add respons when no character is found.
const AddItem = () =>{
    
    let formData = inputForm['userInput'].value;
    formData = formData.trim();
    console.log(formData);
    
    formData= formData.split(' ').join('_');
    if( app.items.indexOf(`${formData}`) === -1)
    {
        app.userInput= formData;
        app.items[app.id] = formData;
        app.addedItemId = app.id;
        app.id++;
        console.log(app.items);
        
   
    textDiv.innerHTML += `
            
            <div class="container-fluid" id="${formData}Container">
                <br>
                <br>
                <div class="row" style="align-content: center;">
                    <div class="col-3">
                        <button id="${formData}Check" class="btn btn-info" style="background-color: yellow;"> Check </button>
                    </div>
                    <div class="col-3 offset-1">
                         <h5 style="text-align: center;" id="${formData}Text"> ${app.userInput}</h5>
                    </div>
                    <div class="col-3 offset-1">
                        <button id="${formData}" class="btn btn-info" style="background-color: rgb(248, 85, 35);"> Remove ${app.userInput}  </button>
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
    console.log(app.addedItemId);
    if(app.id !==0)
    {
    let removeID = app.addedItemId;
    console.log(removeID);
       //--Make function for
       app.items.splice(removeID,1);
       let tempArray =app.items;
       console.log('temp array:');
       console.log(tempArray);
       //app.items = [];
       app.items = tempArray;
        /* for (element in tempArray){
           if (element !== (null || undefined)){
               app.items[i] = element;
               i++;
   
           }    
       }   */
       console.log(app.items);
       //--Make function for end.  
    let removeDiv = document.querySelector(`#${app.userInput}Container`);
    console.log(removeDiv);
    textDiv.removeChild(removeDiv);
    app.id--;
    console.log('id now:');
    console.log(app.id);
    }
}

function RemoveItem (id){
    let removeID = app.items.indexOf(`${id}`)
    console.log(removeID);
    //removeID =+ 1;
    console.log(removeID);
    //--Make function for
    app.items.splice(removeID,1);
    let tempArray =app.items;
    console.log('temp array:');
    console.log(tempArray);
    //app.items = [];
    app.items = tempArray;
     /* for (element in tempArray){
        if (element !== (null || undefined)){
            app.items[i] = element;
            i++;

        }    
    }   */
    console.log(app.items);
    //--Make function for end.  
    let removeDiv = document.querySelector(`#${id}Container`);
    console.log(removeDiv);
    textDiv.removeChild(removeDiv)
    app.id--;
    console.log(app.id);
}

function CheckItem (id){
    let CheckedItem = id;
    console.log('Before Slice');
    console.log(CheckedItem);
    CheckedItem = CheckedItem.slice(0,-5)
    console.log('Slice');
    console.log(CheckedItem);
    if( app.items.indexOf(`${CheckedItem}`) !== -1)
    {
        if ( document.getElementById(`${CheckedItem}Text`).className.match(/(?:^|\s)checked(?!\S)/) ){
            console.log('no class');
            document.getElementById(`${CheckedItem}Text`).className =
                document.getElementById(`${CheckedItem}Text`).className.replace
                ( /(?:^|\s)checked(?!\S)/g , '' )
        }
        else{
            document.getElementById(`${CheckedItem}Text`).className += " checked";
            console.log('class checked');
            //Change name on button.

           
        }

    }
}

btn0.addEventListener('click', AddItem);

btn1.addEventListener('click', UndoItem);

main.addEventListener('click', function (e) {
    e.preventDefault();


    console.log(e.target.id);

    let buttonChecked = e.target.id;
    //keeps the wrong part of string.
    buttonChecked = buttonChecked.slice(-5)
    console.log('buttonChecked:');
    console.log(buttonChecked);

    if( app.items.indexOf(`${e.target.id}`) !== -1){
        RemoveItem(e.target.id);
    }
    else if(buttonChecked==='Check'){
        CheckItem (e.target.id);
    }
});

