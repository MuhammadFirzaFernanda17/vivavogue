async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    const swiperWrapper = document.getElementById("swiper-wrapper");

    const productsLoop = [...products.slice(0, 5)];

    productsLoop.forEach((product, index) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.className = "swiper-slide";
      swiperSlide.innerHTML = `
        <div class="box bg-secondary p-4 m-4 rounded-lg shadow-lg max-w-xs">
          <div class="imgBx">
            <div class="skeleton-loading w-full h-64 animate-pulse bg-gray-600"></div>
          </div>
          <div class="content">
            <div class="skeleton-loading h-8 w-3/4 mb-2 animate-pulse bg-gray-600"></div>
            <div class="skeleton-loading h-4 w-1/2 mb-4 animate-pulse bg-gray-600"></div>
            <div class="skeleton-loading h-4 w-1/4 animate-pulse bg-gray-600"></div>
          </div>
        </div>
      `;
      swiperWrapper.appendChild(swiperSlide);

      setTimeout(() => {
        swiperSlide.innerHTML = `
          <div class="box bg-secondary p-4 m-4 rounded-lg shadow-lg max-w-xs">
            <div class="imgBx">
              <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-cover mb-4">
            </div>
            <div class="content">
              <h2 class="text-xl font-bold mb-2">${truncateString(product.title, 50)}</h2>
              <p class="mb-4">${truncateString(product.description, 156)}</p>
              <p class="text-lg font-semibold">$${product.price}</p>
            </div>
          </div>
        `;
      }, 1500);
    });

    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function truncateString(str, maxLen) {
  if (str.length > maxLen) {
    return str.slice(0, maxLen) + "...";
  }
  return str;
}

fetchProducts();
