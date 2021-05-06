console.log('App.js is running!');

// if statements
// ternary operators
// logical and operator
//only render the subtitle (and a tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Here are your options" "No options"


const app = {
    title: 'Srikanth',
    subtitle:'UI developer',
    options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    //console.log('form submitted!');
    const option = e.target.elements.option.value;
if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';

    render();
}

};



// var userName="Mike";
// var age="50";
// var place="hnk";

const onRemoveAll = () => {
    app.options = [];
    render();
};

//create "Remove All" button above list
//on click -> wipe the array -> rerender

const onMakeDecision = () => {
    const randomNum =Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);

};


const appRoot = document.getElementById('app');

const numbers= [55,101,1000];

const render = () => {
    const template =
    (
        <div>
         <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
         <button  disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
         <button onClick={onRemoveAll}>Remove All</button>
        {
            // numbers.map((number) => {
            //     return <p key={number}>Number: {number}</p>
            // })
        }
         <ol>
            
             {
                 app.options.map((option) => <li key={option}>{option}</li>)
             }
         </ol>
         <form onSubmit={onFormSubmit}>
             <input type="text" name="option"  />
             <button>Add Option</button>
         </form>
         </div>
    );

    ReactDOM.render(template,appRoot);
};

render();

//create render function that renders the new jsw
//call it right away
//call it after options array added to