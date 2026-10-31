
/* Show More Projects Button */

const button = document.getElementById("show-more");
const moreProjects = document.getElementById("more-projects");

button.addEventListener("click", function() {

    if (moreProjects.hidden) {
        moreProjects.hidden = false;
        button.textContent = "Show Less Projects";
        button.setAttribute("aria-expanded", "true");
    } else {
        moreProjects.hidden = true;
        button.textContent = "Show More Projects";
        button.setAttribute("aria-expanded", "false");
    }

});

/* Footer Year */
document.getElementById("year").textContent =
    new Date().getFullYear();
