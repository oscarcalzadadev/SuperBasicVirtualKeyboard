//When a key is pressed, that value appears in the text field

    let inputField = document.getElementById('inputField');
    let keyboardElements = document.getElementsByTagName("aside");

    for (let i = 0; i < keyboardElements.length; i++) {
        //Dynamically adds event listener to all keyboard buttons
        keyboardElements[i].addEventListener('click', addToField);
        
        function addToField(e) {
            inputField.focus(); //focuses textarea
            
            //simulates a spacebar
            if (e.target.textContent === "") {
                inputField.textContent = inputField.textContent + " ";
            }
            //self-explanatory
            if (e.target.textContent === "Backspace") {
                inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);
            } else if (e.target.textContent === "Enter") {
                inputField.textContent = inputField.textContent + "\n";
            } else if (e.target.className === "disabled") {
                return;
            } else if (e.target.textContent === "Tab") {
                inputField.textContent = inputField.textContent + " " + " " + " " + " ";
            }  else {
                inputField.textContent += e.target.textContent;
                let storedText = inputField.textContent; //saves current text inside input field
            }
        }
    }





