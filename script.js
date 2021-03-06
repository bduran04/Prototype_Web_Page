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

function validateBusinessSize() {
    if (formData.businessSize === "") {
        document.getElementById("error-message2").classList.add('error')
        document.getElementById("submit-button").disabled = true;
    }
}

function validateImportantSolution() {
    if (formData.importantSolution === "") {
        document.getElementById("error-message3").classList.add('error')
        document.getElementById("submit-button").disabled = true;
    }
}

function enterEmail() {
    if (formData.businessEmail === "") {
        document.getElementById("error-message1").classList.add('error')
        document.getElementById("submit-button").disabled = true;
    }
}

function saveForm() {
    validateBusinessSize();
    validateImportantSolution();
    formData.businessSize = document.getElementById('business-size-select').value;
    formData.importantSolution = document.querySelector('input[name="important-solution-radio"]:checked').value;
    if (formData.businessSize === unqualified.businessSize || unqualified.importantSolution.includes(formData.importantSolution)) {
        window.location.href = 'pages/unqualified.html';
    } else {
        window.location.href = 'pages/qualified.html';
    }
}

function validateEmail() {
    if (formData.businessEmail.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        document.getElementById('email').classList.remove('error');
        document.getElementById("error-message").classList.remove('error')
        document.getElementById("email").classList.add('valid');
    } else { 
        document.getElementById('email').classList.add('error');
        document.getElementById("error-message").classList.add('error')
        document.getElementById("submit-button").disabled = true;
    }
}

function updateEmail(event) {
    validateEmail();
    formData.businessEmail = event.target.value;
}

function updateBusinessSize(size) {
    formData.businessSize = size;
    console.log(size)
}