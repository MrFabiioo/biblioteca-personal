import { useContext } from "react"
import {RequestApiBooks} from '../../Context'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import BookNotFound from "../../Components/BookNotFound"
function Home() {
    const context = useContext(RequestApiBooks)    

    const renderView =()=>{
                if (context.filteredBooks?.length>0) {
                    return(
                        context.filteredBooks?.map(book=>(
                            <Card key={book.id} data={book} />
                        ))
                    )               
            }else{
                return(<BookNotFound/>)
            }
        
    }

    return (
        <Layout>
            <h1>HOME</h1>
            <input type='text' placeholder='Buscar libro' className='rounded-lg border border-black w-80 p-4 mb-4' onChange={(event)=>context.setSearchByTitle(event.target.value)}></input>
            {context.filteredBooks?.length>0 ? 
            <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                renderView()
            }

            </section>
            : <BookNotFound/>}

        </Layout>
            
        
        )
    }

export default Home