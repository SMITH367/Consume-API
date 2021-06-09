
const showContainer = document.getElementById("container")


const showData = (employees) => {

    employees.forEach(number => {
            let employeesContainer = document.createDocumentFragment();
            let img = document.createElement("img")
            img.src="../Sources/userimg.png"
            img.classList.add("img-cont")
            let employeCont = document.createElement("div")
            let showEmployee = document.createElement("p")
            let aboutEmployee = document.createElement("a")
            aboutEmployee.classList.add("about-employee")
            showEmployee.classList.add("name-employee")
            aboutEmployee.innerHTML = "Ver empleado"
            aboutEmployee.setAttribute("id",number.id)
            console.log(aboutEmployee)
            aboutEmployee.addEventListener("click",()=>{
                window.location.href=`../employees/employee.html?id=${number.id}`
            })
            showEmployee.innerText = `${number.name}`
            employeCont.appendChild(img)
            employeCont.appendChild(showEmployee)
            employeCont.appendChild(aboutEmployee)
            employeesContainer.appendChild(employeCont)
            showContainer.appendChild(employeesContainer)
            // let Employee = document.createElement("div")
            // Employee.href="google.com";
            // Employee.innerText = `${number.name}`
            // NumberEmployee.appendChild(Employee)
            // showContainer.appendChild(NumberEmployee)
        });
       


}

export{
    showData
}