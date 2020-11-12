var ToDoItem = /** @class */ (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
var ToDoList;
function save() {
    document.cookie = "list=" + JSON.stringify(ToDoList);
}
function load() {
    var list = getCookie("list")
    if(list == ""){
        ToDoList = []
        return
    }
    ToDoList = JSON.parse(list);
    update();
}
function update() {
    document.getElementById("table").innerHTML = "";
    ToDoList.forEach(function (item, index) {
        addItemToTable(item, index);
    });
}
function addItemToTable(item, index) {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.className = "tg-" + index % 2 + (item.complete ? " done" : "");
    td1.onclick = function () { return toggleComplete(index); };
    td1.innerText = item.itemText;
    td2.className = "tg-" + index % 2 + " delete";
    td2.onclick = function () { return deleteItem(index); };
    td2.innerText = "X";
    row.appendChild(td1);
    row.appendChild(td2);
    var table = document.getElementById("table");
    table.appendChild(row);
}
function deleteItem(index) {
    ToDoList.splice(index,1)
    update();
}
function newItem() {
    var input = document.getElementById("add");
    if(input.value != ""){
    var tdi = new ToDoItem();
    tdi.complete = false;
    tdi.itemText = input.value;
    ToDoList.push(tdi);
    input.value = ""
    update();
    }
}
function toggleComplete(i) {
    ToDoList[i].complete = !ToDoList[i].complete;
    update();
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
