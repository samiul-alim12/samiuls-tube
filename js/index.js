function categories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res =>res.json())
    .then(data =>{
        display(data)
    })
}

function display(receives){
    const getArray = receives.categories
    const loadCategories = document.getElementById("load-categories");
    for(let array of getArray){
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${array.category}</button>
        `
        loadCategories.appendChild(newDiv)
    }

}

categories()