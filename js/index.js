let signupButton = document.querySelector(".register-btn");
        let signupSection = document.querySelector(".signup-section");
        signupButton.onclick = function(){
            signupSection.classList.add('show-signup');
        }

        let closeButton = document.querySelector(".card-close");
        closeButton.onclick = function(){
            signupSection.classList.remove('show-signup');
        }
         
        // FORM VALIDATION AND PROGRESS SCRIPT
        function validation(totalNumber){
            let firstName = document.regform.firstname.value;
            let lastName = document.regform.lastname.value;
            let email = document.regform.email.value;
            let phone = document.regform.phone.value;
            let dob = document.regform.dob.value;
            let gender = document.regform.gender.value;
            let passWord = document.regform.password.value;

            // PROGRESS BAR CONDITIONS
            let sum = 0;
            let progressNumber = document.querySelector(".progress-number");
            if (firstName.length > 0){
                sum = 1; 
                progressNumber.innerHTML = sum;
                restCode(sum);
            }else{
                sum = 0;
                progressNumber.innerHTML = sum;
                restCode(sum);
            }
            if(lastName.length >= 1){
                let newNum = 1;
                sum = sum+newNum;
                progressNumber.innerHTML = sum;
                restCode(sum);
            }
            if(email.length >= 1){
                let newNum = 1;
                sum = sum+newNum;
                progressNumber.innerHTML = sum;
                restCode(sum);
            }
            if(phone.length >= 1){
                let newNum = 1;
                sum = sum+newNum;
                progressNumber.innerHTML = sum;
                restCode(sum);
            }
            if(dob.length >= 1){
                let newNum = 1;
                sum = sum+newNum;
                progressNumber.innerHTML = sum;
                restCode(sum);
            }
            if(gender.length >= 1){
                let newNum = 1;
                sum = sum+newNum;
                progressNumber.innerHTML = sum;
                restCode(sum);
            }
            if(passWord.length >= 1){
                let newNum = 1;
                sum = sum+newNum;
                progressNumber.innerHTML = sum;
                restCode(sum);
            }
        }

        // QUERY SELECTOR FUNCTION
        function getElem(element){
            return document.querySelector(element);
        }

        // FUNCTION  FOR REST OF REGISTER FORM CODES FOR THE "IF" CONDITIONS
        function restCode(sum){
            let width = (sum/7)*100;
            let progressBar = getElem(".progress-bar");
            progressBar.style.width = `${width}%`;
            if(sum >= 1 && sum <4){
                progressBar.style.backgroundColor = "#ea0038";
            }else if(sum == 4){
                progressBar.style.backgroundColor = "orange";
            }else if(sum == 7){
                progressBar.style.backgroundColor = "rgb(16, 196, 16)";
            }
        }
        console.log();