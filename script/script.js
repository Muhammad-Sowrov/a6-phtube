const handleCategory = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    data.data.forEach((category) => {
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
    const data = response.json();
    console.log(data);
}


handleCategory();