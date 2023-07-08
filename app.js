/* 
    1. Grab user input.
    2. Use the button to add the user input to the page
    3. Display user input on the page and create a new element
    4. Add a delete function to the new element
    5. Add an Edit function to the new element



*/


let playlistContainer = document.querySelector('#primary-container')
let playlistBtn = document.querySelector('#add-song-btn')
let inputField = document.querySelector('#input-song')


inputField.addEventListener('input', (e)=>{
    
    console.log(e.target.value)
    
    let eventValue = e.target.value
    playlistBtn.addEventListener('click', (e)=>{
        let span = document.createElement('span')
        span.textContent = eventValue
        playlistContainer.append(span)
    })
    
})


// inputField.addEventListener('input', (e)=>{
//     let input = e.target.value
//     playlistBtn.addEventListener('click', (input)=>{


//         console.log(input)
//         console.log('Button Clicked!')
//     })
// })

// p.remove()
// p.textContent

// forEach (if(includes('')){

// })