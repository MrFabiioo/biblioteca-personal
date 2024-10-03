import {createContext, useState,useEffect} from "react";

export const RequestApiBooks = createContext()

export const RequestApiBooksProvider =({children})=>{
    // get books
    const [books, setBooks] = useState(null)
    // get by title
    const [searchByTitle,setSearchByTitle] = useState(null)
    //filtered
    const [filteredBooks, setFilteredBooks] = useState(null);
    // get by category
    const [searchByCategory,setSearchByCategory] = useState(null);


    useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products').
    then(response=>response.json()).
    then(data=>setBooks(data))},[])

    const filteredBooksByTitle = (books,searchByTitle)=>{
        console.log('books: '+ books)
        return books?.filter(book => book.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filteredBooksByCategory = (books, searchByCategory) => {
        return books?.filter(book => book.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    
    const filterBy = (searchType, books, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredBooksByTitle(books, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
            return filteredBooksByCategory(books, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredBooksByCategory(books, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
            return books
        }
    }
    
    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredBooks(filterBy('BY_TITLE_AND_CATEGORY', books, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredBooks(filterBy('BY_TITLE', books, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredBooks(filterBy('BY_CATEGORY', books, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredBooks(filterBy(null, books, searchByTitle, searchByCategory))
        }, [books, searchByTitle, searchByCategory])

    return(
        <RequestApiBooks.Provider  value={{books,setBooks,searchByTitle,setSearchByTitle,filteredBooks, setFilteredBooks,searchByCategory,setSearchByCategory}}>

            {children}
        </RequestApiBooks.Provider>
    )
}