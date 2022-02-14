/* Patterns or Regex:-
        Patterns or Regular expressions are special characters which help search data, matching
        complex patterns. Regular expressions are shortened as 'regexp' or 'regex’.
*/

/* UC 1: The Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used
by India Post. Create a regex pattern to validate PIN Code UC 1 PIN code 400088
*/{
    let validatepincode = () => {
        try {
            let Pincode = "516001";
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