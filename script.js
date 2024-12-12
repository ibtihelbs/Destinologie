const h3 = document.querySelectorAll("footer h3");
const ul = document.querySelectorAll("footer ul.u__gap-8");
h3.forEach((v, i) => {
  v.addEventListener("click", () => {
    console.log(ul);
    ul[i + 1].classList.toggle("show");
  });
});
