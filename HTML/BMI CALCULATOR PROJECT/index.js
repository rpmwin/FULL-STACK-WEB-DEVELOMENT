'use strict';
        // Define variables for range sliders
        // Weight variables
        var weightOutput = document.getElementById("inputWeight");
        // Height variables
        var heightOutput = document.getElementById("inputHeight");
        // Update sliders in real time while dragging it
        function updateValueWeight(e) {
            weightOutput.value = e.srcElement.value;
        }
        function updateValueHeight(e) {
            heightOutput.value = e.srcElement.value;
        }
        // Calculate BMI
        function calculateBmi() {
            var weight = document.getElementById("inputWeight").value;
            var height = (document.getElementById("inputHeight").value);
            if(height == 0)
                alert("Height must be greater than 0!!!");
            else{
                var realbmi = (weight) / Math.pow(height, 2); // formula of bmi
                var realbmiOutput = document.getElementById("yourbmi");
                var messageOutput = document.getElementById("evaluationMessage");
                var roundedBmi = realbmi.toFixed(1);
                messageOutput.innerHTML = ""; // Clear message before calculating new BMI
                realbmiOutput.innerHTML = " " + roundedBmi; // Print BMI
                // Appropriate message for your BMI rating 
                if (roundedBmi > 26) {
                    messageOutput.innerHTML = "YOU'RE OVERWEIGHT !!!";
                } else if(roundedBmi > 18 && roundedBmi < 25.5){
                    messageOutput.innerHTML = "YOU'RE HEALTHY !!!";
                } else{
                    messageOutput.innerHTML = "YOU'RE UNDERWEIGHT !!!";
                }
            }

        }