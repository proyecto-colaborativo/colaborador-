const pedirApi=()=>{
    fetch("./api")
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
}

//se ejecuta cuando recargas la pajina
window.onload= pedirApi
    



