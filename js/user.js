const loadUser = ()=>{
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => displayUser(data))
}
loadUser();
const displayUser = data =>{
    const users = data.results;
    const text = document.getElementById("users");
    for(const user of users){
        const p = document.createElement("p");
        p.innerHTML = ` Name: ${user.name.first} ${user.name.last} 
        email: ${user.email}
        `
        text.appendChild(p);
    }
}