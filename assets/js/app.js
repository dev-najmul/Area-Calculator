//get element

const areaCalForm = document.getElementById('areaCalForm');
const seclect =areaCalForm.querySelector('select[name = "selectAreaType"]');
const Length =areaCalForm.querySelector('input[name = "Length"]');
const Width =areaCalForm.querySelector('input[name = "Width"]');
const scLength =areaCalForm.querySelector('input[name = "scLength"]');
const Height =areaCalForm.querySelector('input[name = "Height"]');
const Base =areaCalForm.querySelector('input[name = "Base"]');
const Radious =areaCalForm.querySelector('input[name = "Radious"]');

const msg = document.querySelector('.msg');
const msgL = document.querySelector('.msgL');
const ft = document.querySelector('#ft');
const rectangleDiv = document.querySelector('#rectangle');
const squareDiv = document.querySelector('#square');
const triangleDiv = document.querySelector('#triangle');
const circleDiv = document.querySelector('#circle');

//hide get vlu from user fild
rectangleDiv.classList.add('active');
squareDiv.classList.add('active');
triangleDiv.classList.add('active');
circleDiv.classList.add('active');

//show fild by query
seclect.onchange = () => {
    fildCheck(seclect.value);
    msgL.innerHTML = '';
    msg.innerHTML = '';
}
//form validation
areaCalForm.addEventListener('submit', (e) => {
    e.preventDefault();


    if (seclect.value == ''){
        msg.innerHTML = setAlert('Select Your Type')
    }else{
        
        if (seclect.value == 'Rectangle') {
            msgL.innerHTML = setAlert(`${areaCal(seclect.value, Length.value , Width.value)}`, 'success');
            ft.style.display = 'block';
        }else if (seclect.value == 'Square') {
            msgL.innerHTML = setAlert(`${areaCal(seclect.value, scLength.value)}`, 'success');
            ft.style.display = 'block';
        }else if (seclect.value == 'Triangle') {
            msgL.innerHTML = setAlert(`${areaCal(seclect.value, Height.value, Base.value)}`, 'success');
            ft.style.display = 'block';
        }else if (seclect.value == 'Circle') {
            msgL.innerHTML = setAlert(`${areaCal(seclect.value, Radious.value)}`, 'success');
            ft.style.display = 'block';
        }
    }

})

