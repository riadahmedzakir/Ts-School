/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

init();
function init() {
    document.getElementById("addStudentButton").addEventListener('click', addStudent);
    if (localStorage.getItem("studentID") === null) {
        localStorage.setItem("studentID", "0");
    }
    if (localStorage.getItem("savedStudent") != null) {
        var taskListed = JSON.parse(localStorage.savedStudent);
        taskListed.forEach(studentListDispaly);
    }
}
function studentListDispaly(studentInfo) {
    var newStudentRow = document.createElement("tr");
    var element = document.getElementById("studentsInfoTable");
    element.appendChild(newStudentRow);
    var newStudentNameCol = document.createElement("td");
    var newStudentIdCol = document.createElement("td");
    var newStudentMarkCol = document.createElement("td");
    //console.log(studentInfo[0]);
    var nodeName = document.createTextNode(studentInfo[1]);
    var nodeId = document.createTextNode(studentInfo[0]);
    var nodeMark = document.createTextNode(studentInfo[2]);
    newStudentRow.appendChild(newStudentNameCol);
    newStudentNameCol.appendChild(nodeName);
    newStudentRow.appendChild(newStudentIdCol);
    newStudentIdCol.appendChild(nodeId);
    newStudentRow.appendChild(newStudentMarkCol);
    newStudentMarkCol.appendChild(nodeMark);
}
function addStudent() {
    var newStudentName = document.getElementById("studentName").value;
    var studentMark = document.getElementById("studentMark").value;
    if (localStorage.getItem("savedStudent") === null) {
        var newStudent = [
            [parseInt(localStorage.studentID), newStudentName, studentMark]
        ];
        var myJSON = JSON.stringify(newStudent);
        localStorage.setItem("savedStudent", myJSON);
        var tempID = parseInt(localStorage.studentID);
        tempID++;
        localStorage.setItem("studentID", tempID.toString());
    }
    else {
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


/***/ })
/******/ ]);