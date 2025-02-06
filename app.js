

fetch("https://icanhazdadjoke.com", {       //Object
    headers: {                              //Object
        "Accept": "application/json"
    }
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})




