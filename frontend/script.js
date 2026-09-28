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


/* =====================================================
   PREDICTIVE MAINTENANCE
===================================================== */


/* ================= OPEN MAINTENANCE ================= */

function openMaintenanceCheck() {

    const modal =
        document.getElementById("maintenanceModal");

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

}


/* ================= CLOSE MAINTENANCE ================= */

function closeMaintenanceCheck() {

    const modal =
        document.getElementById("maintenanceModal");

    modal.style.display = "none";

    document.body.style.overflow = "";

}


/* =====================================================
   CLOSE ON OUTSIDE CLICK
===================================================== */

window.addEventListener("click", function (event) {

    const maintenanceModal =
        document.getElementById("maintenanceModal");


    if (event.target === maintenanceModal) {

        closeMaintenanceCheck();

    }

});


/* =====================================================
   PREDICTIVE MAINTENANCE ANALYSIS
===================================================== */

function analyzeMaintenance(event) {

    event.preventDefault();


    /* =================================================
       ELEMENTS
    ================================================= */

    const button =
        document.querySelector(
            ".maintenance-analyze-btn"
        );


    const form =
        document.getElementById(
            "maintenanceForm"
        );


    const result =
        document.getElementById(
            "maintenanceResult"
        );


    /* =================================================
       USER INPUT
    ================================================= */

    const vehicleType =
        document.getElementById(
            "maintenanceVehicleType"
        ).value;


    const vehicleAge =
        document.getElementById(
            "maintenanceVehicleAge"
        ).value;


    const kilometers =
        Number(
            document.getElementById(
                "maintenanceKilometers"
            ).value
        );


    const lastService =
        document.getElementById(
            "maintenanceLastService"
        ).value;


    const serviceType =
        document.getElementById(
            "lastServiceType"
        ).value;


    const condition =
        document.getElementById(
            "maintenanceIssue"
        ).value;


    /* =================================================
       LOADING
    ================================================= */

    button.innerHTML = `
        <span>⏳</span>
        Analyzing Maintenance...
    `;


    button.disabled = true;


    /* =================================================
       SIMULATE AI PROCESS
    ================================================= */

    setTimeout(function () {


        /* =============================================
           DEFAULT VALUES
        ============================================= */

        let priority = "NORMAL";

        let priorityClass = "normal";

        let nextService = "Within 3 Months";

        let oilStatus = "Check Recommended";

        let tyreStatus = "Recommended";

        let batteryStatus = "Good";


        let recommendations = [

            "Regular vehicle inspection",

            "Engine oil check",

            "Tyre pressure inspection"

        ];


        let aiMessage =
            "Continue regular servicing and monitor your vehicle condition.";


        /* =============================================
           MAINTENANCE SCORE
        ============================================= */

        let maintenanceScore = 0;


        /* =============================================
           KILOMETERS
        ============================================= */

        if (kilometers >= 150000) {

            maintenanceScore += 4;

        }

        else if (kilometers >= 100000) {

            maintenanceScore += 3;

        }

        else if (kilometers >= 50000) {

            maintenanceScore += 2;

        }

        else {

            maintenanceScore += 1;

        }


        /* =============================================
           VEHICLE AGE
        ============================================= */

        if (vehicleAge === "10+") {

            maintenanceScore += 4;

        }

        else if (vehicleAge === "6-10") {

            maintenanceScore += 3;

        }

        else if (vehicleAge === "3-5") {

            maintenanceScore += 2;

        }

        else {

            maintenanceScore += 1;

        }


        /* =============================================
           LAST SERVICE
        ============================================= */

        if (lastService === "12+") {

            maintenanceScore += 4;

        }

        else if (lastService === "6-12") {

            maintenanceScore += 3;

        }

        else if (lastService === "3-6") {

            maintenanceScore += 2;

        }

        else {

            maintenanceScore += 1;

        }


        /* =============================================
           CURRENT CONDITION
        ============================================= */

        if (condition === "multiple") {

            maintenanceScore += 5;

        }

        else if (condition === "warning") {

            maintenanceScore += 4;

        }

        else if (condition === "performance") {

            maintenanceScore += 3;

        }

        else if (condition === "noise") {

            maintenanceScore += 2;

        }

        else {

            maintenanceScore += 1;

        }


        /* =================================================
           HIGH PRIORITY
        ================================================= */

        if (
            maintenanceScore >= 13 ||
            condition === "multiple" ||
            condition === "warning"
        ) {

            priority = "HIGH";

            priorityClass = "high";

            nextService = "As Soon As Possible";

            oilStatus = "Replace / Inspect";

            tyreStatus = "Immediate Inspection";

            batteryStatus = "Check Required";


            recommendations = [

                "Schedule a complete vehicle inspection",

                "Check engine oil and fluid levels",

                "Inspect tyres and braking system",

                "Check battery and electrical system"

            ];


            aiMessage =
                "Your vehicle shows signs that maintenance should be prioritized. Schedule a professional inspection as soon as possible.";

        }


        /* =================================================
           MEDIUM PRIORITY
        ================================================= */

        else if (maintenanceScore >= 8) {

            priority = "MEDIUM";

            priorityClass = "medium";

            nextService = "Within 1–2 Months";

            oilStatus = "Service Recommended";

            tyreStatus = "Inspection Recommended";

            batteryStatus = "Check Soon";


            recommendations = [

                "Plan your next scheduled service",

                "Check engine oil condition",

                "Inspect tyre pressure and tread",

                "Check battery performance"

            ];


            aiMessage =
                "Your vehicle may require maintenance soon. Planning a service appointment can help prevent future issues.";

        }


        /* =================================================
           NORMAL PRIORITY
        ================================================= */

        else {

            priority = "NORMAL";

            priorityClass = "normal";

            nextService = "Within 3 Months";

            oilStatus = "Good";

            tyreStatus = "Good";

            batteryStatus = "Good";


            recommendations = [

                "Regular vehicle inspection",

                "Monitor engine oil",

                "Maintain correct tyre pressure",

                "Continue scheduled servicing"

            ];


            aiMessage =
                "Your vehicle maintenance schedule looks normal. Continue regular servicing and monitor vehicle performance.";

        }


        /* =================================================
           SERVICE TYPE ADJUSTMENTS
        ================================================= */

        if (serviceType === "oil") {

            oilStatus = "Monitor";

        }


        if (serviceType === "major") {

            recommendations.unshift(
                "Review the major service report"
            );

        }


        /* =================================================
           HIGH KM TYRE CHECK
        ================================================= */

        if (kilometers >= 80000) {

            tyreStatus =
                "Inspection Recommended";

        }


        /* =================================================
           OLD VEHICLE BATTERY
        ================================================= */

        if (
            vehicleAge === "6-10" ||
            vehicleAge === "10+"
        ) {

            batteryStatus =
                "Check Recommended";

        }


        /* =================================================
           UPDATE PRIORITY
        ================================================= */

        const priorityElement =
            document.getElementById(
                "maintenancePriority"
            );


        priorityElement.textContent =
            priority;


        priorityElement.className =
            "maintenance-priority " +
            priorityClass;


        /* =================================================
           MAINTENANCE STATUS
        ================================================= */

        const statusElement =
            document.getElementById(
                "maintenanceStatus"
            );


        if (priority === "HIGH") {

            statusElement.innerHTML =
                "🔴 Maintenance is required soon. Professional inspection is recommended.";

            statusElement.style.background =
                "#fff0f0";

            statusElement.style.color =
                "#c62828";

            statusElement.style.borderColor =
                "#f5cccc";

        }

        else if (priority === "MEDIUM") {

            statusElement.innerHTML =
                "🟡 Maintenance should be planned soon.";

            statusElement.style.background =
                "#fff8e6";

            statusElement.style.color =
                "#9a6700";

            statusElement.style.borderColor =
                "#f0dfad";

        }

        else {

            statusElement.innerHTML =
                "🟢 Maintenance schedule looks normal.";

            statusElement.style.background =
                "#eef9f1";

            statusElement.style.color =
                "#24733b";

            statusElement.style.borderColor =
                "#dcefe1";

        }


        /* =================================================
           RESULT VALUES
        ================================================= */

        document.getElementById(
            "nextService"
        ).textContent =
            nextService;


        document.getElementById(
            "oilStatus"
        ).textContent =
            oilStatus;


        document.getElementById(
            "tyreStatus"
        ).textContent =
            tyreStatus;


        document.getElementById(
            "batteryStatus"
        ).textContent =
            batteryStatus;


        /* =================================================
           RECOMMENDATION LIST
        ================================================= */

        const maintenanceList =
            document.getElementById(
                "maintenanceList"
            );


        maintenanceList.innerHTML = "";


        recommendations.forEach(
            function (item) {

                const li =
                    document.createElement("li");

                li.textContent = item;

                maintenanceList.appendChild(li);

            }
        );


        /* =================================================
           AI RECOMMENDATION
        ================================================= */

        document.getElementById(
            "maintenanceAIRecommendation"
        ).textContent =
            aiMessage;


        /* =================================================
           HIDE FORM
        ================================================= */

        form.style.display = "none";


        /* =================================================
           SHOW RESULT
        ================================================= */

        result.style.display = "block";


        /* =================================================
           RESET BUTTON
        ================================================= */

        button.innerHTML = `
            <span>🤖</span>
            Predict Maintenance
            <span>→</span>
        `;


        button.disabled = false;


    }, 2000);

}


/* =====================================================
   ANALYZE ANOTHER VEHICLE
===================================================== */

function newMaintenanceAnalysis() {

    const form =
        document.getElementById(
            "maintenanceForm"
        );


    const result =
        document.getElementById(
            "maintenanceResult"
        );


    /* Reset form */

    form.reset();


    /* Hide result */

    result.style.display = "none";


    /* Show form */

    form.style.display = "block";


    /* Reset priority */

    const priority =
        document.getElementById(
            "maintenancePriority"
        );


    priority.textContent = "NORMAL";

    priority.className =
        "maintenance-priority";


    /* Reset status */

    const status =
        document.getElementById(
            "maintenanceStatus"
        );


    status.innerHTML =
        "🟢 Maintenance schedule looks normal.";

    status.style.background =
        "#eef9f1";

    status.style.color =
        "#24733b";

    status.style.borderColor =
        "#dcefe1";

}


/* ===================================================== */
/*              AI DAMAGE DETECTION                      */
/* ===================================================== */

function openDamageDetection() {

    const modal = document.getElementById("damageModal");

    if (!modal) return;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


/* Close Modal */

function closeDamageDetection() {

    const modal = document.getElementById("damageModal");

    if (!modal) return;

    modal.style.display = "none";

    document.body.style.overflow = "";
}


/* Close when clicking outside */

window.addEventListener("click", function (event) {

    const modal = document.getElementById("damageModal");

    if (event.target === modal) {

        closeDamageDetection();

    }

});


/* ===================================================== */
/*                  IMAGE UPLOAD                         */
/* ===================================================== */

const damageImageInput =
    document.getElementById("vehicleDamageImage");

const damagePreview =
    document.getElementById("damagePreview");

const damagePreviewImage =
    document.getElementById("damagePreviewImage");

const damageAnalyzeBtn =
    document.getElementById("damageAnalyzeBtn");


if (damageImageInput) {

    damageImageInput.addEventListener(
        "change",
        function () {

            const file = this.files[0];

            if (!file) return;


            /* Check image type */

            if (!file.type.startsWith("image/")) {

                alert("Please select a valid image.");

                this.value = "";

                return;
            }


            /* Create image preview */

            const imageURL =
                URL.createObjectURL(file);

            damagePreviewImage.src = imageURL;

            damagePreview.style.display = "block";

            damageAnalyzeBtn.disabled = false;

        }
    );

}


/* ===================================================== */
/*                  REMOVE IMAGE                         */
/* ===================================================== */

function removeDamageImage() {

    if (!damageImageInput) return;


    damageImageInput.value = "";

    damagePreviewImage.src = "";

    damagePreview.style.display = "none";

    damageAnalyzeBtn.disabled = true;

}


/* ===================================================== */
/*                  ANALYZE DAMAGE                       */
/* ===================================================== */

function analyzeDamage() {

    const file = damageImageInput.files[0];

    if (!file) {

        alert("Please upload a vehicle image first.");

        return;

    }


    /* Disable button while analysing */

    damageAnalyzeBtn.disabled = true;

    damageAnalyzeBtn.innerHTML = `
        <span>🤖</span>
        Analyzing Damage...
        <span>⏳</span>
    `;


    /*
        Frontend Demo Analysis

        NOTE:
        This is currently simulated.
        Actual AI image detection will be
        connected later with FastAPI + AI model.
    */

    setTimeout(function () {

        generateDamageResult();

    }, 2000);

}


/* ===================================================== */
/*               GENERATE DAMAGE RESULT                  */
/* ===================================================== */

function generateDamageResult() {

    const damageSeverity =
        document.getElementById("damageSeverity");

    const damageStatus =
        document.getElementById("damageStatus");

    const damagedArea =
        document.getElementById("damagedArea");

    const damageType =
        document.getElementById("damageType");

    const damageLevel =
        document.getElementById("damageLevel");

    const repairRecommendation =
        document.getElementById("repairRecommendation");

    const damageAction =
        document.getElementById("damageAction");

    const damageAIRecommendation =
        document.getElementById(
            "damageAIRecommendation"
        );

    const damageResult =
        document.getElementById("damageResult");


    /*
        Demo result

        Later these values will come
        from the actual AI model.
    */

    damageSeverity.textContent = "MEDIUM";

    damageSeverity.className =
        "damage-severity medium";


    damageStatus.textContent =
        "🟡 Moderate visible damage detected";


    damagedArea.textContent =
        "Front Bumper";


    damageType.textContent =
        "Scratch & Minor Dent";


    damageLevel.textContent =
        "Medium";


    repairRecommendation.textContent =
        "Body Repair";


    damageAction.textContent =
        "Get the front bumper inspected by a qualified service professional. " +
        "Minor body repair and repainting may be required.";


    damageAIRecommendation.textContent =
        "The uploaded image indicates possible visible damage " +
        "around the front bumper area. Professional inspection " +
        "is recommended before driving long distances.";


    /* Show result */

    damageResult.style.display = "block";


    /* Scroll to result */

    setTimeout(function () {

        damageResult.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);


    /* Restore button */

    damageAnalyzeBtn.disabled = false;

    damageAnalyzeBtn.innerHTML = `
        <span>🤖</span>
        Analyze Damage
        <span>→</span>
    `;

}


/* ===================================================== */
/*               ANALYZE ANOTHER IMAGE                  */
/* ===================================================== */

function newDamageAnalysis() {

    const damageResult =
        document.getElementById("damageResult");


    /* Hide result */

    damageResult.style.display = "none";


    /* Remove old image */

    removeDamageImage();


    /* Reset button */

    damageAnalyzeBtn.disabled = true;

    damageAnalyzeBtn.innerHTML = `
        <span>🤖</span>
        Analyze Damage
        <span>→</span>
    `;

}


/* ===================================================== */
/*                  SERVICE BOOKING                      */
/* ===================================================== */

function openServiceBooking() {

    const modal = document.getElementById("bookingModal");

    if (!modal) return;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

    setMinimumBookingDate();
}


/* Close Modal */

function closeServiceBooking() {

    const modal = document.getElementById("bookingModal");

    if (!modal) return;

    modal.style.display = "none";

    document.body.style.overflow = "";
}


/* Close when clicking outside */

window.addEventListener("click", function (event) {

    const modal = document.getElementById("bookingModal");

    if (event.target === modal) {

        closeServiceBooking();

    }

});


/* ===================================================== */
/*              SET MINIMUM BOOKING DATE                 */
/* ===================================================== */

function setMinimumBookingDate() {

    const dateInput =
        document.getElementById("bookingDate");

    if (!dateInput) return;


    /*
        Prevent user from selecting
        a previous date.
    */

    const today = new Date();

    const year = today.getFullYear();

    const month =
        String(today.getMonth() + 1).padStart(2, "0");

    const day =
        String(today.getDate()).padStart(2, "0");


    const todayDate =
        `${year}-${month}-${day}`;


    dateInput.min = todayDate;

}


/* ===================================================== */
/*                SUBMIT SERVICE BOOKING                */
/* ===================================================== */

function submitServiceBooking(event) {

    event.preventDefault();


    const vehicleType =
        document.getElementById(
            "bookingVehicleType"
        ).value;

    const vehicleNumber =
        document.getElementById(
            "vehicleNumber"
        ).value.trim();

    const serviceType =
        document.getElementById(
            "bookingServiceType"
        ).value;

    const bookingDate =
        document.getElementById(
            "bookingDate"
        ).value;

    const bookingTime =
        document.getElementById(
            "bookingTime"
        ).value;

    const bookingCenter =
        document.getElementById(
            "bookingCenter"
        ).value;


    /* Basic validation */

    if (
        !vehicleType ||
        !vehicleNumber ||
        !serviceType ||
        !bookingDate ||
        !bookingTime ||
        !bookingCenter
    ) {

        alert(
            "Please fill all required booking details."
        );

        return;

    }


    /* Get submit button */

    const submitButton =
        document.querySelector(
            ".booking-submit-btn"
        );


    /* Loading state */

    submitButton.disabled = true;

    submitButton.innerHTML = `
        <span>⏳</span>
        Confirming Booking...
    `;


    /*
        Frontend demo processing.

        Later this can be connected
        to FastAPI + database.
    */

    setTimeout(function () {

        showBookingConfirmation(
            vehicleType,
            vehicleNumber,
            serviceType,
            bookingDate,
            bookingTime,
            bookingCenter
        );

    }, 1500);

}


/* ===================================================== */
/*              SHOW BOOKING CONFIRMATION                */
/* ===================================================== */

function showBookingConfirmation(
    vehicleType,
    vehicleNumber,
    serviceType,
    bookingDate,
    bookingTime,
    bookingCenter
) {

    const bookingForm =
        document.getElementById("bookingForm");

    const bookingResult =
        document.getElementById("bookingResult");


    /* Vehicle name */

    const vehicleNames = {

        car: "🚗 Car",

        bike: "🏍️ Bike",

        suv: "🚙 SUV"

    };


    /* Service name */

    const serviceNames = {

        general: "🔧 General Service",

        oil: "🛢️ Oil Change",

        brake: "🛑 Brake Service",

        tyre: "🛞 Tyre Service",

        full: "🚗 Full Vehicle Service"

    };


    /* Center name */

    const centerNames = {

        bhopal: "AI Auto Care - Bhopal",

        indore: "AI Auto Care - Indore",

        gwalior: "AI Auto Care - Gwalior",

        jabalpur: "AI Auto Care - Jabalpur"

    };


    /* Format date */

    const dateObject =
        new Date(bookingDate + "T00:00:00");


    const formattedDate =
        dateObject.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );


    /* Format time */

    const [hours, minutes] =
        bookingTime.split(":");


    const timeObject =
        new Date();

    timeObject.setHours(
        Number(hours),
        Number(minutes)
    );


    const formattedTime =
        timeObject.toLocaleTimeString(
            "en-IN",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    /* Generate Booking ID */

    const randomNumber =
        Math.floor(
            100000 + Math.random() * 900000
        );


    const generatedBookingId =
        "AVS-" + randomNumber;


    /* Put data into result */

    document.getElementById(
        "confirmedVehicle"
    ).textContent =
        `${vehicleNames[vehicleType]} • ${vehicleNumber}`;


    document.getElementById(
        "confirmedService"
    ).textContent =
        serviceNames[serviceType];


    document.getElementById(
        "confirmedDate"
    ).textContent =
        formattedDate;


    document.getElementById(
        "confirmedTime"
    ).textContent =
        formattedTime;


    document.getElementById(
        "confirmedCenter"
    ).textContent =
        centerNames[bookingCenter];


    document.getElementById(
        "bookingId"
    ).textContent =
        generatedBookingId;


    /* Hide form */

    bookingForm.style.display = "none";


    /* Show confirmation */

    bookingResult.style.display = "block";


    /* Scroll result */

    setTimeout(function () {

        bookingResult.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* ===================================================== */
/*               BOOK ANOTHER SERVICE                   */
/* ===================================================== */

function newServiceBooking() {

    const bookingForm =
        document.getElementById("bookingForm");

    const bookingResult =
        document.getElementById("bookingResult");


    /* Reset form */

    bookingForm.reset();


    /* Show form */

    bookingForm.style.display = "block";


    /* Hide result */

    bookingResult.style.display = "none";


    /* Reset button */

    const submitButton =
        document.querySelector(
            ".booking-submit-btn"
        );


    submitButton.disabled = false;

    submitButton.innerHTML = `
        <span>📅</span>
        Confirm Service Booking
        <span>→</span>
    `;


    /* Set date again */

    setMinimumBookingDate();

}


/* ===================================================== */
/*            OPEN SERVICE CENTER SECTION                */
/* ===================================================== */

function openServiceCenters(event) {

    if (event) {
        event.preventDefault();
    }

    const section =
        document.getElementById("service-centers");

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


function openServiceCenters(event) {
    if (event) {
        event.preventDefault();
    }

    const section = document.getElementById("service-centers");

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}