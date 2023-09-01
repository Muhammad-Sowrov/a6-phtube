const handleCategory = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    const videosCategory = data.data;
    videosCategory.forEach((category) => {
        // console.log(category);
        const div = document.createElement("div");
        div.innerHTML = `
        <button onClick = "handleVideos('${category.category_id}')" class="btn"><a class="tab">${category.category}</a></button>
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
        <div class="card w-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src="${videos.thumbnail}" alt="product" class="rounded-lg w-96" />
            </figure>
            <div class="items-center flex gap-4">
              <img
                src="${videos.authors[0].profile_picture}"
                alt="product"
                class="rounded-full w-5"
              />
              <h2 class="">
                ${videos.title}
              </h2>
            </div>
            <div class="flex gap-4 items-center pl-10">
              <p>${videos.authors}</p>
              <i class="fa-solid fa-check text-blue-500"></i>
            </div>
            <p class="pl-10">Views: 77k</p>
          </div>
        `;
        videoContainer.appendChild(div);
    });
};


handleCategory();