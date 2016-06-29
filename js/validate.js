function validate(form) {

  var name = document.getElementById('name').value,
      email = document.getElementById('email').value,
      phone = document.getElementById('phone').value,
      comment = document.getElementById('comment').value,
      errors = document.querySelectorAll('.error'),
      nameVal = false,
      emailVal = false,
      phoneVal = false,
      commentVal = false

    for (var i = 0; i < errors.length; i++) {
      errors[i].parentElement.removeChild(errors[i])
    }

// Name (required, minimum length of 2)
    if (name.length < 2 || /\d/.test(name)) {
      console.log('invalid name')
      var div = document.createElement("div")
      div.style.color = 'red'
      div.innerHTML = 'Invalid Name'
      div.classList.add('error')
      document.getElementById('name').parentElement.appendChild(div)
    }
    else {
      console.log('valid name')
      nameVal = true
    }

// Email (required, email formatting)
    if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
      console.log('invalid email')
      var div = document.createElement("div")
      div.style.color = 'red'
      div.innerHTML = 'Invalid Email'
      div.classList.add('error')
      document.getElementById('email').parentElement.appendChild(div)
    }
    else {
      console.log('valid email')
      emailVal = true
    }

// Phone (required, at least 10 numeric digits)
    if (phone.length < 10 || /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone) === false) {
      console.log('invalid phone')
      var div = document.createElement("div")
      div.style.color = 'red'
      div.innerHTML = 'Invalid Phone'
      div.classList.add('error')
      document.getElementById('phone').parentElement.appendChild(div)
    }
    else {
      console.log('valid phone')
      phoneVal = true
    }

// Comment (not required, but if filled in, must be minimum of 5 characters)

    if (comment.length < 5) {
      console.log('invalid comment')
      var div = document.createElement("div")
      div.style.color = 'red'
      div.innerHTML = 'Invalid Comment'
      div.classList.add('error')
      document.getElementById('comment').parentElement.appendChild(div)
    }
    else {
      console.log('valid phone')
      commentVal = true
    }

    if (nameVal === true && emailVal === true && phoneVal === true && commentVal === true) {
      return true
    }
    else {
      return false
    }
}
