const searchButton = () =>{
    const input = document.getElementById("input-value");
    const inputText = input.value;

    input.value = '';
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data.meals))
}

const displayResult = searchs =>{
    const div = document.getElementById("search-result");
    div.textContent = '';
    searchs.forEach(search =>{
        const div2 = document.createElement("div");
        div2.classList.add("col");
        div2.innerHTML = `
        <div class="card">
            <img width="100px" src="${search.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${search.strMeal}</h5>
              <p class="card-text">${search.strInstructions.slice(0,250)}</p>
            </div>
          </div>
        `;
        
        div.appendChild(div2);
        
    })
}