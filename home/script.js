
/* this function gets rid of the bottom div, needs to be functional to work on the web.
but needs to be commented out for other functions to work while using vscode and live server*/

/*document.querySelector('.disclaimer').style.display = 'none';*/



/* On load calls */

window.addEventListener('load', bookArray());

window.addEventListener('load', displayDropDownConetent());

window.addEventListener('load', bookContentSizing());




/* Functions */

function displayDropDownConetent() {
    window.addEventListener('mouseup', function(event) {
        const buttonText = document.querySelector('.dropDownButton')
        const menu = document.querySelector('.dropDownButton')
        const menuContent = document.querySelector('.dropDownContent')
        if (event.target != menu && event.target != menuContent){
            menuContent.style.display = 'none'
            buttonText.innerHTML = 'Menu'
        } 
        else if (buttonText.innerHTML === 'Close' && menuContent.style.display === 'block') {
            menuContent.style.display = 'none'
            buttonText.innerHTML = 'Menu'
        } else {
            menuContent.style.display = 'block'
            buttonText.innerHTML = 'Close'
        }
        
    })
};

function bookArray() {
    const books = document.querySelectorAll('.bookBox')
    const contents = document.querySelectorAll('.bookContent')
    const images = document.querySelectorAll('.bookImage')
    let countA = 0
    books.forEach(book => {
        countA += 1
        book.setAttribute('class', 'bookBox' + countA)})
    
    let countB = 0
    contents.forEach(content => {
        countB += 1
        content.setAttribute('class', 'bookContent' + countB)})
    
    let countC = 0
    images.forEach(image => {
        countC += 1
        image.setAttribute('class', 'bookImage' + countC)})
};

/* I cant even begin with this, I dont remeber how it worked immediately after I finished it, but it works */
function bookContentSizing() {
    let arrayOfClickedClassNumbers = []
   
    window.addEventListener('mouseup', function(event) {
        let clickedTarget = event.target
        let clickedClassNumber = ''



        try{
            if (clickedTarget.tagName === 'DIV' || clickedTarget.tagName === 'IMG' ) {
                if (clickedTarget.className != '*bookContent*') {
                    clickedClassNumber = parseInt(clickedTarget.getAttribute('class').slice(-1))
                }
            }
        }
        catch(nul) {null}



        if (Number.isInteger(clickedClassNumber)) {
            arrayOfClickedClassNumbers.push(clickedClassNumber)
        }
        if (arrayOfClickedClassNumbers.length > 4) {
            arrayOfClickedClassNumbers.shift()
        }
        let bookContent = document.querySelector('.bookContent' + clickedClassNumber)
        const lastBookClickedBookContent = document.querySelector('.bookContent' + arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-1])
        


        let bookWidth = 'null'
        let bookHeight = 'null'
        try {
            bookWidth = document.querySelector('.bookBox'+ clickedClassNumber).clientWidth
            bookHeight = document.querySelector('.bookBox'+ clickedClassNumber).clientHeight
        }
        catch (err) {null}
        const newWidth =  bookWidth + 'px';
        const newHeight = bookHeight *.95 + 'px';



        if ( clickedTarget.tagName.length >= 3 && clickedTarget.className === '' && bookWidth === 'null' && clickedTarget.tagName != 'BUTTON' || clickedTarget.className === 'topBox' ) {
            bookContent = lastBookClickedBookContent
            bookContent.style.visibility = 'hidden'
            bookContent.style.width = '0px'
            bookContent.style.height = '0px'
         }else if (arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-2] === arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-1] && clickedTarget.tagName === 'IMG') {
            if (lastBookClickedBookContent.style.visibility === 'hidden') {
                bookContent.style.visibility = 'visible'
                bookContent.style.width = newWidth
	            bookContent.style.height = newHeight
            } else if (lastBookClickedBookContent.style.visibility === 'visible') {
                try {
                    bookContent.style.visibility = 'hidden'
                    bookContent.style.width = '0px'
                    bookContent.style.height = '0px'
                } catch (err) {null}   
            } 
        } else if (arrayOfClickedClassNumbers.length >= 2 && arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-2] != arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-1] && bookHeight != 'null') {
            bookContent = document.querySelector('.bookContent' + arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-2])
            bookContent.style.visibility = 'hidden'
            bookContent.style.width = '0px'
            bookContent.style.height = '0px'
            bookContent = document.querySelector('.bookContent' + arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-1])
            bookContent.style.visibility = 'visible'
            bookContent.style.width = newWidth
	        bookContent.style.height = newHeight
        } else {
            try {
                bookContent.style.visibility = 'visible'
                bookContent.style.width = newWidth
                bookContent.style.height = newHeight
            }
            catch (err) {null}
        }
        
    })
};