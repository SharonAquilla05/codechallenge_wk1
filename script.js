const grade =prompt ("Enter Your Grade:");
UserGrade(grade);



function UserGrade (userInput){
    let finalGrade = "E";
    
       if(userInput >=0 && userInput <40){
        finalGrade = "E";
       }
       else if(userInput>=40 && userInput< 49){
        finalGrade = "D";
       }
       else if(userInput>=49 && userInput<=59){
        finalGrade = "C";}
        else if(userInput>=60 && userInput <=79){
            finalGrade = "B";
        }
        else if(userInput>=79 && userInput <=100){
            finalGrade ="A";
        }
        return finalGrade;
}
Document.get.ElementaryById("response").innerText = finalGrade;