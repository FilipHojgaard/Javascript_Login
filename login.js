function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  console.log("hej");
}

function getRequest(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      json = JSON.parse(xhr.responseText);
      document.getElementById("demo").innerHTML = json.city;
    }
  }
  xhr.open('GET', "https://ipinfo.io/json", true);
  xhr.send();
}




function createUser(){
  var username = document.forms["loginTerminal"]["username"].value;
  var password = document.forms["loginTerminal"]["password"].value;
  var jsonToSend = JSON.stringify({username: username, password: password});

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      response = JSON.parse(xhr.responseText);
      if (response.response == 1){
        document.getElementById("successStatus").innerHTML = "User created succesfully";
      }else{
        document.getElementById("successStatus").innerHTML = "Could not create user";
      }
    }
  }
  xhr.open('POST', "http://localhost:5000/CreateUser/", true);
  xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhr.send(jsonToSend);

  document.getElementById("successStatus").innerHTML = name;
}



function loginUser(){
  var username = document.forms["loginTerminal"]["username"].value;
  var password = document.forms["loginTerminal"]["password"].value;
  var jsonToSend = JSON.stringify({username: username, password: password});
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      response = JSON.parse(xhr.responseText);
      if (response.response == 1){
        document.getElementById("successStatus").innerHTML = "Logged in succesfully";
      }else{
        document.getElementById("successStatus").innerHTML = "Wrong username or password";
      }
    }
  }
  xhr.open('POST', "http://localhost:5000/Login/", true);
  xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhr.send(jsonToSend);

  document.getElementById("successStatus").innerHTML = name;
}


function deleteUser(){
  var username = document.forms["loginTerminal"]["username"].value;
  var jsonToSend = JSON.stringify({username: username});
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      response = JSON.parse(xhr.responseText);
      if (response.response == 1){
        document.getElementById("successStatus").innerHTML = "User deleted";
      }else{
        document.getElementById("successStatus").innerHTML = "Could not delete user";
      }
    }
  }
  xhr.open('POST', "http://localhost:5000/DeleteUser/", true);
  xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhr.send(jsonToSend);

  document.getElementById("successStatus").innerHTML = name;
}
