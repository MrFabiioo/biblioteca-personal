import axios from "axios";
import endPoints from "./index";

const getAllCategories = async (token)=>{
    const response = await axios.get(endPoints.categories.getAllCategories,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); 
    return response.data 
}

export{getAllCategories};