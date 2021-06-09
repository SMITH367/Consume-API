const showContainer = document.getElementById("container");
getUrl = new URLSearchParams(window.location.search);

id = getUrl.get("id");

const url = `https://jsonplaceholder.typicode.com/users/${id}`;
console.log("Conection whith JSONPlaceholder API");

const getData = () =>{
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        showData(data);
        console.log("data",data);
        
    })
}
const showData = (employee) =>{

    let img = document.createElement("img");
    img.src = "../Sources/userimg.png";
    img.classList.add("img-cont");

    dataEmployeeCont = document.createDocumentFragment();
   
    nameEmployee = document.createElement("p");
    idEmployee = document.createElement("p");
    rol = document.createElement("p");
    phone = document.createElement("p");
    emailEmployee = document.createElement("p");
    userName = document.createElement("p");
    webSite = document.createElement("p");
    address = document.createElement("p");
    zipCode = document.createElement("p");
    idEmployee.innerHTML =  `ID empleado: ${employee.id}`;
    nameEmployee.innerHTML = `Nombre empleado: ${employee.name}`;
    rol.innerHTML = `Rol en la empresa: <br> ${employee.company.bs}`
    phone.innerHTML = `Telefono: ${employee.phone} `
    emailEmployee.innerHTML = `Email: ${employee.email}`;
    userName.innerHTML = `Usuario: ${employee.username}`;
    webSite.innerHTML = `Web: ${employee.website}`;
    address.innerHTML = `Ciudad: ${employee.address.city}`;
    zipCode.innerHTML = `Codigo postal: ${employee.address.zipcode}`
    dataEmployeeCont.appendChild(img)
    dataEmployeeCont.appendChild(idEmployee);
    dataEmployeeCont.appendChild(nameEmployee);
    dataEmployeeCont.appendChild(rol);
    dataEmployeeCont.appendChild(phone);
    dataEmployeeCont.appendChild(emailEmployee);
    dataEmployeeCont.appendChild(userName);
    dataEmployeeCont.appendChild(webSite);
    dataEmployeeCont.appendChild(address);
    dataEmployeeCont.appendChild(zipCode)
    
    showContainer.appendChild(dataEmployeeCont);

}

getData();