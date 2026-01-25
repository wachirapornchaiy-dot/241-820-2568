function submitData(){
    let firstNameDOM = document.querySelector('input[name="firstname"]');
    let lastNameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[mame="age"]');

    let genderDOM = document.querySelector('input[name="gender"]');
    let interestDOM = document.querySelector('input[name="interest"]:checked');

    let descriptionDOM = document.querySelector('textarea[name=desscription');

    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value
    }
    console.log('submit data',userData);
}