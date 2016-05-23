// JS3 - Validations...
var validInput = false;

function isNumber(n) { 
    return !isNaN(parseFloat(n)) && isFinite(n); 
}

// for phone number
// do {
//     var phoneNumber = 
//         prompt("Please enter your phone number (format:303-123-1234)\nDon't worry we won't SPAM you, promise", "phone number here");
        
//     if (phoneNumber.length === 12) {
//             if (phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7) === '-') {
//                 var numberWithoutDashes = phoneNumber.replace(/-/g, '');
                
//                 if (isNumber(numberWithoutDashes)) {
//                     alert("Thank you. What a great phone number: " + numberWithoutDashes);
//                     validInput = true;
//                 }
//                 else {
//                     alert("Error: Please enter phone as a number");
//                 }
//             } 
//             else {
//                 alert("You need to enter dashes in the correct locations please.");
//             }
//     } 
//     else {
//         alert("You need to enter a full 10 digit number plus dashes please.");
//     }
// } while (!validInput);

// for birth date - must follow the format xx/xx/xx
// Please Note: for this exercise we are not validating whether a month is between 01-12
//              or days are 1-31 (or 28 depending on month)
// validInput = false;
// do {
//     var birthDate = 
//         prompt("Please enter your birth date (format: xx/xx/xx)", "birth date here");
        
//     if (birthDate.length === 8) {
//             if (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/') {
//                 var birthDateNoSlashes = birthDate.replace(/\//g, '');
                
//                 if (isNumber(birthDateNoSlashes)) {
//                     alert("Thank you. Valid Birth Date: " + birthDate);
//                     validInput = true;
//                 }
//                 else {
//                     alert("Error: format: Please use a number for the birthDate");
//                 }
//             } 
//             else {
//                 alert("Error: format: xx/xx/xx");
//             }
//     } 
//     else {
//         alert("Error: format: xx/xx/xx");
//     }
// } while (!validInput);

// for postalCode - format xxxxx OR xxxxx-xxxx
// validInput = false;
// do {
//     var postalCode = 
//         prompt("Please enter your postal code (xxxxx or xxxxx-xxxx)", "postal code");
        
//     if (postalCode.length === 5) {
//         alert("Thank you. Postal Code: " + postalCode);
//         validInput = true;
//     } 
//     else if (postalCode.length === 10) {
//         if (postalCode.charAt(5) === '-') {
//             // no need to check isNumber() because Postal Codes an include letters
//             alert("Thank you. Postal Code: " + postalCode);
//         }
//         else {
//             alert("Error: format: xxxxx-xxxx");
//         }
//     }
//     else {
//         alert("Error: format: xxxxx or xxxxx-xxxx");
//     }
// } while (!validInput);

// for state abbrevation
validInput = false;
do {
    var state = 
        prompt("Please enter your state abbrevation (Ex: 'CO')", "state abbrevation");
  
    if (state.length === 2) {
            if (!isNumber(state)) {
                var isUpper = state.toUpperCase();
                
                if (state === isUpper) {
                    alert("Thank you. What a great state abbrevation: " + state);
                    validInput = true;
                }
                else {
                    alert("Error: format: Needs to be capial letters please.");

                }
            } 
            else {
                alert("Error: format: Needs to be letters.");
            }
    } 
    else {
        alert("Error: format: ('CO')");
    }
    
} while (!validInput);

// for married
validInput = false;
do {
    var isMarried = 
        prompt("Can I ask you a question please? Are you married? (yes/Yes or no/NO)");
    
    if (!isNumber(isMarried)) {
        // convert to lowercase for comparison
        var lowerIsMarried = isMarried.toLocaleLowerCase(isMarried);
        
        if (lowerIsMarried === "yes") {
            alert("Great, good luck!");
            validInput = true;
            } 
        else if (lowerIsMarried === "no") {
            alert("That's ok, maybe you will find your match someday.");
            validInput = true;
        }
        else {
            alert("Error: format: (yes/Yes or no/NO");
        }
    } 
    else {
        alert("Error: format: (yes/Yes or no/NO");
    }
} while (!validInput);
