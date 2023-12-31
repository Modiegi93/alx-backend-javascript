/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var studentsList = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 21,
        location: "New York",
    },
    {
        firstName: "Mathapelo",
        lastName: "Mphahlele",
        age: 29,
        location: "Johannesburg",
    },
];
var table = document.createElement("table");
var tbody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBT0UsSUFBTSxZQUFZLEdBQWM7SUFDOUI7UUFDRSxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsS0FBSztRQUNmLEdBQUcsRUFBRSxFQUFFO1FBQ1AsUUFBUSxFQUFFLFVBQVU7S0FDckI7SUFDRDtRQUNFLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLEdBQUcsRUFBRSxFQUFFO1FBQ1AsUUFBUSxFQUFFLGNBQWM7S0FDekI7Q0FDRixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTlDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO0lBQzNCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFFOUMsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxZQUFZLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFFNUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTlCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICB9XG5cbiAgY29uc3Qgc3R1ZGVudHNMaXN0OiBTdHVkZW50W10gPSBbXG4gICAge1xuICAgICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgICAgIGxhc3ROYW1lOiBcIkRvZVwiLFxuICAgICAgYWdlOiAyMSxcbiAgICAgIGxvY2F0aW9uOiBcIk5ldyBZb3JrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaXJzdE5hbWU6IFwiTWF0aGFwZWxvXCIsXG4gICAgICBsYXN0TmFtZTogXCJNcGhhaGxlbGVcIixcbiAgICAgIGFnZTogMjksXG4gICAgICBsb2NhdGlvbjogXCJKb2hhbm5lc2J1cmdcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcblxuICBzdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgIGNvbnN0IGZpcnN0TmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgZmlyc3ROYW1lQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuXG4gICAgY29uc3QgbG9jYXRpb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGxvY2F0aW9uQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG5cbiAgICByb3cuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lQ2VsbCk7XG4gICAgcm93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbCk7XG5cbiAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9