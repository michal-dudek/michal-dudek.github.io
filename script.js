const searchField = document.querySelector(".search");
const productList = document.querySelectorAll("li");

//wersja w foreEach
const searchEngine = (e) => {
   const text = e.target.value.toLowerCase();
   productList.forEach((el) => {
      if (el.textContent.toLowerCase().indexOf(text) !== -1) {
         el.style.display = "block";
      } else {
         el.style.display = "none";
      }
   });
};

searchField.addEventListener("keyup", searchEngine);
