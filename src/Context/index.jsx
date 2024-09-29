import {createContext, useState,useEffect} from "react";

export const RequestApiBooks = createContext()

export const RequestApiBooksProvider =({children})=>{
    const [books, setBooks] = useState(null)
    const [searchByTitle,setSearchByTitle] = useState('')
    console.log(searchByTitle)

    useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products').
    then(response=>response.json()).
    then(data=>setBooks(data))},[])

    return(
        <RequestApiBooks.Provider  value={{books,setBooks,searchByTitle,setSearchByTitle}}>

            {children}
        </RequestApiBooks.Provider>
    )
}