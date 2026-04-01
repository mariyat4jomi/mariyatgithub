<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Marks Calculator</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            text-align: center;
            margin-top: 60px;
        }

        .container {
            background-color: #ffffff;
            padding: 20px;
            width: 320px;
            margin: auto;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        input {
            width: 90%;
            padding: 8px;
            margin: 8px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        button {
            padding: 10px 15px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        #result {
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>

<body>

<div class="container">
    <h2>Marks Calculator</h2>

    <input type="number" id="sub1" placeholder="Enter Subject 1 Marks"><br>
    <input type="number" id="sub2" placeholder="Enter Subject 2 Marks"><br>
    <input type="number" id="sub3" placeholder="Enter Subject 3 Marks"><br>

    <button onclick="calculateMarks()">Calculate</button>

    <div id="result"></div>
</div>

<script>
    function calculateMarks() {
        // Get input values
        let m1 = Number(document.getElementById("sub1").value);
        let m2 = Number(document.getElementById("sub2").value);
        let m3 = Number(document.getElementById("sub3").value);

        // Calculate total and average
        let total = m1 + m2 + m3;
        let average = total / 3;

        // Display result
        document.getElementById("result").innerHTML =
            "Total Marks: " + total + "<br>Average Marks: " + average.toFixed(2);
    }
</script>

</body>
</html>
