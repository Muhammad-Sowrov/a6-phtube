const handleCategory = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    const videosCategory = data.data;
    
    videosCategory.forEach((category) => {
        // console.log(category);
        const div = document.createElement("div");
        div.innerHTML = `
        <button onClick = "handleVideos('${category.category_id}')" class="btn btn-ghost"><a class="tab">${category.category}</a></button>
        `;
        

        tabContainer.appendChild(div);

    });
    // console.log(data.data);
};
const handleVideos = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const videoContainer = document.getElementById('video-container')
    const videoList = data.data;
    videoList.forEach((videos) => {
        console.log(videos);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card w-full bg-base-100 shadow-xl font-inter">
            <figure class="px-10 pt-10">
              <img src="${videos?.thumbnail}" alt="product" class="rounded-lg w-full h-24" />
            </figure>
            <div class="items-center flex gap-4">
              <img
                src="${videos?.authors[0]?.profile_picture}"
                alt="product"
                class="rounded-full w-5"
              />
              <h2 class="text-base font-bold">
                ${videos?.title}
              </h2>
            </div>
            <div class="flex gap-4 items-center pl-10">
              <p class="text-sm font-normal">${videos?.authors[0]?.profile_name}</p>


              <i>${videos?.authors[0]?.verified}</p>


            </div>
            <p class="pl-10 text-sm font-normal">${videos?.others?.views} views</p>
          </div>
        `;
        videoContainer.appendChild(div);
    });
};




const blog = document.getElementById('handleBlog');
const handleBlog = () =>{
  window.open("blog.html", "_blank");
}



handleCategory();