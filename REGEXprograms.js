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
/* UC 8: Lets handle optional part i.e. xyz in abc.xyz@bridgelabz.co.in
NOTE: make sure only following are valid special characters _,+,-,. proceeding to xyz 
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
    }}

    /* UC 9: Finally lets close the expression with supporting optional parts.
Note: Top Level Domains (TLD) in the last part is the optional country code and its 2 characters only.
Sample Emails to Test
• A. Valid Emails
• 1. abc@yahoo.com,
• 2. abc-100@yahoo.com,
• 3. abc.100@yahoo.com
• 2. abc111@abc.com,
• 4. abc-100@abc.net,
• 5. abc.100@abc.com.au
• 6. abc@1.com,
• 7. abc@gmail.com.com
• 8. abc+100@gmail.com
B. Invalid Emails (TLD - Top Level Domains)
1. abc – must contains “@” symbol
2. abc@.com.my – tld can not start with dot “.”
3. abc123@gmail.a – “.a” is not a valid tld, last tld must contains at least two characters
4. abc123@.com – tld can not start with dot “.”
5. abc123@.com.com – tld can not start with dot “.”
6. .abc@abc.com – email’s 1st character can not start with “.”
7. abc()*@gmail.com – email’s is only allow character, digit, underscore and dash
8. abc@%*.com – email’s tld is only allow character and digit
9. abc..2002@gmail.com – double dots “.” are not allow
10. abc.@gmail.com – email’s last character can not end with dot “.”
11. abc@abc@gmail.com – double “@” is not allow
12. abc@gmail.com.1a -email’s tld which has two characters can not contains digit
13. abc@gmail.com.aa.au - cannont have multiple email’s tld
*/
{
    let  validateallemail=()=>{
     try{
        let allemail='abc@yahoo.com';
        let patternallemail=new RegExp('^[a-z]{3}([._+-][0-9A-Za-z])*[@][0-9A-Za-z]{1,}[.][a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$');
        if(patternallemail.test(allemail))
            console.log("valid email:"+allemail);
        
        else
            throw 'invalidemail';
        }
      catch (e){
            console.error(e);
      }

    }
    validateallemail();


}
