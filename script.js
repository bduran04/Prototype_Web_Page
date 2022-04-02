//worry about the page routing 

let formData = {
    businessEmail: '',
    businessSize: '',
    importantSolution: ''
};

let businessSizeOptions = [
    "1-10",
    "11-50",
    "51-100",
    "101-250",
    "251-1000",
    "1000+"
]

let importantSolutionOptions = [
    "Real-time Analytics",
    "Query Response Time",
    "High Concurrency",
    "Fast Data Ingest",
    "Scalability",
    "Document Storage",
    "Full Text Storage",
    "Price"
];

const unqualified = {
    businessSize: "1-10",
    importantSolution: ["Document Storage", "Full Text Search", "Price"]
}

function createBusinessSizeOptions() {
    businessSizeOptions.forEach(option => {
        //create a new option element
        let optionElement = document.createElement('option');
        optionElement.innerText = option;
        optionElement.value = option;
        document.getElementById('business-size-select').appendChild(optionElement);
    })
}
createBusinessSizeOptions();

//create function to generate radio options 
function createImportantSolutionOptions() {
    importantSolutionOptions.forEach(option => {
        let optionElement = document.createElement('input');
        let labelElement = document.createElement('label');
        let divElement = document.createElement('div');
        labelElement.innerText = option;
        optionElement.type = 'radio';
        optionElement.name = 'important-solution-radio';
        optionElement.value = option;
        const importantSolutionContainer = document.getElementById('important-solution');
        importantSolutionContainer.appendChild(divElement);
        divElement.appendChild(optionElement);
        divElement.appendChild(labelElement);
    })
}
createImportantSolutionOptions();

function saveForm() {
    //check if form.businessSize is unqualified.businessSize or formData.importantSolution is included in unqualified.importantSolution 
    //if true, navigate to unqualified page
    //if false, navigate to qualified page
    formData.businessSize = document.getElementById('business-size-select').value;
    console.log(formData);
}

function updateEmail(event) {
    //validate email function call
    formData.businessEmail = event.target.value;
}
//validate email function 
//want to check the formData.businessEmail if it matches the regex
//set the email input class to default 
//if it does not match the regex, set the email input class to error
function updateBusinessSize(size) {
    formData.businessSize = size;
    console.log(size)
}