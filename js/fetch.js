// ----------------- REGISTER DATA --------------------//
function createUsers(){
    const inputs = document.getElementsByTagName("input");
  
    fetch("https://webappgov.herokuapp.com/add-user/",{
        method: 'POST',
        body: JSON.stringify({
            id: inputs[3].value,
            name: inputs[4].value,
            surname: inputs[5].value,
            email: inputs[6].value,
            password: inputs[7].value,
            confirm: inputs[8].value,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => {
      alert("User has been created");
      document.getElementById("reg-form").reset();
      window.location.href="./index.html";
    });
}


  // --------------- END ----------------//

// -------------- LOGIN DATA ----------- //
let Users = [];

fetch("https://webappgov.herokuapp.com//show-users/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    Users = data;
});

function login(){
    let inputs = document.getElementsByTagName("input");
    
    let id_no = inputs[0].value;
    let name = inputs[1].value;
    let pswd = inputs[2].value;

    let log = Users.filter(users => {
        return users.id == id_no && users.name == name && users.password == pswd ?true : false;
    })

    console.log(log);

    if (log.length > 0) {
        alert(name + " have successfully logged in");
        window.location.href = "vote.html";
    }else{
        alert("Please enter a valid username and password");
    }
}
// --------------- END ----------------//
// ------------- LOG-OUT ---------------//

function sign_out() {
    alert("You have successfully Logged Out");
    window.location.href = "index.html";
  }




// -------------- END ------------------- //
// id_no, name and Password from the register-form into localstorage
let idNo = document.getElementById('idno1');
let nm = document.getElementById('name1');
let psw = document.getElementById('psw1');

function store() {
    localStorage.setItem(JSON.stringify('idno1', idNO.value));
    localStorage.setItem(JSON.stringify('name1', nm.value));
    localStorage.setItem(JSON.stringify('psw1', psw.value));
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    let storedID = localStorage.getItem('id_no1');
    let storedName = localStorage.getItem('name1');
    let storedPw = localStorage.getItem('psw1');

    // entered data from the login-form
    let userID = document.getElementById('id_no');
    let userName = document.getElementById('name');
    var userPw = document.getElementById('psw');

    // check if stored data from register-form is equal to data from login form
    if(userID.value == storedID && userName == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}

let useridNum = document.getElementById('id_no').value
localStorage.setItem("currentloggedin", JSON.stringify(userID));
