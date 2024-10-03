/*
 * NOTE: This code opens and closes the html element
 * that has an ID="js-nav"
 * when and html element with the data attribute
 * of [data-btn="nav-toggle"] is clicked
 */
if (document.querySelector('[data-btn="nav-toggle"]')) {
  document.querySelectorAll('[data-btn="nav-toggle"]').forEach((i) => {
    i.addEventListener("click", () => {
      document.querySelector("#js-nav").classList.toggle("is-open");
    });
  });
}
