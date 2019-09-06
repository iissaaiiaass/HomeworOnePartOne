//Variables with all computer components and purchased components.
var componentsFILE = localStorage.getItem("ComputerComponents");
var computerComponents = JSON.parse(componentsFILE);
var selectedComponentsFile = localStorage.getItem("ChekedItems");
var selectedComponents = JSON.parse(selectedComponentsFile);
var subtotal = parseFloat(localStorage.getItem("TotalAmount"));

//Function that generate the HTML document with the components data to the web browser.
function preparation(){
    var ContainerElement = document.getElementById("purchasedComponents");
    var elementsPerComponent = 11;
    printSelectedComponents(elementsPerComponent, ContainerElement);

    var totalTitleElement = document.getElementById("DetailTotal");
    var invoiceDateElement = document.getElementById("DetailDate");
    invoiceDateElement.innerHTML = new Date().toLocaleDateString();
    var taxValue = 0.115;
    var tax = subtotal * taxValue;
    totalTitleElement.innerHTML = "&#x24 " + parseFloat(subtotal + tax);


    
    var subtotalElement = document.getElementById("Subtotal");
    var taxAmount = document.getElementById("Tax");
    var totalElement = document.getElementById("Total");

    subtotalElement.innerHTML = "Subtotal: &#x24 " + subtotal.toFixed(2);
    taxAmount.innerHTML = "Tax: &#x24 " + tax.toFixed(2);
    totalElement.innerHTML = "Total: &#x24 " + parseFloat(subtotal + tax).toFixed(2);
}

//Algorithm that create the correspondign HTML structure for each purchased component.
function printSelectedComponents(elementsPerComponent,ContainerElement){
    var componentsElementsSize = selectedComponents.length * elementsPerComponent;
    var componentsElements = new Array(componentsElementsSize);
    var j = 0;

    for(let i=0;i < componentsElements.length; i = i + elementsPerComponent){
            var computerComponent = findComponentById(selectedComponents[j]);
            componentsElements[i] = document.createElement("div");
                componentsElements[i].id = "itemDiv" + (j + 1);
                componentsElements[i].className = "itemDiv";

            componentsElements[i+1] = document.createElement("label");

            componentsElements[i+2] = document.createElement("input");
                componentsElements[i+2].type = "checkbox";
                componentsElements[i+2].name = "items";
                componentsElements[i+2].value = computerComponent.id;
                componentsElements[i+2].className = "itemCheckBox";

            componentsElements[i+3] = document.createElement("img");
                var imageFile =computerComponent.id + ".jpg"
                componentsElements[i+3].src = "Images/ComputerComponents/" + imageFile;
                componentsElements[i+3].className = "itemImage";

            componentsElements[i+4] = document.createElement("ul");
                componentsElements[i+4].className = "itemList";

            componentsElements[i+5] = document.createElement("li");
                componentsElements[i+5].className = "itemListItem";
                componentsElements[i+6] = document.createTextNode("Name: " + computerComponent.name)

            componentsElements[i+7] = document.createElement("li");
                componentsElements[i+7].className = "itemListItem";
                componentsElements[i+8] = document.createTextNode("Description: " + computerComponent.description);

            componentsElements[i+9] = document.createElement("li");
                componentsElements[i+9].className = "itemListItem";
                componentsElements[i+10] = document.createElement("span");
                componentsElements[i+10].innerHTML = ("Price: &#x24 " + computerComponent.price.toFixed(2));
                

            componentsElements[i+9].appendChild(componentsElements[i+10]);
            componentsElements[i+7].appendChild(componentsElements[i+8]);
            componentsElements[i+5].appendChild(componentsElements[i+6]);

            componentsElements[i+4].appendChild(componentsElements[i+5]);
            componentsElements[i+4].appendChild(componentsElements[i+7]);
            componentsElements[i+4].appendChild(componentsElements[i+9]);

            componentsElements[i+1].appendChild(componentsElements[i+3]);
            componentsElements[i+1].appendChild(componentsElements[i+2]);

            componentsElements[i].appendChild(componentsElements[i+1]);
            componentsElements[i].appendChild(componentsElements[i+4]);
            
            ContainerElement.appendChild(componentsElements[i]);

        j = j + 1;   
    }    
}

//Function that receive the component id and return the corresponding component.
function findComponentById(id){
    for(var i=0; i < computerComponents.length; i++){
        if(computerComponents[i].id == id){
            return computerComponents[i];
        }
    }
}