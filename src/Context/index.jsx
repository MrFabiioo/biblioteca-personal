import {createContext, useState,useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {getAllBooks} from "../services/book.service"

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

    const{isAuthenticated,getAccessTokenSilently}=useAuth0();


    useEffect(()=>{
        async function getBooks(){
            if(!isAuthenticated) return;
            
            try {
                const token = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: `https://api.librery.co`,
                        scope: "openid profile email read:endpoints",
                      },  
                });

                const response = await getAllBooks(token);
                setBooks(response);
            } catch (error) {
                throw new Error(" Encontramos un error en: ",error);
                
            }
        }
        getBooks();
    },[isAuthenticated,getAccessTokenSilently])
  

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