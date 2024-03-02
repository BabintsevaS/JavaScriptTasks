    
       
    // task 1
  /*
    let person = "John";
    let age = 100;

    if (age >= 0 && age < 21) {
        console.log("Возьмите стакан сока, " + person);
    } else if (age >= 21 && age < 80) {
        console.log("Могу предложить бокал вина, " + person);
    } else if (age >= 80) {
        console.log(person + ", " + "может, кефир?");
    } else console.log("Ошибка: ваш возраст меньше 0");  
    
   */ 
    // task 2
   /*
    let weight = 100;
    let height = 1.7;
    let bmi = weight/height**2;

    bmi = bmi.toFixed(1);

    if (bmi >= 0 && bmi < 18.5) {
        console.log("Ваш BMI: " + bmi + " Underweight - Мало каши ел!");
    } else  if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Ваш BMI: " + bmi + " Healthy Weight - Молодец! Так держать!");
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        console.log("Ваш BMI: " + bmi + " Overweight - А тортик лучше отдать соседке");
    } else if (bmi >= 30.0){
        console.log("Ваш BMI: " + bmi + " Obesity - С завтрашнего дня - на воде и огурцах!");
    } else console.log("Ошибка"); 
    
    */
    // task 3

    let personAge = 65;
    let price = 1000;
    const indexInfant = 0.1;
    const indexKid = 0.5;
    const indexAdult = 1;
    const indexSenior = 0.6;

    if (personAge >= 0 && personAge < 2){
        console.log("Билет для младенцев: " + price * indexInfant);
    } else if (personAge >= 2 && personAge < 18){
        console.log("Билет для детей: " + price * indexKid);
    } else if (personAge >= 18 && personAge < 65){
        console.log("Билет для взрослых: " + price * indexAdult);
    } else if (personAge >= 65) {
        console.log("Билет для пенсионеров: " + price * indexSenior);
    } else console.log("Ошибка: ваш возраст меньше 0");
    
