/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
function sumMajorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "MajorCredits" };
}
function sumMinorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "MinorCredits" };
}
var majorSubject1 = { credits: 3, brand: "MajorCredits" };
var majorSubject2 = { credits: 4, brand: "MajorCredits" };
var minorSubject1 = { credits: 2, brand: "MinorCredits" };
var minorSubject2 = { credits: 1, brand: "MinorCredits" };
var totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Total Major Credits:", totalMajorCredits);
var totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Total Minor Credits:", totalMinorCredits);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0lPLFNBQVMsZUFBZSxDQUFDLFFBQXNCLEVBQUUsUUFBc0I7SUFDNUUsSUFBTSxZQUFZLEdBQVcsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRU0sU0FBUyxlQUFlLENBQUMsUUFBc0IsRUFBRSxRQUFzQjtJQUM1RSxJQUFNLFlBQVksR0FBVyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFDO0FBQzFELENBQUM7QUFFRCxJQUFNLGFBQWEsR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUMxRSxJQUFNLGFBQWEsR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUMxRSxJQUFNLGFBQWEsR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUMxRSxJQUFNLGFBQWEsR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUUxRSxJQUFNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBRXZELElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBpbnRlcmZhY2UgTWFqb3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICBicmFuZDogXCJNYWpvckNyZWRpdHNcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNaW5vckNyZWRpdHMge1xuICBjcmVkaXRzOiBudW1iZXI7XG4gIGJyYW5kOiBcIk1pbm9yQ3JlZGl0c1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtTWFqb3JDcmVkaXRzKHN1YmplY3QxOiBNYWpvckNyZWRpdHMsIHN1YmplY3QyOiBNYWpvckNyZWRpdHMpOiBNYWpvckNyZWRpdHMge1xuICBjb25zdCB0b3RhbENyZWRpdHM6IG51bWJlciA9IHN1YmplY3QxLmNyZWRpdHMgKyBzdWJqZWN0Mi5jcmVkaXRzO1xuICByZXR1cm4geyBjcmVkaXRzOiB0b3RhbENyZWRpdHMsIGJyYW5kOiBcIk1ham9yQ3JlZGl0c1wifTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bU1pbm9yQ3JlZGl0cyhzdWJqZWN0MTogTWlub3JDcmVkaXRzLCBzdWJqZWN0MjogTWlub3JDcmVkaXRzKTogTWlub3JDcmVkaXRzIHtcbiAgY29uc3QgdG90YWxDcmVkaXRzOiBudW1iZXIgPSBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cztcbiAgcmV0dXJuIHsgY3JlZGl0czogdG90YWxDcmVkaXRzLCBicmFuZDogXCJNaW5vckNyZWRpdHNcIiB9O1xufVxuXG5jb25zdCBtYWpvclN1YmplY3QxOiBNYWpvckNyZWRpdHMgPSB7IGNyZWRpdHM6IDMsIGJyYW5kOiBcIk1ham9yQ3JlZGl0c1wiIH07XG5jb25zdCBtYWpvclN1YmplY3QyOiBNYWpvckNyZWRpdHMgPSB7IGNyZWRpdHM6IDQsIGJyYW5kOiBcIk1ham9yQ3JlZGl0c1wiIH07XG5jb25zdCBtaW5vclN1YmplY3QxOiBNaW5vckNyZWRpdHMgPSB7IGNyZWRpdHM6IDIsIGJyYW5kOiBcIk1pbm9yQ3JlZGl0c1wiIH07XG5jb25zdCBtaW5vclN1YmplY3QyOiBNaW5vckNyZWRpdHMgPSB7IGNyZWRpdHM6IDEsIGJyYW5kOiBcIk1pbm9yQ3JlZGl0c1wiIH07XG5cbmNvbnN0IHRvdGFsTWFqb3JDcmVkaXRzID0gc3VtTWFqb3JDcmVkaXRzKG1ham9yU3ViamVjdDEsIG1ham9yU3ViamVjdDIpO1xuY29uc29sZS5sb2coXCJUb3RhbCBNYWpvciBDcmVkaXRzOlwiLCB0b3RhbE1ham9yQ3JlZGl0cyk7XG5cbmNvbnN0IHRvdGFsTWlub3JDcmVkaXRzID0gc3VtTWlub3JDcmVkaXRzKG1pbm9yU3ViamVjdDEsIG1pbm9yU3ViamVjdDIpO1xuY29uc29sZS5sb2coXCJUb3RhbCBNaW5vciBDcmVkaXRzOlwiLCB0b3RhbE1pbm9yQ3JlZGl0cyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=