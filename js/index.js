// categories section
function categories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res =>res.json())
    .then(data =>{
        displayCategories(data)
    })
}
// categories section callBack
function displayCategories(receives){
    const getArray = receives.categories
    const loadCategories = document.getElementById("load-categories");
    for(let array of getArray){
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <button onclick="showByCategory(${array.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${array.category}</button>
        `
        loadCategories.appendChild(newDiv)
    }

}
// video show by category
const showByCategory = (id) =>{
    const url = `
    https://openapi.programming-hero.com/api/phero-tube/category/${id}
    
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayVideo(data.category))
    
    
}

// video container section
function videoContainer(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res =>res.json())
    .then(data =>{
        displayVideo(data.videos)
    })
}
// videos section callback
const displayVideo = (videos) =>{
    const videoContain = document.getElementById("video-container")
    videoContain.innerHTML = "";
    videos.forEach(element => {
        const videoDiv = document.createElement("div")
        videoDiv.innerHTML = `         
        <div class="card">
                <figure class=" relative">
                  <img class=" w-full h-[200px] object-cover"
                    src="${element.thumbnail}"
                    alt="Shoes"/>
                    <span class=" absolute text-white bg-black text-xs p-1 rounded-md bottom-2 right-2">3hrs 56 min ago</span> 
                   
                </figure>
                <div class="pt-5 flex gap-3">
                  <div>
                    <div class="avatar">
                        <div class=" w-10  rounded-full">
                          <img class="" src="${element.authors[0].profile_picture}" />
                        </div>
                      </div>
                  </div>
                  <div class=" space-y-2">
                        <h2 class=" text-base font-bold">Building a Winning UX Strategy Using the Kano Model</h2>
                        <p class=" text-sm text-gray-500 flex gap-2">${element.authors[0].profile_name}<img class=" w-5 h-5" src="assets/icons8-verified-badge-48.png" alt=""></p>
                        <p class="text-sm text-gray-500">${element.others.views}</p>
                  </div>
                </div>
              </div>
        `
        videoContain.append(videoDiv)
    });
}

categories()
