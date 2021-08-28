const kaneyaText = () =>{
    fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(data => kaneyaDisplay(data))
}

const kaneyaDisplay = data =>{
    console.log(data);
    const text = document.getElementById("quote");
    text.innerText = data.quote;
}