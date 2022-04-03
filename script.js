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

//function that generates select options for business size
function createBusinessSizeOptions() {
    businessSizeOptions.forEach(option => {
        let optionElement = document.createElement('option');
        optionElement.innerText = option;
        optionElement.value = option;
        document.getElementById('business-size-select').appendChild(optionElement);
    })
}
createBusinessSizeOptions();

//function that generates radio options for important solution question 
function createImportantSolutionOptions() {
    importantSolutionOptions.forEach(option => {
        const optionElement = document.createElement('input');
        const labelElement = document.createElement('label');
        const divElement = document.createElement('div');
        labelElement.innerText = option;
        optionElement.type = 'radio';
        optionElement.name = 'important-solution-radio';
        optionElement.value = option;
        optionElement.onclick = function(option) {formData.importantSolution = option.target.value};
        const importantSolutionContainer = document.getElementById('important-solution');
        importantSolutionContainer.appendChild(divElement);
        divElement.appendChild(optionElement);
        divElement.appendChild(labelElement);
    })
}
createImportantSolutionOptions();

function saveForm() {
    formData.businessSize = document.getElementById('business-size-select').value;
    if (formData.businessSize === unqualified.businessSize || unqualified.importantSolution.includes(formData.importantSolution)) {
        window.location.href = 'unqualified.html';
    } else {
        window.location.href = 'qualified.html';
    }
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