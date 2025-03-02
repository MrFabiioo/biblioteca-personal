import { useContext } from "react"
import {RequestApiBooks} from '../../Context'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import BookNotFound from "../../Components/BookNotFound"
import { useAuth0 } from "@auth0/auth0-react"
function Home() {
    const context = useContext(RequestApiBooks)    
    const {logout}=useAuth0();
    
    const renderView =()=>{
                if (context.filteredBooks?.length>0) {
                    return(
                        context.filteredBooks?.map(book=>(
                            <Card key={book.id} data={book} />
                        ))
                    )               
            }else{
                return null;
            }
        
    }
    

    return (
        <Layout>
          <button onClick={()=>{logout()}} >Logout</button>
            {/* <h1 className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8" >Pagina principal </h1> */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
            <input type='text' placeholder='Buscar libro' className='rounded-lg border border-blue-700 w-80 p-4 mb-12' onChange={(event)=>context.setSearchByTitle(event.target.value)}></input>
            {context.filteredBooks?.length>0 ? 
            <section className='grid gap-4 sm:grid-cols-4 w-full max-w-screen-lg  grid-cols-2 place-items-center'>
            {
                renderView()
            }

            </section>
            : null}

        </Layout>
        
            
        
        )
    }

export default Home