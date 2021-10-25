const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

if (links.classList.contains("active")) {
    links.classList.remove("active");
}

btn.addEventListener("click", () => {
    links.classList.toggle("active");
});

//////////////////////////////////function for carsoul////////////////////////////
$(".carousel").swipe({

    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: "vertical"

});