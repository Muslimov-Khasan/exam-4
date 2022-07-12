let searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', evt => {
    if(evt.code === 'Enter'){
        cardBlock.innerHTML = `
        <div class="my-slider">
        <div class="cssload-loader">
            <div class="cssload-inner cssload-one"></div>
            <div class="cssload-inner cssload-two"></div>
            <div class="cssload-inner cssload-three"></div>
        </div>    
        </div>`

        count = 1
        
        getBooks().then(()=>{
            try {
                renderBooks(Data)
            } catch (error) {
                console.log(error.message);
            }
        })
        
        prevPage.classList.add('page__disablet')
        page_1.classList.add('page__active')

        renderPage()

    }
})



async function getNewestBooks(){
    let books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput.value}&startIndex=${(count-1)*10}&orderBy=newest`)
    books = await books.json()
    results = books.totalItems
    Data = books.items
}