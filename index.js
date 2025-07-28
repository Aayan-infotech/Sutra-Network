$(document).ready(function () {
  // Toggle search bar when search icon is clicked
  $(".search-icon").on("click", function (e) {
    e.stopPropagation(); // Prevent event from bubbling up
    $(".search-bar").toggle();
    $(".search-input").focus(); // Focus the input field when shown
  });

  // Hide search bar when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".search-container").length) {
      $(".search-bar").hide();
    }
  });
  $(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });
  $(document).ready(function () {
    var swiper = new Swiper(".swiper-topnavnews", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  // Prevent form submission from hiding the search bar
  $(".search-form").on("submit", function (e) {
    e.preventDefault();
    const searchTerm = $(".search-input").val().trim();

    if (searchTerm) {
      // Here you would typically make an AJAX call or redirect to search results
      alert("Searching for: " + searchTerm);
      // Example: window.location.href = '/search?q=' + encodeURIComponent(searchTerm);
    }
  });

  // Close search bar when pressing Escape key
  $(document).on("keyup", function (e) {
    if (e.key === "Escape") {
      $(".search-bar").hide();
    }
  });
});
