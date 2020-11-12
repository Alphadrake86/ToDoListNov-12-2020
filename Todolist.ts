class ToDoItem{
    itemText:string;
    complete:boolean
}

let ToDoList:Array<ToDoItem>;

function save():void{
    document.cookie = "list="+JSON.stringify(ToDoList);
}

function load():void{
    ToDoList = JSON.parse(getCookie("list"));
    update();
}

function update():void{
    document.getElementById("table").innerHTML = "";
    ToDoList.forEach((item, index) => {
        addItemToTable(item, index)
    })
}

function addItemToTable(item:ToDoItem, index:number){
    var row = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")

    td1.className = "tg-" + index%2 + (item.complete? " done": "")
    td1.onclick = () => toggleComplete(index)
    td1.innerText = item.itemText

    td2.className = "tg-" + index%2 + " delete"
    td2.onclick = () => deleteItem(index)
    td2.innerText = "X"

    row.appendChild(td1)
    row.appendChild(td2)

    var table = document.getElementById("table")
    table.appendChild(row)

    
}

function deleteItem(index:number){
    ToDoList = ToDoList.filter((_item, i)=>{i!=index})
    update();
}

function newItem(){
    var input = <HTMLInputElement>document.getElementById("add")

    let tdi:ToDoItem = new ToDoItem();
    tdi.complete = false;
    tdi.itemText = input.value

    
    ToDoList.push(tdi)
    update();
}

function toggleComplete(i:number){
    ToDoList[i].complete = !ToDoList[i].complete
    update();
}

function getCookie(cname: string) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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