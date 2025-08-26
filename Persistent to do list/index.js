let items = [];
const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItem(){
    itemsDiv.innerHTML = null;
    for(const [idx, item] of Object.entries(items)){

        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.textContent = item;
        text.style.margin = "5px"

        const button = document.createElement("button")
        button.textContent = "remove"
        button.onclick = ()=>removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)


        itemsDiv.appendChild(container)
    }
}
renderItem()
function loadItem(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
        renderItem()
}
function saveItem(){
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}

function addItem(){
    const value = input.value;
    if(!value){
        alert("you cannot add an empty item")
        return
    }
    items.push(value)
    renderItem()
    input.value = ""
    saveItem()
}

function removeItem(idx){
    items.splice(idx, 1)
    renderItem()
    saveItem()
}
document.addEventListener("DOMContentLoaded", loadItem)