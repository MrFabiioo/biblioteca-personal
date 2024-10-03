import { useContext } from "react"
import {RequestApiBooks} from '../../Context'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

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
                return(
                    <div>
                        <h1>No books found</h1>
                    </div>
                )
            }
        
    }

    return (
        <Layout>
            <h1>HOME</h1>
            <input type='text' placeholder='Buscar libro' className='rounded-lg border border-black w-80 p-4 mb-4' onChange={(event)=>context.setSearchByTitle(event.target.value)}></input>
            <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                renderView()
            }

            </section>

        </Layout>
            
        
        )
    }

export default Home