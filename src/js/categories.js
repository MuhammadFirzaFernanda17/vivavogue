const categoriesContainer = document.getElementById("categories");

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const categoryImages = {
  electronics: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  jewelery: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  "men's clothing": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "women's clothing": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
};

function createCategoryCard(category) {
  const categoryCard = document.createElement("div");
  categoryCard.className = "category-card bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg mx-4 my-8";
  categoryCard.style.width = "250px";

  categoryCard.innerHTML = `
    <div class="relative">
      <div class="skeleton-loading w-full h-40 animate-pulse bg-gray-600"></div>
      <div class="absolute inset-0 flex items-center justify-center transition duration-300 transform hover:scale-110 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
        <div class="text-center">
          <h3 class="text-xl font-bold">${category}</h3>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    categoryCard.innerHTML = `
      <div class="relative">
        <img src="${categoryImages[category]}" alt="${category}" class="w-full h-40 object-cover transition duration-300 transform hover:scale-110 text-bold">
        <div class="absolute inset-0 flex items-center justify-center transition duration-300 transform hover:scale-110 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <div class="text-center">
            <h3 class="text-xl font-bold">${category}</h3>
          </div>
        </div>
      </div>
    `;
  }, 3000);

  return categoryCard;
}

categories.forEach((category) => {
  const categoryCard = createCategoryCard(category);
  categoriesContainer.appendChild(categoryCard);
});
