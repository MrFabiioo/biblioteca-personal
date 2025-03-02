import axios from "axios";
import endPoints from "./index";

const getAllBooks = async (token)=>{
    const response = await axios.get(endPoints.books.getAllBooks,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); 
    return response.data 
}

const getOneBook = async (id,token)=>{
  const response = await axios.get(endPoints.books.getBook(id),{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); 
  return response.data 
}

export{getAllBooks,getOneBook};