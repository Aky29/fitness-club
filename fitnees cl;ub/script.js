function calculateBMI() {
      // Get the user inputs
      var weight = parseFloat(document.getElementById('weight').value);
      var height = parseFloat(document.getElementById('height').value);

      // Validate input
      if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid values.";
        return;
      }

      // Convert height from cm to meters
      var heightM = height / 100;

      // Calculate BMI
      var bmi = weight / (heightM * heightM);

      // Output BMI rounded to 2 decimal places
      document.getElementById('result').textContent = "Your BMI is: " + bmi.toFixed(2);
    }