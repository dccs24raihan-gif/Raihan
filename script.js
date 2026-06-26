function addAssignment(){

    var assignment=document.getElementById("assignment").value;
    var duedate=document.getElementById("duedate").value;

    if(assignment=="" || duedate==""){
        alert("Please enter all details");
        return;
    }

    var table=document.getElementById("tableBody");

    var row=table.insertRow();

    row.insertCell(0).innerHTML=assignment;
    row.insertCell(1).innerHTML=duedate;
    row.insertCell(2).innerHTML="Pending";

    var action=row.insertCell(3);

    var btn=document.createElement("button");
    btn.innerHTML="Submit";

    btn.onclick=function(){
        row.cells[2].innerHTML="Submitted";
        row.cells[2].style.color="green";
        row.cells[2].style.fontWeight="bold";
    };

    action.appendChild(btn);

    document.getElementById("assignment").value="";
    document.getElementById("duedate").value="";
}