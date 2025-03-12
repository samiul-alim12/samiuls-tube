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
    const getBtn = document.getElementById(`btn-${receives}`)

    for(let array of getArray){
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <button id="btn-${array.category_id}" onclick="showByCategory(${array.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${array.category}</button>
        `
        loadCategories.appendChild(newDiv)
        
    }

}
// function for remove active class
function removeActive(){
    const removeClass = document.getElementsByClassName("active")
    for(let remove of removeClass){
        remove.classList.remove('active')
    }
}
// video show by category
const showByCategory = (id) =>{
    const url = `
    https://openapi.programming-hero.com/api/phero-tube/category/${id}
    
    `
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        displayVideo(data.category)
        removeActive()
        const getBtn = document.getElementById(`btn-${id}`)
        getBtn.classList.add("active")
    })
   
    
}

// video container section
function videoContainer(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res =>res.json())
    .then(data =>{
        removeActive()
        document.getElementById("default-button").classList.add("active")
        displayVideo(data.videos)
    })
}
// videos section callback
const displayVideo = (videos) =>{
    const videoContain = document.getElementById("video-container")
    videoContain.innerHTML = "";
    if(videos.length === 0){
        `
        <div class=" flex flex-col justify-center items-center mt-28 text-center">
            <img src="assets/Icon.png" alt="">
            <p class="pt-4 font-bold text-2xl">Oops!! Sorry, There is no <br> content here</p>
        </div>
        `
    }
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
                <button onclick="showDetails('${element.video_id}')" class="btn btn-block">Show Details</button>
              </div>
        `
        videoContain.append(videoDiv)
    });
}

// function for show details
function showDetails(id){
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayVideoDetails(data.video)
    })
}
const displayVideoDetails = (receiveData) =>{
    console.log(receiveData)
        document.getElementById("my_modal").showModal()
        const modalContainer = document.getElementById("modalContainer")
        modalContainer.innerHTML =`
            
    <div class="card bg-base-100 image-full shadow-sm">
     <figure>
        <img
        src="${receiveData.thumbnail}"
        alt="Shoes" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">${receiveData.title}</h2>
        <p>${receiveData.description}</p>
    </div>
    </div>
        
    
    `
}


categories()
