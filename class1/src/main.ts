 init();

 function init() {
     document.getElementById("addStudentButton").addEventListener('click', addStudent);

     if (localStorage.getItem("studentID") === null) {
         localStorage.setItem("studentID", "0");
     }

     if (localStorage.getItem("savedTask") != null) {
         let taskListed = JSON.parse(localStorage.savedTask);
         taskListed.forEach(studentListDispaly);
     }
 }

 function studentListDispaly(task) {
     let newStudentRow = document.createElement("tr");
     document.getElementById.("studentsInfoTable").appendChild(newStudentRow);
     let newStudentNameCol = document.createElement("td");
     let newStudentIdCol = document.createElement("td");
     let newStudentMarkCol = document.createElement("td");
     let nodeName = document.createTextNode(task[0]);
     let nodeId = document.createTextNode(task[1]);
     let nodeMark = document.createTextNode(task[2]);
     newStudentRow.appendChild(newStudentNameCol);
     newStudentNameCol.appendChild(nodeName);
     newStudentRow.appendChild(newStudentIdCol);
     newStudentNameCol.appendChild(nodeId);
     newStudentRow.appendChild(newStudentMarkCol);
     newStudentNameCol.appendChild(nodeMark);
 }

 function addStudent() {
     let newStudent: String[][] = [
         ["Student 1", "1", "100"]
     ];
     let myJSON = JSON.stringify(newStudent);
     localStorage.setItem("savedTask", myJSON);
 }