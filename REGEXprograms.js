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
/* UC 4: Make sure 400 088 is also valid along with 400088
*/{
    let validatepincode = () => {
        try {
            let Pincode = "400 088";
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
/* UC 5:- Validate Email address with a regex. The email consists of minimum 3 and optional 2 more
parts with mandatory @ and .    ex:- abc.xyz@bridgelabz.co.in 
Here abc, bridgelabz and co are mandatory and the remaining 2 are optional
To begin with lets validate the mandatory part and start with abc   [A-Z]{3}[@][bridgelabz].?[co].?[a-z]{2}
*/{let validateemail=()=>{
    try{
    let email='abc.xyz@bridgelabz.co.in';
    let emailpattern=new RegExp('^(abc).?[a-z]{3,}[@](bridgelabz).?(co).?[a-z]{2,}$');
    if (emailpattern.test(email)){
                console.log("valid email :" + email);}
    else{
                throw 'invalid email';}
        }
        catch (e) {
            console.error(e);
        }
}
validateemail();}
/*UC 6: Ensure @ and validate the mandatory 2nd part i.e. bridgelabz */
let validateemail=()=>{
    try{
    let email='abc.xyz@bridgelabz.co.in';
    let emailpattern=new RegExp('^(abc).?[a-z]{3,}[@](bridgelabz).?(co).?[a-z]{2,}$');
    if (emailpattern.test(email)){
                console.log("valid email :" + email);}
    else{
                throw 'invalid email';}
        }
        catch (e) {
            console.error(e);
        }
}
/* UC 7: Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co */
{
    let validateemail=()=>{
        try{
        let email='abc.xyz@bridgelabz.co.in';
        let emailpattern=new RegExp('^(abc).?[a-z]{3,}[@](bridgelabz).?(co).?[a-z]{2,}$');
        if (emailpattern.test(email)){
                    console.log("valid email :" + email);}
        else{
                    throw 'invalid email';}
            }
            catch (e) {
                console.error(e);
            }
    }
}
