var itemArray = [];
var uniqueItemID = 0;

var itemListElement = document.getElementById("list");
var newItemInput = document.getElementById("add");

class ToDoItem {
    constructor(itemID, value) {
        this.itemID = itemID;
        this.value = value;
        this.checked = "";
    }
}

function CreateItem() {
    //Funciton is called when "Add Item To List" button is pressed.

    //Add Item to local array.
    //Include uniqueItemID to let the HTML store as an attribute, then pass it as a parameter when updating or deleting.
    itemArray.push(new ToDoItem(uniqueItemID, newItemInput.value));
    //increment uniqueItemID, for next item.
    uniqueItemID += 1;
    //Call ReadItemList() to display the new array on the page.
    ReadItemList();
}
function ReadItemList() {
    //Function is called to display items in itemList.
    itemListElement.innerHTML = ``;
    for (let i = 0; i < itemArray.length; i++) {
        let item = itemArray[i];
        itemListElement.innerHTML += `<li>${item.value}<input type="checkbox" onclick="UpdateItem(${item.itemID})" ${item.checked}><button onclick="DeleteItem(${item.itemID})">Remove Item</button></li>`;
    }
    //DEBUG display itemList in console.
    for (let i = 0; i < itemArray.length; i++) {
        let item = itemArray[i];
        console.log(item);
    }
}
function UpdateItem(itemID) {
    //Function is called when chekbox is clicked.

    //Go through each item object in itemList till ID matches, and update checked variable.
    //REPLACE WITH MORE OPTIMAL WAY TO FIND OBJECT IN ARRAY LATER.
    console.log("Updating Item.");
    for (let i = 0; i < itemArray.length; i++) {
        let item = itemArray[i];
        if (item.itemID == itemID) {
            if (item.checked) {
                item.checked = "";
            }
            else {
                item.checked = "checked";
            }
        }
    }

    //ReadItemList() again to display updated list.
    ReadItemList();
}
function DeleteItem(itemID) {
    //Function is called when embedded "Remove Item" button is clicked.
    //Using the same method in the UpdateItem function, the item is found by it's itemID attribute and then deleted from the local array.
    console.log("Deleting Item.");
    for (let i = 0; i < itemArray.length; i++) {
        let item = itemArray[i];
        if (item.itemID == itemID) {
            itemArray.splice(i, 1);
        }
    }
    //ReadItemList() again to display updated list.
    ReadItemList();
}