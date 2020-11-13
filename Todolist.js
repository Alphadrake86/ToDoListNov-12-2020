var ToDoItem = /** @class */ (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
var ToDoList;
var editIconHtml = "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-pencil-square\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>\n<path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>\n</svg>";
var deleteIconHTML = "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z\"/>\n</svg>";
var checkClipboardHtml = "<svg width=\"2em\" height=\"2em\" viewBox=\"0 0 16 16\" class=\"bi bi-clipboard-check\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" d=\"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z\"/>\n<path fill-rule=\"evenodd\" d=\"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z\"/>\n</svg>";
var blankClipboardHtml = "<svg width=\"2em\" height=\"2em\" viewBox=\"0 0 16 16\" class=\"bi bi-clipboard\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" d=\"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z\"/>\n<path fill-rule=\"evenodd\" d=\"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z\"/>\n</svg>";
function save() {
    document.cookie = "list=" + JSON.stringify(ToDoList);
    document.getElementById("savebtn").innerHTML = checkClipboardHtml;
}
function load() {
    ToDoList = JSON.parse(getCookie("list"));
    update();
}
function update() {
    document.getElementById("table").innerHTML = "";
    ToDoList.forEach(function (item, index) {
        addItemToTable(item, index);
    });
    document.getElementById("savebtn").innerHTML = blankClipboardHtml;
}
function addItemToTable(item, index) {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.className = "tg-" + index % 2 + (item.complete ? " done" : "");
    td1.onclick = function () { return toggleComplete(index); };
    td1.innerText = item.itemText;
    td2.className = "tg-" + index % 2 + " edit";
    td2.innerHTML = editIconHtml;
    td2.onclick = function () { return editItem(index); };
    td3.className = "tg-" + index % 2 + " delete";
    td3.onclick = function () { return deleteItem(index); };
    td3.innerHTML = deleteIconHTML;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    var table = document.getElementById("table");
    table.appendChild(row);
}
function deleteItem(index) {
    ToDoList.splice(index, 1);
    update();
}
function newItem() {
    var input = document.getElementById("add");
    if (input.value != "") {
        var tdi = new ToDoItem();
        tdi.complete = false;
        tdi.itemText = input.value;
        ToDoList.push(tdi);
        input.value = "";
        update();
    }
}
function editItem(i) {
    update();
    var td = document.getElementById("table").children[i].children[0];
    td.innerText = "";
    td.onclick = null;
    var form = document.createElement("form");
    form.onsubmit = function () { return false; };
    td.appendChild(form);
    var input = document.createElement("input");
    input.type = "text";
    input.value = ToDoList[i].itemText;
    input.id = "edit" + i;
    form.appendChild(input);
    var saveBtn = document.createElement('input');
    saveBtn.type = "submit";
    saveBtn.value = "save";
    saveBtn.onclick = function () {
        var text = document.getElementById("edit" + i).value;
        setItemText(i, text);
    };
    form.appendChild(saveBtn);
    var cancleBtn = document.createElement("input");
    cancleBtn.type = "button";
    cancleBtn.value = "cancel";
    cancleBtn.onclick = function () { update(); };
    form.appendChild(cancleBtn);
}
function toggleComplete(i) {
    ToDoList[i].complete = !ToDoList[i].complete;
    update();
}
function setItemText(i, text) {
    ToDoList[i].itemText = text;
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
