const submitData = async () =>{
    let firstNameDOM = document.querySelector('input[name="firstname"]');
    let lastNameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[name="age"]');

    let genderDOM = document.querySelector('input[name="gender"]');
    let interests = document.querySelector('input[name="interests"]:checked');

    let descriptionDOM = document.querySelector('textarea[name=desscription');
    let messageDOM= document.getElementById('message')

    let userData ={
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age:ageDOM.value,
        gender:genderDOM.value,
        description:descriptionDOM.value,
        interests:interest
    }
    try{
    console.log('submitData',userData);
    const response = await axios.post('http://localhost:8000/users',userData)
    console.log('response',response);
    }catch(error){
    if(error.response){
        console.log('Error response:',error.response.data.message);
    }
    messageDOM.innerText = 'การบันทึกข้อมูลผิดพลาด'
    messageDOM.className = 'message danger'
    
}
console.log('submitData',userData);
}