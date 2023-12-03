    // Function to check the condition of the brakes based on kilometers driven and additional questions
    function checkBrakeCondition() {
        // Set the threshold for brake check (e.g., 20,000 kilometers)
        const brakeCheckLimit = 20000;
       
        // Get the kilometers driven from the user (replace this with your actual mileage data)
        const kilometersDriven = prompt("How many kilometers have you driven since your last brake inspection?");
        console.log(typeof kilometersDriven);
            if(!kilometersDriven || isNaN (kilometersDriven)){
                alert("Please, enter a valid input")
                return;
            }

        // Additional questions
        const brakeNoise = prompt("Have you noticed any unusual noises when applying the brakes? Enter 'yes' or 'no'");
        const brakeVibration = prompt("Do you experience any vibrations when braking? Enter 'yes' or 'no'");
        const brakeFluidCheck = prompt("Have you had your brake fluid checked or flushed within the recommended period (e.g., the last 2 years)? Enter 'yes' or 'no'");

        // Check if the kilometers driven exceeds the limit
        const needsBrakeInspection = kilometersDriven >= brakeCheckLimit;

        // Display results
        const resultElement = document.getElementById("brakeCheckResult");
        resultElement.innerHTML = `
            <p>Your kilometers driven since the last brake inspection: ${kilometersDriven} km</p>
            <p>Recommended brake inspection threshold: ${brakeCheckLimit} km</p>
            <p>Additional Information:</p>
            <ul>
                <li>Unusual brake noises: ${brakeNoise}</li>
                <li>Brake vibrations: ${brakeVibration}</li>
                <li>Brake fluid check or flush within the recommended period: ${brakeFluidCheck}</li>
            </ul>
            <p>Result: ${needsBrakeInspection ? "It's recommended to have your brakes inspected." : "Your brakes are within the recommended mileage range. However, always stay vigilant for any signs of brake issues."}</p>
        `;
    }

    // Function to clear the results
    function clearResults() {
        const resultElement = document.getElementById("brakeCheckResult");
        resultElement.innerHTML = "";
    }

    //restart the brake check
    function startBrakeCheck() {
        // Check if the results are already displayed
        const resultElement = document.getElementById("brakeCheckResult");
        if (resultElement.innerHTML.trim() !== "") {
            // clear results
            clearResults();
        } else {
            //  start the brake check
            checkBrakeCondition();
        }
    }