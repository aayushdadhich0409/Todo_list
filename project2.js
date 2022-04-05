function getandupdate() {
    console.log("updating list ....");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonarray = [];
        itemJsonarray.push([tit, desc])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));
        console.log('if section');
    } else {
        itemJsonarrayStr = localStorage.getItem('itemsJson')
        itemJsonarray = JSON.parse(itemJsonarrayStr);
        itemJsonarray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray))
        console.log('else section');
    }
    update();
}

function update() {

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonarray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));
    } else {
        itemJsonarrayStr = localStorage.getItem('itemsJson')
        itemJsonarray = JSON.parse(itemJsonarrayStr);
    }
    // populate the table 
    let tablebody = document.getElementById("tablebody");
    let str = "";
    itemJsonarray.forEach((element, index) => {
        str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td>
        </tr>`;
    });
    console.log('task added');
    tablebody.innerHTML = str;

}
add = document.getElementById("add");
add.addEventListener("click", getandupdate);
update();

function deleted(itemindex) {
    console.log("Delete", itemindex + 1);
    itemJsonarrayStr = localStorage.getItem('itemsJson')
    itemJsonarray = JSON.parse(itemJsonarrayStr);
    // delete itemindex element from the array 
    itemJsonarray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));
    update();
}

function clearstorage() {
    if (confirm("do you really want to clear"));
    localStorage.clear();
    console.log("clearing");
    update();
}