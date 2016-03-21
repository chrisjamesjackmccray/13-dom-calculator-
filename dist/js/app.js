(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var a, b, result;
function setValues() {
  a = Number(document.getElementByID("numberOne").value);
  b = Number(document.getElementByID("numberTwo").value);
}

function addNumbers() {
  setValues();
  result = number1 + number2;
  alert("The Sum is equal to" + result);
}

function subtractnumbers() {
  setValues();
  result = number1 - number2;
  alert("The rest is equal to" + result);
}

function dividenumbers() {
  setValues();
  result = number1 / number2;
  alert("The operation is equal to" + result);
}

function multiplynumbers() {
  setValues();
  result = number1 * number2;
  alert("The operation is equal to" + result);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFJLENBQUosRUFBTSxDQUFOLEVBQVMsTUFBVDtBQUNBLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixNQUFJLE9BQU8sU0FBUyxjQUFULENBQXdCLFdBQXhCLEVBQXFDLEtBQXJDLENBQVgsQ0FEbUI7QUFFbkIsTUFBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxLQUFyQyxDQUFYLENBRm1CO0NBQXJCOztBQUtBLFNBQVMsVUFBVCxHQUFzQjtBQUNwQixjQURvQjtBQUVwQixXQUFTLFVBQVUsT0FBVixDQUZXO0FBR3BCLFFBQU0sd0JBQXVCLE1BQXZCLENBQU4sQ0FIb0I7Q0FBdEI7O0FBTUEsU0FBUyxlQUFULEdBQTJCO0FBQ3pCLGNBRHlCO0FBRXpCLFdBQVMsVUFBVSxPQUFWLENBRmdCO0FBR3pCLFFBQU0seUJBQXdCLE1BQXhCLENBQU4sQ0FIeUI7Q0FBM0I7O0FBTUEsU0FBUyxhQUFULEdBQXlCO0FBQ3ZCLGNBRHVCO0FBRXZCLFdBQVMsVUFBVSxPQUFWLENBRmM7QUFHdkIsUUFBTSw4QkFBNkIsTUFBN0IsQ0FBTixDQUh1QjtDQUF6Qjs7QUFNQSxTQUFTLGVBQVQsR0FBMkI7QUFDekIsY0FEeUI7QUFFekIsV0FBUyxVQUFVLE9BQVYsQ0FGZ0I7QUFHekIsUUFBTSw4QkFBNkIsTUFBN0IsQ0FBTixDQUh5QjtDQUEzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnZhciBhLGIsIHJlc3VsdDtcbmZ1bmN0aW9uIHNldFZhbHVlcygpIHtcbiAgYSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJRChcIm51bWJlck9uZVwiKS52YWx1ZSk7XG4gIGIgPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SUQoXCJudW1iZXJUd29cIikudmFsdWUpO1xufVxuXG5mdW5jdGlvbiBhZGROdW1iZXJzKCkge1xuICBzZXRWYWx1ZXMoKTtcbiAgcmVzdWx0ID0gbnVtYmVyMSArIG51bWJlcjI7XG4gIGFsZXJ0KFwiVGhlIFN1bSBpcyBlcXVhbCB0b1wiICtyZXN1bHQpXG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0bnVtYmVycygpIHtcbiAgc2V0VmFsdWVzKCk7XG4gIHJlc3VsdCA9IG51bWJlcjEgLSBudW1iZXIyO1xuICBhbGVydChcIlRoZSByZXN0IGlzIGVxdWFsIHRvXCIgK3Jlc3VsdClcbn1cblxuZnVuY3Rpb24gZGl2aWRlbnVtYmVycygpIHtcbiAgc2V0VmFsdWVzKCk7XG4gIHJlc3VsdCA9IG51bWJlcjEgLyBudW1iZXIyO1xuICBhbGVydChcIlRoZSBvcGVyYXRpb24gaXMgZXF1YWwgdG9cIiArcmVzdWx0KVxufVxuXG5mdW5jdGlvbiBtdWx0aXBseW51bWJlcnMoKSB7XG4gIHNldFZhbHVlcygpO1xuICByZXN1bHQgPSBudW1iZXIxICogbnVtYmVyMjtcbiAgYWxlcnQoXCJUaGUgb3BlcmF0aW9uIGlzIGVxdWFsIHRvXCIgK3Jlc3VsdClcbn1cbiJdfQ==
