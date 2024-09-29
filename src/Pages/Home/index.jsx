import { useContext } from "react"
import {RequestApiBooks} from '../../Context'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {
    const context = useContext(RequestApiBooks)    


    return (
        <Layout>
            <h1>HOME</h1>
            <input type='text' placeholder='Buscar libro' className='rounded-lg border border-black w-80 p-4 mb-4' onChange={(event)=>context.setSearchByTitle(event.target.value)}></input>
            <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                context.books?.map(book=>(
                    <Card key={book.id} data={book} />
                ))
            }

            </section>

        </Layout>
            
        
        )
    }

export default Home