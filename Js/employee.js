const showContainer = document.getElementById("container")
getUrl = new URLSearchParams(window.location.search)

id = getUrl.get("id")
console.log(id);

const url = `https://jsonplaceholder.typicode.com/users/${id}`

const getData = () =>{
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        document.write(data.name)
    })
}

getData();