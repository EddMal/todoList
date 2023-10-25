
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
    items: null
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
const HandleItem = () =>{
    
    const formData = inputForm['userInput'].value;
    console.log(formData);
    app.userInput= formData;
    app.items += formData;
    console.log(app.items);
    
    //
    textDiv.innerHTML += `
            <div class="card" style="text-align: center;">
                <div>
                <br>
                    <h5 class="card-title"> ${app.userInput}                               
                    
                    <button id="${app.userInput}checked" class="btn btn-info" style="background-color: yellow;"> Done </button>

                    </h5>
                    <br>
                    <button id=${app.userInput} class="btn btn-info" style="background-color: rgb(248, 85, 35);"> Remove ${app.userInput}  </button>
                </div>
            </div>
            `
}

btn0.addEventListener('click', HandleItem);

main.addEventListener('click', function (e) {
    e.preventDefault();

    let todo = e.target.id;
    console.log(todo);
    app.lastButtonPressed = todo
    
});

