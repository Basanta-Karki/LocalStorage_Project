// let user =[
//     {
//         "name": "Basanta",
//         "email": "basanta12@gmail.com"
//     },
//     {
//         "name": "Dinesh",
//         "email": "dinesh00@gmail.com"
        
//     }
// ]


// localStorage.setItem("name", JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem("name")))

// let del = [10,20,30,40];
// del.splice(2,1)       //that delete the index 2 (start point) && 1 means it will delete the 1 data(delete entry)

let form = document.querySelector("form");
let main = document.querySelector(".main");

form.addEventListener("submit", (event)=>{

    let name = event.target.name.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let checkstatus = 0;

    // let check = localStorage.getItem("userDetails")

    // var userData = check ? JSON.parse(check):[];
 
    let userData= JSON.parse(localStorage.getItem("userDetails")) ?? [];

    for (let v of userData) {
        if (v.Email == email || v.Phone == phone) {
            checkstatus = 1;
            break; // Exit the loop once a duplicate is found
        }
    }// v stores the array data

    if (checkstatus ==1 ){
        alert ("Email or Phone Number alerady Exist")
    }
    else{
        userData.push({
            "Name":name,
            "Email":email,
            "Phone":phone
        })
    
        localStorage.setItem("userDetails", JSON.stringify(userData))
    
        event.target.removeEventListener()
    }

    displaydata();
    
    event.preventDefault(); // Just to cancel the event
    // target means that target the form.
    // event represent the submit event

    
})

let displaydata = () => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

    let finalData = '';
    userData.forEach((element, i) => {
        finalData += `
        <div class="items"> 
            <span onclick ='removedata(${i})'>&times;</span>
            <h2>Name</h2>
            <div>${element.Name}</div> 
            <h5>Email</h5>
            <div>${element.Email}</div>
            <h5>Phone</h5>
            <div>${element.Phone}</div>
        </div>`;

        console.log(element.Name);
    });

    main.innerHTML = finalData;

    
}

let removedata =(index)=>{

    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.splice(index, 1);

    localStorage.setItem("userDetails", JSON.stringify(userData)) // to update the data

    displaydata();

    
}

displaydata();
