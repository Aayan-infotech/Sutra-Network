$(document).ready(function () {
  // Toggle search bar when search icon is clicked
  $(".search-icon").on("click", function (e) {
    e.stopPropagation(); // Prevent event from bubbling up
    $(".search-bar").toggle();
    $(".search-input").focus(); // Focus the input field when shown
  });

  // Hide search bar when clicking outside
  // $(document).on("click", function (e) {
  //   if (!$(e.target).closest(".search-container").length) {
  //     $(".search-bar").hide();
  //   }
  // });
  $(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: false,
          },
        },
      },
    });
  });
  $(document).ready(function () {
    var swiper = new Swiper(".swiper-topnavnews", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  $(document).ready(function () {
    let headerHeight = $(".header-area").outerHeight();
    let lastScroll = 0;

    $(window).scroll(function () {
      let currentScroll = $(this).scrollTop();

      // Add sticky header when scrolling down past header height
      if (currentScroll > headerHeight) {
        $(".mega-menu").addClass("sticky-header");
        $(".mega-menu-mobile").addClass("sticky-header-mobile");
      } else {
        $(".mega-menu").removeClass("sticky-header");
        $(".mega-menu-mobile").removeClass("sticky-header-mobile");
      }

      // Update last scroll position
      lastScroll = currentScroll;
    });
  });

  function displayCurrentDate() {
    const date = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    document.getElementById("currentDate").textContent = formattedDate;
  }

  function displayCurrentYear() {
    const year = new Date().getFullYear();
    document.getElementById("currentYear").textContent = year;
  }

  // Call the function when document is ready
  $(document).ready(function () {
    displayCurrentDate();
    displayCurrentYear();
  });

  $(document).ready(function () {
    var swiperAroundNews = new Swiper(".swiper-around-news", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
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
