const showContainer = document.getElementById("container");


const showData = (employees) => {

    employees.forEach(number => {

        let employeesContainer = document.createDocumentFragment();

        let img = document.createElement("img");
        let employeCont = document.createElement("div");
        let showEmployee = document.createElement("p");
        let aboutEmployee = document.createElement("a");

        img.src = "Sources/userimg.png";
        img.classList.add("img-cont");

        aboutEmployee.classList.add("about-employee");
        showEmployee.classList.add("name-employee");

        aboutEmployee.innerHTML = "Ver empleado";
        aboutEmployee.setAttribute("id", number.id);
        showEmployee.innerText = `${number.name}`;

        aboutEmployee.addEventListener("click",()=>{
            window.location.href=`https://smith367.github.io/employees/employee.html?id=${number.id}`;
        })

        employeCont.appendChild(img);
        employeCont.appendChild(showEmployee);
        employeCont.appendChild(aboutEmployee);
        employeesContainer.appendChild(employeCont);
        showContainer.appendChild(employeesContainer);

    });

}

export {
    showData
}