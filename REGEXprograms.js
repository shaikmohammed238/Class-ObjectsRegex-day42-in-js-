/* Patterns or Regex:-
        Patterns or Regular expressions are special characters which help search data, matching
        complex patterns. Regular expressions are shortened as 'regexp' or 'regex’.
*/

/* UC 1: The Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used
by India Post. Create a regex pattern to validate PIN Code UC 1 PIN code 400088
*/{
    let validatepincode = () => {
        try {
            let Pincode = "400088";
            let pincodepattern = new RegExp('^[1-9][0-9]{5}$');
            if (pincodepattern.test(Pincode))
                console.log("pincode is valid:" + Pincode);
            else
                throw 'error pincode is invalid';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatepincode();
}
/* UC 2: Restrict the PIN code from taking alphabets or special characters at the beginning.
Check for A400088 – this should fail
*/{
    let validatepincode = () => {
        try {
            let Pincode = "A400088";
            let pincodepattern = new RegExp('^[1-9][0-9]{5}$');
            if (pincodepattern.test(Pincode))
                console.log("pincode is valid:" + Pincode);
            else
                throw 'error pincode is invalid';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatepincode();
}
/* UC 3: Restrict the PIN code from taking alphabets or special characters at the End.
Check for 400088B – this should fail
*/
{
    let validatepincode = () => {
        try {
            let Pincode = "400088B";
            let pincodepattern = new RegExp('^[1-9][0-9]{5}$');
            if (pincodepattern.test(Pincode))
                console.log("pincode is valid:" + Pincode);
            else
                throw 'error pincode is invalid';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatepincode();
}    
