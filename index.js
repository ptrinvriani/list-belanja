const addButton = document.getElementById("add-button");
const ListBelanja = document.getElementById("add-list");
const deleteButton = document.getElementById("dell-button");

function addList() {
    const text = prompt("Masukan List Belanja!");
    const textNode = document.createTextNode(text);
    const ListNode = document.createElement("li");
    // const deleteButton = document.createElement("button");

    // deleteButton.textContent = "delete";
    // deleteButton.addEventListener("click", () => {ListNode.remove()});

    ListNode.appendChild(textNode);
    ListBelanja.appendChild(ListNode);
    // ListNode.appendChild(deleteButton);
}

addButton.addEventListener("click", addList);
deleteButton.addEventListener("click", function(){
    ListBelanja.removeChild(ListBelanja.lastChild);
});