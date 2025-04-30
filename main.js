// section-hero-fade-out-animation.js
const slides = document.querySelectorAll(".slide");
let current = 0;

// Function to show the next slide
function showNextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}
// Start the slide show
setInterval(showNextSlide, 4000);

document.addEventListener("DOMContentLoaded", () => {
  const titleElements = document.querySelectorAll(".title");
  const imgElements = document.querySelectorAll(".our-service-list .img");
  const textElements = document.querySelectorAll(".our-service-list .text");
  const otherElements = document.querySelectorAll(".other-service, .other-news, .more-info");
  const ovSubTitle = document.querySelector(".ov-sub-title");
  const ovList = document.querySelector(".ov-list");
  const newsArticles = document.querySelectorAll(".news-list article");
  const infoImgElements = document.querySelectorAll(".info-img");
  const infoTxtElements = document.querySelectorAll(".info-txt");
  const recruitTxtElements = document.querySelectorAll(".recruit-txt");
  const recruitJobElements = document.querySelectorAll(".recruit-job");
  const jobListItems = document.querySelectorAll(".job-list li a");

  // Observer for .title
  const observerTitle = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-titleSlideDown");
        } else {
          entry.target.classList.remove("animate-titleSlideDown");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for .img and .text
  const observerElements = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("text")) {
            setTimeout(() => {
              entry.target.classList.add("animate-slideUp");
            }, 1000); //Delay 1sec
          } else {
            entry.target.classList.add("animate-slideUp");
          }
        } else {
          entry.target.classList.remove("animate-slideUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for .other-service, .other-news, .more-info
  const observerOtherElements = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInRight");
        } else {
          entry.target.classList.remove("animate-fadeInRight");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for .ov-sub-title and .ov-list
  const observerOvElements = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("ov-sub-title")) {
            setTimeout(() => {
              entry.target.classList.add("animate-slideUp");
            }, 400); // Delay 0.7sec
          } else {
            entry.target.classList.add("animate-slideUp");
          }
        } else {
          entry.target.classList.remove("animate-slideUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for .news-list article
  const observerNewsArticles = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideUp");
        } else {
          entry.target.classList.remove("animate-slideUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for .info-img
  const observerInfoImg = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideUp");
        } else {
          entry.target.classList.remove("animate-slideUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for .info-txt
  const observerInfoTxt = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideDown");
        } else {
          entry.target.classList.remove("animate-slideDown");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for .recruit-txt and .recruit-job
  const observerRecruitElements = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideUp");
        } else {
          entry.target.classList.remove("animate-slideUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for .job-list li
  const observerJobList = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-slideUp");
          }, index * 250);
        } else {
          entry.target.classList.remove("animate-slideUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all .title elements
  titleElements.forEach((title) => observerTitle.observe(title));

  // Observe .img and .text elements
  imgElements.forEach((img) => observerElements.observe(img));
  textElements.forEach((text) => observerElements.observe(text));

  // Observe .other-service, .other-news, .more-info elements
  otherElements.forEach((element) => observerOtherElements.observe(element));

  // Observe .ov-sub-title and .ov-list elements
  observerOvElements.observe(ovSubTitle);
  observerOvElements.observe(ovList);

  // Observe .news-list article elements
  newsArticles.forEach((article) => observerNewsArticles.observe(article));

  // Observe .info-img elements
  infoImgElements.forEach((infoImg) => observerInfoImg.observe(infoImg));

  // Observe .info-txt elements
  infoTxtElements.forEach((infoTxt) => observerInfoTxt.observe(infoTxt));

  // Observe .recruit-txt elements
  recruitTxtElements.forEach((element) => observerRecruitElements.observe(element));

  // Observe .recruit-job elements
  recruitJobElements.forEach((element) => observerRecruitElements.observe(element));

  // Observe all .job-list li elements
  jobListItems.forEach((item) => observerJobList.observe(item));
});

// Close menu from hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const body = document.body;
  const mbNavWrapper = document.querySelector(".mb_nav_wrapper");

  // .hamburger-menu  click event
  hamburgerMenu.addEventListener("click", () => {
    const isMenuOpen = mbNavWrapper.classList.contains("menu-slide");

    if (isMenuOpen) {
      // close menu
      hamburgerMenu.classList.remove("close");
      body.classList.remove("noscroll");
      mbNavWrapper.classList.remove("menu-slide");
    } else {
      // open menu
      hamburgerMenu.classList.add("close");
      body.classList.add("noscroll");
      mbNavWrapper.classList.add("menu-slide");
    }
  });

  // .mb_nav_wrapper
  document.addEventListener("click", (event) => {
    if (!hamburgerMenu.contains(event.target) && !mbNavWrapper.contains(event.target)) {
      hamburgerMenu.classList.remove("close");
      body.classList.remove("noscroll");
      mbNavWrapper.classList.remove("menu-slide");
    }
  });
});
