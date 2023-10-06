//  var sendButton = document.getElementById("sendButton");
//  sendButton.setAttribute("onClick", "onPress()")
 
//  function getTodoData(data){
//         var parentElement = document.getElementById("mainArea");
//         parentElement.innerHTML = ""; // Clear existing todos before adding new ones
//         for(let i=0; i<data.length; i++){
//             var childElement = document.createElement("div");
//             childElement.id = "todo-" + data[i].id; // Unique ID for each todo

//             var grandChildElement1 = document.createElement("span");
//             grandChildElement1.innerHTML = data[i].title;

//             var grandChildElement2 = document.createElement("span");
//             grandChildElement2.innerHTML = data[i].description;

//             var grandChildElement3 = document.createElement("button");
//             grandChildElement3.innerHTML = "Delete";
//             grandChildElement3.setAttribute("onClick", "deleteTodo(" + data[i].id + ")");

//             childElement.appendChild(grandChildElement1);
//             childElement.appendChild(grandChildElement2);
//             childElement.appendChild(grandChildElement3);

//             parentElement.appendChild(childElement);
//         }
//     }

//     function callback2(resp){
//         resp.json().then(getTodoData);
//     }

//     function getData(){
//         fetch("http://localhost:3000/todos", {
//             method: "GET"
//         }).then(callback2);
//     }

//     getData();

//     function deleteDone(){
//         console.log("Delete Successful");
//     }

//     function deleteTodo(id) {
//         fetch("http://localhost:3000/todos/" + id, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(function () {
//             // After successfully deleting the todo, remove it from the DOM.
//             var todoElement = document.getElementById("todo-" + id);
//             if (todoElement) {
//                 todoElement.remove();
//             }
//         });
//     }

//     function parsedResponse(data){
//         console.log(data);
//         var parentElement = document.getElementById("mainArea");
//         var childElement = document.createElement("div");
//         childElement.id = "todo-" + data.id; // Unique ID for the new todo

//         var grandChildElement1 = document.createElement("span");
//         grandChildElement1.innerHTML = data.title;

//         var grandChildElement2 = document.createElement("span");
//         grandChildElement2.innerHTML = data.description;

//         var grandChildElement3 = document.createElement("button");
//         grandChildElement3.innerHTML = "Delete";
//         grandChildElement3.setAttribute("onClick", "deleteTodo(" + data.id + ")");

//         childElement.appendChild(grandChildElement1);
//         childElement.appendChild(grandChildElement2);
//         childElement.appendChild(grandChildElement3);

//         parentElement.appendChild(childElement);
//     }

//     function callback(resp){
//         resp.json().then(parsedResponse);
//     }

//     function onPress() {
//         var title = document.getElementById("title").value;
//         var description = document.getElementById("description").value;
//         fetch("http://localhost:3000/todos", {
//             method: "POST",
//             body: JSON.stringify({
//                 id: Math.floor(Math.random()*1000),
//                 title: title,
//                 description: description
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(callback);
//     }

var sendButton = document.getElementById("sendButton");
sendButton.setAttribute("onClick", "onPress()");

function getTodoData(data) {
  var parentElement = document.getElementById("mainArea");
  parentElement.innerHTML = ""; // Clear existing todos before adding new ones
  for (let i = 0; i < data.length; i++) {
    var childElement = document.createElement("div");
    childElement.id = "todo-" + data[i].id; // Unique ID for each todo

    var grandChildElement1 = document.createElement("span");
    grandChildElement1.innerHTML = data[i].title;

    var grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = data[i].description;

    var grandChildElement3 = document.createElement("button");
    grandChildElement3.innerHTML = "Delete";
    grandChildElement3.setAttribute("onClick", "deleteTodo(" + data[i].id + ")");

    childElement.appendChild(grandChildElement1);
    childElement.appendChild(grandChildElement2);
    childElement.appendChild(grandChildElement3);

    parentElement.appendChild(childElement);
  }
}

function callback2(resp) {
  resp.json().then(getTodoData);
}

function getData() {
  fetch("http://localhost:3000/todos", {
    method: "GET"
  }).then(callback2);
}

getData();

function deleteDone() {
  console.log("Delete Successful");
}

function deleteTodo(id) {
  fetch("http://localhost:3000/todos/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function () {
    // After successfully deleting the todo, remove it from the DOM.
    var todoElement = document.getElementById("todo-" + id);
    if (todoElement) {
      todoElement.remove();
    }
  });
}

function parsedResponse(data) {
  console.log(data);
  var parentElement = document.getElementById("mainArea");
  var childElement = document.createElement("div");
  childElement.id = "todo-" + data.id; // Unique ID for the new todo

  var grandChildElement1 = document.createElement("span");
  grandChildElement1.innerHTML = data.title;

  var grandChildElement2 = document.createElement("span");
  grandChildElement2.innerHTML = data.description;

  var grandChildElement3 = document.createElement("button");
  grandChildElement3.innerHTML = "Delete";
  grandChildElement3.setAttribute("onClick", "deleteTodo(" + data.id + ")");

  childElement.appendChild(grandChildElement1);
  childElement.appendChild(grandChildElement2);
  childElement.appendChild(grandChildElement3);

  parentElement.appendChild(childElement);
}

function callback(resp) {
  resp.json().then(parsedResponse);
}

function onPress() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify({
      id: Math.floor(Math.random() * 1000),
      title: title,
      description: description
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(callback);
}
