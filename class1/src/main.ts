 init();

 function init() {
     document.getElementById("addStudentButton").addEventListener('click', addStudent);

     if (localStorage.getItem("studentID") === null) {
         localStorage.setItem("studentID", "0");
     }

     if (localStorage.getItem("savedStudent") != null) {
         let taskListed = JSON.parse(localStorage.savedStudent);
         taskListed.forEach(studentListDispaly);
     }
 }

 function studentListDispaly(studentInfo:any) {
     let newStudentRow = document.createElement("tr");
     let element = document.getElementById("studentsInfoTable");
     element.appendChild(newStudentRow);
     let newStudentNameCol = document.createElement("td");
     let newStudentIdCol = document.createElement("td");
     let newStudentMarkCol = document.createElement("td");
     //console.log(studentInfo[0]);
     let nodeName = document.createTextNode(studentInfo[1]);
     let nodeId = document.createTextNode(studentInfo[0]);
     let nodeMark = document.createTextNode(studentInfo[2]);
     newStudentRow.appendChild(newStudentNameCol);
     newStudentNameCol.appendChild(nodeName);
     newStudentRow.appendChild(newStudentIdCol);
     newStudentIdCol.appendChild(nodeId);
     newStudentRow.appendChild(newStudentMarkCol);
     newStudentMarkCol.appendChild(nodeMark);    
 }

 function addStudent() {
     let newStudentName: string = (< HTMLInputElement >document.getElementById("studentName")).value;
     let studentMark: string = (< HTMLInputElement > document.getElementById("studentMark")).value;

     if (localStorage.getItem("savedStudent") === null) {
         var newStudent = [
             [parseInt(localStorage.studentID), newStudentName, studentMark]
         ];
         var myJSON = JSON.stringify(newStudent);
         localStorage.setItem("savedStudent", myJSON);
         var tempID = parseInt(localStorage.studentID);
         tempID++;
         localStorage.setItem("studentID", tempID.toString());
     } else {
         var tempID = parseInt(localStorage.studentID);
         var oldTask = JSON.parse(localStorage.savedStudent);
         oldTask.push([tempID, newStudentName, studentMark]);
         var myJSON = JSON.stringify(oldTask);
         localStorage.setItem("savedStudent", myJSON);
         tempID++;
         localStorage.setItem("studentID", tempID.toString());
     }
     location.reload();
 }