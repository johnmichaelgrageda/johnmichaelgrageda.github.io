
    // Get the H2 and div contanier elements by their IDs
    const clickHeading = document.getElementById("h2principles");
    const container = document.getElementById("principles-container");

    //calling the function
    clickHeading.addEventListener("click", function() {
       
        if (container.style.display === "none" || container.style.display === "") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    });
