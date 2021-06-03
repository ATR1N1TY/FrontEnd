const errorSign = document.querySelector('#error')
const reminder = document.querySelector('.please')
const input = document.querySelector('input')

// console.log(errorBtn, reminder, input)

input.addEventListener('input', () => {
    if(!(input.value.includes('@'))){
        errorSign.style.display = 'inline'
        reminder.style.display = 'inline'
        input.style.border = '1px solid red'
    }else{
        errorSign.style.display = ""
        reminder.style.display = ""
        input.style.border = ""
    }
})