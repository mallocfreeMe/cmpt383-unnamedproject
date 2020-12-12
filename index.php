<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="lib/three.r119.min.js"></script>
    <script src="lib/vanta.birds.min.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background-image: url("img/background.jpeg");
            background-color: #cccccc;
            height: 500px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }

        .registerForm {
            background-color: white;
            box-shadow: 10px 10px 8px #888888;
            margin: auto;
            margin-top: 10%;
            width: 40%;
            border: 3px solid grey;
            padding: 10px;
            padding-left: 40px;
            padding-top: 20px;
            padding-bottom: 20px;
            font-family: 'Roboto', sans-serif;
            z-index: 100;
        }

        .registerForm h1 {
            font-size: 35px;
            padding-bottom: 10px;
        }

        .registerForm label {
            display: block;
            padding-top: 15px;
            padding-bottom: 15px;
            font-weight: bold;
        }

        .registerForm input {
            outline: none;
            padding-left: 5px;
            padding-right: 40%;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 20px;
            background-color: white;
        }

        .txtHintP {
            padding-top: 10px;
        }

        .intro {
            padding-bottom: 10px;
        }

        #submitBtn {
            margin-right: 5px;
            background-color: #4778B2;
            color: white;
        }

        #resetBtn {
            background-color: white;
        }

        #submitBtn,
        #resetBtn {
            outline: none;
            font-size: 15px;
            border: 1px solid grey;
            border-radius: 5px;
            margin-top: 20px;
            margin-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        #submitBtn:hover {
            cursor: pointer;
        }

        #resetBtn:hover {
            cursor: pointer;
        }

        .toLogin {
            color: #4778B2;
            text-decoration: none;
        }

        .toLogin:hover {
            text-decoration: underline;
        }
    </style>
</head>


<body>
    <section class="registerForm" id="background">
        <h1>Sign up</h1>
        <p class="intro">Please fill this form to create an account.</p>
        <form autocomplete="off" name="myForm" action="processRegister.php" id="loginForm" onsubmit="return validateForm()" method="post">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" onkeyup="showHint(this.value)">
            <br>
            <p class="txtHintP">Suggestions: <span id="txtHint"></span></p>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
            <br>
            <label for="password2">Confirm Password</label>
            <input type="password" name="password2" id="password2">
            <br>
            <input type="submit" name="submit" value="Submit" id="submitBtn">
            <button type="button" id="resetBtn" onclick="resetInput()">Reset</button>
        </form>
        <p>Already have an account? <a class="toLogin" href="login.php">Login here</a></p>
    </section>

    <script>
        VANTA.BIRDS({
            el: "#background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundAlpha: 0.00
        })

        function validateForm() {
            let x = document.forms["myForm"]["username"].value;
            let y = document.forms["myForm"]["password"].value;
            let z = document.forms["myForm"]["password2"].value;

            if (x === "") {
                alert("username must be filled out.");
                return false;
            } else if (y === "") {
                alert("password must be filled out.");
                return false;
            } else if (z === "") {
                alert("confirm password must be filled out.");
                return false;
            } else if (y !== z) {
                alert("Your two passwords must match.");
                return false;
            }
        }

        function resetInput() {
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("password2").value = "";
        }

        // this code is taken from https://www.w3schools.com/pHP/php_ajax_php.asp
        // when a user types a character in the input field, a function called "showHint()" is executed.
        // it creates a XMLHttpReuquest object to create rest call (ajax call) over HTTP
        function showHint(str) {
            if (str.length == 0) {
                document.getElementById("txtHint").innerHTML = "";
                return;
            } else {
                let xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("txtHint").innerHTML = this.responseText;
                    }
                };
                xmlhttp.open("GET", "gethint.php?q=" + str, true);
                xmlhttp.send();
            }
        }
    </script>
</body>

</html>