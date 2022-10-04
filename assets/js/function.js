/**
 * Fild check
 */

const fildCheck = (fildVal) => {

    if (fildVal == 'Rectangle') {
        rectangleDiv.classList.remove('active');
    }else {
        rectangleDiv.classList.add('active');
    }
    if (fildVal == 'Square') {
        squareDiv.classList.remove('active')
    }else {
        squareDiv.classList.add('active')
    }
    if (fildVal == 'Triangle') {
        triangleDiv.classList.remove('active')
    }else {
        triangleDiv.classList.add('active')
    }
    if (fildVal == 'Circle') {
        circleDiv.classList.remove('active')
    }else {
        circleDiv.classList.add('active')
    }

}


/**
 * Custom Alert Function 
 */

 const setAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between" role="alert">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}



/**
 * Area Cal Function 
 */

const areaCal = (data, val1, val2 = null) => {
    let result = 0;
    if (data == 'Rectangle') {
        result = val1 * val2;
    }else if (data == 'Square') {
        result = val1 * val1;
    }else if (data == 'Triangle') {
        result = 1.5 * ( val1 * val2 );
    }else if (data == 'Circle') {
        result = 3.141 * ( val1 * val1 );
    }

    return `The area of ${data} is = ${result}`;
}    