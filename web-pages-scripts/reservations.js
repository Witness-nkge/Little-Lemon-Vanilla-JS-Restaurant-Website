document.getElementById('reserve-button').addEventListener('click',submitForm)

function submitForm() {

    const radioOne = document.getElementById('radio-one')
    const radioTwo = document.getElementById('radio-two')
    let radioValue 
    if (radioOne.checked){
        radioValue = "Indoor Seating"
    } else if (radioTwo.checked) {
        radioValue = "Outdoor Seating"
    } else {
        radioValue = ""
    }

    const date = document.getElementById('date').value
    const diners = document.getElementById('noDiners').value
    const occasion = document.getElementById('occasion').value
    const time = document.getElementById('time').value

    if (!radioOne.checked && !radioTwo.checked ) {}
    else if (!date) {}
    else if (diners == "") {}
    else if (occasion == "") {}
    else if (!time) {}
    else alert(`
        You have successfully reserved a table
        
        Type of Seating: ${radioValue}
        Date: ${date}
        Number of Diners: ${diners}
        Occasion: ${occasion}
        Time: ${time}

        If any of the above information is incorrect 
        please rebook the table with correct details
        `)
}
