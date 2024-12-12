const ValidationObject = {
    validateName: (name) =>{
        const nameRegex = /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (email.length > 254) { // RFC 5321 
        
        return { isValid: false, error: 'Email is too long' }; 
        
        }
        
        
        const passwordRegex = {
                    minLength: 8,
                    maxLength: 128,
                    hasUpperCase: /[A-Z]/,
                    hasLowerCase: /[a-z]/,
                    hasNumbers: /[0-9]/,
                    hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            };
            if (passwordRegex.length < passwordRegex.minLength){
                return 'Password should be more than equal to 8 characters'
            }

            if (passwordRegex.length > passwordRegex.maxLength){
                return 'Password should be less than 128 character'
            }

            if (passwordRegex.hasLowerCase.test(password)== false){
                return 'Password should have some LowerCase character a-z'  
            }
            
    }
}