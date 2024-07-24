let btn = document.querySelector("button") ;

btn.addEventListener("click", function(){
    let h2 = document.querySelector("h2") ;
    let code = colorCode() ;
    h2.innerText = code ;

    let div = document.querySelector("div") ;
    div.style.backgroundColor = code ;
});

function colorCode()
{
    let red = Math.floor(Math.random() * 255) ;
    let green = Math.floor(Math.random() * 255) ;
    let blue = Math.floor(Math.random() * 255) ;

    return `rgb(${red}, ${green}, ${blue})` ;
}