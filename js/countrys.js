const loadCountries = () =>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries =>{
    const text = document.getElementById("show-counrries");
   
    countries.forEach(countrie =>{
        const div = document.createElement("div");
        div.classList.add("country")
        div.innerHTML = ` 
        <h3>${countrie.name}</h3>
        <p>${countrie.capital}</p>
        <div>
        <img width="100" src="${countrie.flag}" alt="">
        </div>
        <br>
        <button onclick="countrieDetailes('${countrie.name}')">Detailes</button>
        `;
        text.appendChild(div);
        // const h3 = document.createElement("h3");
        // h3.innerText = countrie.name;
        // div.appendChild(h3);
        // const p = document.createElement("p");
        // p.innerText = countrie.capital;
        // div.appendChild(p);
        // const div2 = document.createElement("div");
        // div2.innerHTML = ` `;
        // div.appendChild(div2);

    })
}

const countrieDetailes = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetailes(data[0]))
}

const displayCountriesDetailes = Country =>{
    console.log(Country)
    
}