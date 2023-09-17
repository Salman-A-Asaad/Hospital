// Set variavle
// Bar section
let bar = document.getElementById("bar");
let list = document.querySelector(".list");
let toggle = false;
// Home section
let imgInHome = document.querySelector(".home .container img");
let textInHome = document.querySelector(".home .container .text");
// About section
let about = document.getElementById("about");
let itemsInAbout = document.querySelector(".about .container .items");
let imgInAbout = document.querySelector(".about .container .img img");
// Facility section
let facility = document.getElementById("facility");
let boxInFacility = document.querySelector(".facility .container");
// Review section
let review = document.getElementById("review");
let review2 = document.getElementById("review2");
let itemsInReview = document.querySelectorAll(
  ".review .row-one .container .item"
);
let items2InReview = document.querySelectorAll(".row-two .container .item");
// Concat section
let contact = document.getElementById("contact");
let formInContact = document.querySelector(".contact form");
// Post section
let post = document.getElementById("post");
let itemsInPost = document.querySelectorAll(".post .container .item");
// Footer section
let footer = document.getElementById("footer");
let boxInFooter = document.querySelectorAll("footer .container .box");
// Set function

function showList() {
  if (!toggle) {
    bar.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    toggle = !toggle;
  } else {
    bar.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    toggle = !toggle;
  }
  bar.classList.toggle("rotate");
  list.classList.toggle("show");
}

function showHome() {
  imgInHome.classList.add("show");
  textInHome.classList.add("show");
}

function showAbout() {
  if (
    window.scrollY <= about.offsetTop &&
    window.scrollY >= about.offsetTop - 250
  ) {
    itemsInAbout.classList.add("show");
    imgInAbout.classList.add("show");
  }
}

function showFacility() {
  if (
    window.scrollY <= facility.offsetTop &&
    window.scrollY >= facility.offsetTop - 250
  ) {
    boxInFacility.classList.add("show");
  }
}

function showReview() {
  if (
    window.scrollY <= review.offsetTop &&
    window.scrollY >= review.offsetTop - 250
  ) {
    itemsInReview.forEach((e) => {
      e.classList.add("show");
    });
  }
}

function showReview2() {
  if (
    window.scrollY <= review2.offsetTop &&
    window.scrollY >= review2.offsetTop - 250
  ) {
    items2InReview.forEach((e) => {
      e.classList.add("show");
    });
  }
}

function showForm() {
  if (
    window.scrollY <= contact.offsetTop &&
    window.scrollY >= contact.offsetTop - 250
  ) {
    formInContact.classList.add("show");
  }
}

function showPosts() {
  if (
    window.scrollY <= post.offsetTop &&
    window.scrollY >= post.offsetTop - 250
  ) {
    itemsInPost.forEach((e) => {
      e.classList.add("show");
    });
  }
}

function showFooter() {
  if (window.scrollY >= footer.offsetTop - 500) {
    boxInFooter.forEach((e) => {
      e.classList.add("show");
    });
  }
}

function allFunction() {
  showHome();
  window.onscroll = function () {
    showAbout();
    showFacility();
    showReview();
    showReview2();
    showForm();
    showPosts();
    showFooter();
  };
}
// Set event
bar.addEventListener("click", showList);
window.addEventListener("load", allFunction);
