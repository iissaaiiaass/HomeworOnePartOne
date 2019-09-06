//Components selected by the user.
var selectedItems = new Array();

//Function that generate the HTML document with the components data to the web browser.
function preparation(){
    onLoadData();

    TotalAmountElement = document.getElementById("priceTotalAmount");
    TotalAmountElement.value = (0).toFixed(2);
    componentsFILE = localStorage.getItem("ComputerComponents");
    var computerComponents = JSON.parse(componentsFILE);
    var elementsPerComponent = 11;
    
    printComponentElements(computerComponents, elementsPerComponent, "Microprocessor",document.getElementById("Microprocessor"));
    printComponentElements(computerComponents, elementsPerComponent, "RAM",document.getElementById("RAM"));
    printComponentElements(computerComponents, elementsPerComponent, "Drive",document.getElementById("Drive"));
    printComponentElements(computerComponents, elementsPerComponent, "Graphic Card",document.getElementById("Graphic Card"));
    printComponentElements(computerComponents, elementsPerComponent, "Mother Board",document.getElementById("Mother Board"));
    printComponentElements(computerComponents, elementsPerComponent, "Power Supply",document.getElementById("Power Supply"));
    printComponentElements(computerComponents, elementsPerComponent, "DVD Rom",document.getElementById("DVD Rom"));
    printComponentElements(computerComponents, elementsPerComponent, "Sound Card",document.getElementById("Sound Card"));
}

//Algorithm that create the correspondign HTML structure for each component.
function printComponentElements(computerComponents, elementsPerComponent,category, ContainerElement){

    var componentsElementsSize = computerComponents.length * elementsPerComponent;
    var componentsElements = new Array(componentsElementsSize);
    var j = 0;
    var i = 0;

    for(;i < componentsElements.length; i = i + elementsPerComponent){
        if(computerComponents[i - (i-j)].category == category){
            componentsElements[i] = document.createElement("div");
                componentsElements[i].id = "itemDiv" + (j + 1);
                componentsElements[i].className = "itemDiv";

            componentsElements[i+1] = document.createElement("label");
                componentsElements[i+1].className = "itemLabel";

            if(computerComponents[i - (i-j)].category != "DVD Rom" && computerComponents[i - (i-j)].category != "Sound Card"){
                componentsElements[i+2] = document.createElement("input");
                componentsElements[i+2].type = "radio";
                componentsElements[i+2].name = "items" + category;
                componentsElements[i+2].value = computerComponents[i - (i-j)].id;
                componentsElements[i+2].onclick = changeDivColor;
                componentsElements[i+2].className = "itemCheckBox";
                componentsElements[i+2].checked = true;
            }else{
                componentsElements[i+2] = document.createElement("input");
                componentsElements[i+2].type = "checkbox";
                componentsElements[i+2].name = "items" + category;
                componentsElements[i+2].value = computerComponents[i - (i-j)].id;
                componentsElements[i+2].onclick = changeDivColor;
                componentsElements[i+2].className = "itemCheckBox";
            }

            componentsElements[i+3] = document.createElement("img");
                var imageFile = computerComponents[i - (i-j)].id + ".jpg"
                componentsElements[i+3].src = "Images/ComputerComponents/" + imageFile;
                componentsElements[i+3].className = "itemImage";

            componentsElements[i+4] = document.createElement("ul");
                componentsElements[i+4].className = "itemList";

            componentsElements[i+5] = document.createElement("li");
                componentsElements[i+5].className = "itemListItem";
                componentsElements[i+6] = document.createTextNode("Name: " + computerComponents[i - (i-j)].name)

            componentsElements[i+7] = document.createElement("li");
                componentsElements[i+7].className = "itemListItem";
                componentsElements[i+8] = document.createTextNode("Description: " + computerComponents[i - (i-j)].description);

            componentsElements[i+9] = document.createElement("li");
                componentsElements[i+9].className = "itemListItem";
                componentsElements[i+10] = document.createElement("span");
                componentsElements[i+10].innerHTML = ("Price: &#x24 " + computerComponents[i - (i-j)].price.toFixed(2));
                

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

            if(computerComponents[i - (i-j)].category != "DVD Rom" && computerComponents[i - (i-j)].category != "Sound Card"){
                componentsElements[i+2].click();

            }
        }
        j = j + 1;
        
    }
}

//Function that change the color of the selected components.
 function changeDivColor(){
    var componentsFILE = localStorage.getItem("ComputerComponents");
    var computerComponents = JSON.parse(componentsFILE);
    var TotalAmountElement = document.getElementById("priceTotalAmount");
    var radioElements = document.getElementsByName(this.name);

    for(var i=0; i < radioElements.length; i++){
        var itemId = radioElements[i].value;  
        var ItemDiveElement = document.getElementById("itemDiv" + itemId);
        if(radioElements[i].checked){
            if(selectedItems.indexOf(itemId) == -1){
                ItemDiveElement.style = "background-color: #00d2ff";
                selectedItems.push(itemId);
                var TotalAmount = 0;
                for(let i=0; i < selectedItems.length; i++){
                    TotalAmount = TotalAmount + computerComponents[selectedItems[i]-1].price;
                }
                TotalAmountElement.value = TotalAmount.toFixed(2);
            }   
        }
        else{
            elementIndex = selectedItems.indexOf(itemId);
            if(elementIndex != -1){
                ItemDiveElement.style = "background-color: white";
                TotalAmountElement.value = (TotalAmountElement.value - computerComponents[selectedItems[elementIndex]-1].price).toFixed(2);
                selectedItems.splice(elementIndex,1);  
            }
        }
    }
    
}

//Function that save the selected component data to be used in the Invoice page.
function submit(){
    var ChekedItemsString = JSON.stringify(selectedItems);
    localStorage.setItem("ChekedItems",ChekedItemsString);

    var TotalAmountElement = document.getElementById("priceTotalAmount");
    localStorage.setItem("TotalAmount",TotalAmountElement.value);

    window.open("Invoice.html","_top");
}