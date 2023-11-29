  // Function to check the condition of the brakes based on kilometers driven and additional questions
  function checkBrakeCondition() {
    // Set the threshold for brake check (e.g., 20,000 kilometers)
    const brakeCheckThreshold = 20000;

    // Get the kilometers driven from the user (replace this with your actual mileage data)
    const kilometersDriven = prompt("How many kilometers have you driven since your last brake inspection?");

    // Additional questions
    const brakeNoise = confirm("Have you noticed any unusual noises when applying the brakes?");
    const brakeVibration = confirm("Do you experience any vibrations when braking?");
    const brakeFluidCheck = confirm("Have you had your brake fluid checked or flushed within the recommended period (e.g., the last 2 years)?");

    // Check if the kilometers driven exceeds the threshold
    const needsBrakeInspection = kilometersDriven >= brakeCheckThreshold;

    // Display the results in the HTML content
    const resultElement = document.getElementById("brakeCheckResult");
    resultElement.innerHTML = `
        <p>Your kilometers driven since the last brake inspection: ${kilometersDriven} km</p>
        <p>Recommended brake inspection threshold: ${brakeCheckThreshold} km</p>
        <p>Additional Information:</p>
        <ul>
            <li>Unusual brake noises: ${brakeNoise ? "Yes" : "No"}</li>
            <li>Brake vibrations: ${brakeVibration ? "Yes" : "No"}</li>
            <li>Brake fluid check or flush within the recommended period: ${brakeFluidCheck ? "Yes" : "No"}</li>
        </ul>
        <p> ${needsBrakeInspection ? "It's recommended to have your brakes inspected." : "Your brakes are within the recommended mileage range. However, always stay vigilant for any signs of brake issues."}</p>
    `;
}

// Function to clear the results
function clearResults() {
    const resultElement = document.getElementById("brakeCheckResult");
    resultElement.innerHTML = "";
}

// Function to start the brake check test
function startBrakeCheck() {
    // Check if the results are already displayed
    const resultElement = document.getElementById("brakeCheckResult");
    if (resultElement.innerHTML.trim() !== "") {
        // If results are displayed, clear them
        clearResults();
    } else {
        // If results are not displayed, start the brake check
        checkBrakeCondition();
    }
}