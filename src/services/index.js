const API = import.meta.env.VITE_NEXT_PUBLIC_API_URL;
const VERSION = import.meta.env.VITE_NEXT_PUBLIC_API_VERSION;


const endPoints ={
    books:{
        getBook:(id)=>`${API}/${VERSION}/books/${id}`,
        getAllBooks:`${API}/${VERSION}/books`,
    },
    categories:{
        getAllCategories:`${API}/${VERSION}/category`,
        getCategory:(id)=>`${API}/${VERSION}/category/${id}`,
    }
}

export default endPoints;