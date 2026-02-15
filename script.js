
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
     
    card.classList.add("animate");

     
    setTimeout(() => {
      card.classList.remove("animate");
    }, 500);

  });
});
document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {

    card.addEventListener("click", function() {

      const robot = document.createElement("img");
      robot.src = "robotimg.png";
      robot.classList.add("small-robot");

      card.appendChild(robot);

      setTimeout(() => {
        robot.remove();
      }, 3000);

    });

  });

});

