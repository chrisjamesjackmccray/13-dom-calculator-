(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

document.querySelector("#addnumbers").addEventListener("click", function (e) {
  var leftbox = document.querySelector("#numberOne").value;
  var rightbox = document.querySelector("#numberTwo").value;
  var total = Number(leftbox) + Number(rightbox);
  document.querySelector("#answer").innerHTML = total;

  // Function (numberOne, numberTwo) {
  //   return numberOne + numberTwo;
  // }
});

document.querySelector("#subtractnumbers").addEventListener("click", function (e) {
  var leftbox = document.querySelector("#numberOne").value;
  var rightbox = document.querySelector("#numberTwo").value;
  var total = Number(leftbox) - Number(rightbox);
  document.querySelector("#answer").innerHTML = total;
});

document.querySelector("#dividenumbers").addEventListener("click", function (e) {
  var leftbox = document.querySelector("#numberOne").value;
  var rightbox = document.querySelector("#numberTwo").value;
  var total = Number(leftbox) / Number(rightbox);
  document.querySelector("#answer").innerHTML = total;
});

document.querySelector("#multiplynumbers").addEventListener("click", function (e) {
  var leftbox = document.querySelector("#numberOne").value;
  var rightbox = document.querySelector("#numberTwo").value;
  var total = Number(leftbox) * Number(rightbox);
  document.querySelector("#answer").innerHTML = total;
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUNHLGFBREgsQ0FDaUIsYUFEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixVQUFTLENBQVQsRUFBVztBQUNwQyxNQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQXJDLENBRHNCO0FBRXBDLE1BQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FGcUI7QUFHcEMsTUFBSSxRQUFRLE9BQU8sT0FBUCxJQUFrQixPQUFPLFFBQVAsQ0FBbEIsQ0FId0I7QUFJcEMsV0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEdBQThDLEtBQTlDOzs7OztBQUpvQyxDQUFYLENBRjdCOztBQWNBLFNBQ0csYUFESCxDQUNpQixrQkFEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixVQUFTLENBQVQsRUFBVztBQUNwQyxNQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQXJDLENBRHNCO0FBRXBDLE1BQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FGcUI7QUFHcEMsTUFBSSxRQUFRLE9BQU8sT0FBUCxJQUFrQixPQUFPLFFBQVAsQ0FBbEIsQ0FId0I7QUFJcEMsV0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEdBQThDLEtBQTlDLENBSm9DO0NBQVgsQ0FGN0I7O0FBVUUsU0FDRyxhQURILENBQ2lCLGdCQURqQixFQUVHLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCLFVBQVMsQ0FBVCxFQUFXO0FBQ3BDLE1BQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FEc0I7QUFFcEMsTUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQyxDQUZxQjtBQUdwQyxNQUFJLFFBQVEsT0FBTyxPQUFQLElBQWtCLE9BQU8sUUFBUCxDQUFsQixDQUh3QjtBQUlwQyxXQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsS0FBOUMsQ0FKb0M7Q0FBWCxDQUY3Qjs7QUFVRSxTQUNHLGFBREgsQ0FDaUIsa0JBRGpCLEVBRUcsZ0JBRkgsQ0FFb0IsT0FGcEIsRUFFNkIsVUFBUyxDQUFULEVBQVc7QUFDcEMsTUFBSSxVQUFVLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQyxDQURzQjtBQUVwQyxNQUFJLFdBQVcsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQXJDLENBRnFCO0FBR3BDLE1BQUksUUFBUSxPQUFPLE9BQVAsSUFBa0IsT0FBTyxRQUFQLENBQWxCLENBSHdCO0FBSXBDLFdBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxHQUE4QyxLQUE5QyxDQUpvQztDQUFYLENBRjdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI2FkZG51bWJlcnNcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICB2YXIgbGVmdGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyT25lXCIpLnZhbHVlO1xuICAgIHZhciByaWdodGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyVHdvXCIpLnZhbHVlO1xuICAgIHZhciB0b3RhbCA9IE51bWJlcihsZWZ0Ym94KSArIE51bWJlcihyaWdodGJveCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbnN3ZXJcIikuaW5uZXJIVE1MID0gdG90YWw7XG5cblxuICAgIC8vIEZ1bmN0aW9uIChudW1iZXJPbmUsIG51bWJlclR3bykge1xuICAgIC8vICAgcmV0dXJuIG51bWJlck9uZSArIG51bWJlclR3bztcbiAgICAvLyB9XG4gIH0pO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNzdWJ0cmFjdG51bWJlcnNcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICB2YXIgbGVmdGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyT25lXCIpLnZhbHVlO1xuICAgIHZhciByaWdodGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyVHdvXCIpLnZhbHVlO1xuICAgIHZhciB0b3RhbCA9IE51bWJlcihsZWZ0Ym94KSAtIE51bWJlcihyaWdodGJveCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbnN3ZXJcIikuaW5uZXJIVE1MID0gdG90YWw7XG5cbiAgfSk7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNkaXZpZGVudW1iZXJzXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgIHZhciBsZWZ0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJPbmVcIikudmFsdWU7XG4gICAgICB2YXIgcmlnaHRib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlclR3b1wiKS52YWx1ZTtcbiAgICAgIHZhciB0b3RhbCA9IE51bWJlcihsZWZ0Ym94KSAvIE51bWJlcihyaWdodGJveCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fuc3dlclwiKS5pbm5lckhUTUwgPSB0b3RhbDtcblxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI211bHRpcGx5bnVtYmVyc1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGxlZnRib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlck9uZVwiKS52YWx1ZTtcbiAgICAgICAgdmFyIHJpZ2h0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJUd29cIikudmFsdWU7XG4gICAgICAgIHZhciB0b3RhbCA9IE51bWJlcihsZWZ0Ym94KSAqIE51bWJlcihyaWdodGJveCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5zd2VyXCIpLmlubmVySFRNTCA9IHRvdGFsO1xuXG4gICAgICB9KTtcbiJdfQ==
