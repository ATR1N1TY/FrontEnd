const btn = document.querySelector('button')
const shareBox = document.querySelector('.share-box')
const overlay = document.querySelector('.overlay')

btn.addEventListener('click', () => {
    if(shareBox.style.display === ''){
        shareBox.style.display = 'flex'
        overlay.style.display = 'block'
    }else if(shareBox.style.display === 'flex'){
        shareBox.style.display = ''
        overlay.style.display = ''

    }
})

overlay.addEventListener('click', () => {
    shareBox.style.display = ''
    overlay.style.display = ''
})