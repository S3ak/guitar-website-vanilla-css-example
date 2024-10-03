document.querySelectorAll('[data-btn="nav-toggle"]').forEach((i) => {
  i.addEventListener("click", () => {
    document.querySelector("#js-nav").classList.toggle("is-open");
  });
});
