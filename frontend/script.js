// ================= MODAL =================

function openLogin() {

    document.getElementById("registerModal").style.display = "none";

    document.getElementById("loginModal").style.display = "flex";
}


function openRegister() {

    document.getElementById("loginModal").style.display = "none";

    document.getElementById("registerModal").style.display = "flex";
}


function closeModal() {

    document.getElementById("loginModal").style.display = "none";

    document.getElementById("registerModal").style.display = "none";
}


// ================= HERO BUTTONS =================

function getStarted() {

    openRegister();
}


function learnMore() {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}


// ================= OUTSIDE CLICK =================

window.addEventListener("click", function(event) {

    const loginModal = document.getElementById("loginModal");

    const registerModal = document.getElementById("registerModal");

    if (event.target === loginModal) {

        closeModal();
    }

    if (event.target === registerModal) {

        closeModal();
    }

});


// ========================================
// SUBTLE CAR PARALLAX EFFECT
// ========================================

const hero = document.querySelector(".hero");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", function (event) {

    // Screen center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Mouse distance from center
    mouseX = (event.clientX - centerX) / centerX;
    mouseY = (event.clientY - centerY) / centerY;

    // Very subtle movement
    const moveX = mouseX * 12;
    const moveY = mouseY * 8;

    hero.style.setProperty("--mouse-x", `${moveX}px`);
    hero.style.setProperty("--mouse-y", `${moveY}px`);
});