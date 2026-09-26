/* =====================================================
   LOGIN / REGISTER
===================================================== */

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


function getStarted() {

    openRegister();

}


function learnMore() {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   LOGIN / REGISTER OUTSIDE CLICK
===================================================== */

window.addEventListener("click", function (event) {

    const loginModal =
        document.getElementById("loginModal");

    const registerModal =
        document.getElementById("registerModal");


    if (event.target === loginModal) {

        closeModal();

    }


    if (event.target === registerModal) {

        closeModal();

    }

});


/* =====================================================
   HERO PARALLAX EFFECT
===================================================== */

const hero = document.querySelector(".hero");

let mouseX = 0;
let mouseY = 0;


window.addEventListener("mousemove", function (event) {

    if (!hero) return;


    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;


    mouseX =
        (event.clientX - centerX) / centerX;

    mouseY =
        (event.clientY - centerY) / centerY;


    const moveX = mouseX * 12;

    const moveY = mouseY * 8;


    hero.style.setProperty(
        "--mouse-x",
        `${moveX}px`
    );


    hero.style.setProperty(
        "--mouse-y",
        `${moveY}px`
    );

});


/* =====================================================
   AI VEHICLE HEALTH CHECK
===================================================== */

function openHealthCheck() {

    const modal =
        document.getElementById("healthModal");


    modal.style.display = "flex";


    document.body.style.overflow = "hidden";

}


/* =====================================================
   CLOSE HEALTH MODAL
===================================================== */

function closeHealthCheck() {

    const modal =
        document.getElementById("healthModal");


    modal.style.display = "none";


    document.body.style.overflow = "";

}


/* =====================================================
   CLOSE HEALTH MODAL ON OUTSIDE CLICK
===================================================== */

window.addEventListener("click", function (event) {

    const healthModal =
        document.getElementById("healthModal");


    if (event.target === healthModal) {

        closeHealthCheck();

    }

});


/* =====================================================
   VEHICLE HEALTH ANALYSIS
===================================================== */

function analyzeVehicle(event) {

    event.preventDefault();


    /* ---------------------------------------------
       ELEMENTS
    --------------------------------------------- */

    const button =
        document.querySelector(".analyze-btn");


    const form =
        document.getElementById("healthForm");


    const result =
        document.getElementById("healthResult");


    /* ---------------------------------------------
       USER INPUT
    --------------------------------------------- */

    const vehicleType =
        document.getElementById("vehicleType").value;


    const fuelType =
        document.getElementById("fuelType").value;


    const vehicleAge =
        document.getElementById("vehicleAge").value;


    const kilometers =
        Number(
            document.getElementById("kilometers").value
        );


    const lastService =
        document.getElementById("lastService").value;


    const issue =
        document.getElementById("vehicleIssue").value;


    /* ---------------------------------------------
       LOADING STATE
    --------------------------------------------- */

    button.innerHTML = `
        <span>⏳</span>
        Analyzing Vehicle...
    `;


    button.disabled = true;


    /* ---------------------------------------------
       SIMULATE AI ANALYSIS
    --------------------------------------------- */

    setTimeout(function () {


        /* =========================================
           INITIAL SCORE
        ========================================= */

        let score = 90;


        /* =========================================
           KILOMETER ANALYSIS
        ========================================= */

        if (kilometers > 150000) {

            score -= 20;

        }

        else if (kilometers > 100000) {

            score -= 15;

        }

        else if (kilometers > 50000) {

            score -= 8;

        }


        /* =========================================
           VEHICLE AGE ANALYSIS
        ========================================= */

        if (vehicleAge === "10+") {

            score -= 12;

        }

        else if (vehicleAge === "6-10") {

            score -= 7;

        }

        else if (vehicleAge === "3-5") {

            score -= 3;

        }


        /* =========================================
           LAST SERVICE ANALYSIS
        ========================================= */

        if (lastService === "12+") {

            score -= 12;

        }

        else if (lastService === "6-12") {

            score -= 5;

        }

        else if (lastService === "3-6") {

            score -= 2;

        }


        /* =========================================
           CURRENT ISSUE
        ========================================= */

        if (issue !== "none") {

            score -= 10;

        }


        /* =========================================
           SEVERE ISSUES
        ========================================= */

        if (
            issue === "engine" ||
            issue === "brake"
        ) {

            score -= 5;

        }


        /* =========================================
           KEEP SCORE BETWEEN 0 AND 100
        ========================================= */

        score =
            Math.max(
                0,
                Math.min(100, score)
            );


        /* =========================================
           HEALTH SCORE
        ========================================= */

        document.getElementById(
            "healthScore"
        ).textContent = score;


        /* =========================================
           VEHICLE STATUS
        ========================================= */

        const healthStatus =
            document.getElementById(
                "healthStatus"
            );


        if (score >= 80) {

            healthStatus.innerHTML =
                "🟢 Vehicle is in Good Condition";


            healthStatus.style.background =
                "#eef9f1";


            healthStatus.style.color =
                "#24733b";

        }

        else if (score >= 60) {

            healthStatus.innerHTML =
                "🟡 Vehicle Needs Attention";


            healthStatus.style.background =
                "#fff8e6";


            healthStatus.style.color =
                "#9a6700";

        }

        else {

            healthStatus.innerHTML =
                "🔴 Vehicle Needs Immediate Service";


            healthStatus.style.background =
                "#fff0f0";


            healthStatus.style.color =
                "#c62828";

        }


        /* =========================================
           ENGINE HEALTH
        ========================================= */

        const engineHealth =
            document.getElementById(
                "engineHealth"
            );


        if (issue === "engine") {

            engineHealth.textContent =
                "Needs Inspection";

            engineHealth.style.color =
                "#c62828";

        }

        else {

            engineHealth.textContent =
                "Good";

            engineHealth.style.color =
                "#24733b";

        }


        /* =========================================
           BATTERY HEALTH
        ========================================= */

        const batteryHealth =
            document.getElementById(
                "batteryHealth"
            );


        if (issue === "battery") {

            batteryHealth.textContent =
                "Needs Inspection";

            batteryHealth.style.color =
                "#c62828";

        }

        else {

            batteryHealth.textContent =
                "Good";

            batteryHealth.style.color =
                "#24733b";

        }


        /* =========================================
           TYRE HEALTH
        ========================================= */

        const tyreHealth =
            document.getElementById(
                "tyreHealth"
            );


        if (issue === "tyre") {

            tyreHealth.textContent =
                "Needs Inspection";

            tyreHealth.style.color =
                "#c62828";

        }

        else {

            tyreHealth.textContent =
                "Good";

            tyreHealth.style.color =
                "#24733b";

        }


        /* =========================================
           BRAKE HEALTH
        ========================================= */

        const brakeHealth =
            document.getElementById(
                "brakeHealth"
            );


        if (issue === "brake") {

            brakeHealth.textContent =
                "Needs Inspection";

            brakeHealth.style.color =
                "#c62828";

        }

        else {

            brakeHealth.textContent =
                "Good";

            brakeHealth.style.color =
                "#24733b";

        }


        /* =========================================
           MAINTENANCE STATUS
        ========================================= */

        const maintenanceStatus =
            document.getElementById(
                "maintenanceStatus"
            );


        if (lastService === "12+") {

            maintenanceStatus.textContent =
                "Vehicle service is overdue. Schedule a service as soon as possible.";

        }

        else if (lastService === "6-12") {

            maintenanceStatus.textContent =
                "Your next vehicle service should be planned soon.";

        }

        else if (lastService === "3-6") {

            maintenanceStatus.textContent =
                "Maintenance schedule looks normal.";

        }

        else {

            maintenanceStatus.textContent =
                "Your vehicle appears to be following a regular maintenance schedule.";

        }


        /* =========================================
           AI RECOMMENDATION
        ========================================= */

        const aiRecommendation =
            document.getElementById(
                "aiRecommendation"
            );


        if (
            issue === "none" &&
            score >= 80
        ) {

            aiRecommendation.textContent =
                "Your vehicle appears to be in good condition. Continue regular servicing and periodic vehicle health checks.";

        }

        else if (
            issue === "engine"
        ) {

            aiRecommendation.textContent =
                "An engine-related issue was reported. Professional inspection is recommended before continuing long-distance driving.";

        }

        else if (
            issue === "brake"
        ) {

            aiRecommendation.textContent =
                "A brake issue was reported. Have the braking system inspected by a qualified service professional.";

        }

        else if (
            issue === "battery"
        ) {

            aiRecommendation.textContent =
                "The battery may require inspection. Check battery health, terminals and charging performance.";

        }

        else if (
            issue === "tyre"
        ) {

            aiRecommendation.textContent =
                "Inspect tyre pressure, tread depth and overall tyre condition before regular driving.";

        }

        else if (
            lastService === "12+"
        ) {

            aiRecommendation.textContent =
                "Your vehicle has not been serviced for more than a year. Scheduling a complete service is recommended.";

        }

        else {

            aiRecommendation.textContent =
                "Consider scheduling your next service and continue monitoring vehicle performance.";

        }


        /* =========================================
           SHOW RESULT
        ========================================= */

        form.style.display = "none";


        result.style.display = "block";


        /* =========================================
           RESET BUTTON
        ========================================= */

        button.innerHTML = `
            <span>✨</span>
            Analyze Vehicle
            <span>→</span>
        `;


        button.disabled = false;


    }, 2000);

}


/* =====================================================
   ANALYZE ANOTHER VEHICLE
===================================================== */

function newVehicleAnalysis() {

    const form =
        document.getElementById("healthForm");


    const result =
        document.getElementById("healthResult");


    /* Reset form */

    form.reset();


    /* Hide result */

    result.style.display = "none";


    /* Show form */

    form.style.display = "block";

}