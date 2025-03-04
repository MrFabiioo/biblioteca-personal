import { useContext } from "react";
import { RequestApiBooks } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Components/Loading";

function Home() {
  const context = useContext(RequestApiBooks);
  const {isAuthenticated,loginWithRedirect,isLoading} = useAuth0();

  const renderView = () => {
    if (context.filteredBooks?.length > 0) {
      return context.filteredBooks.map((book) => <Card key={book.id} data={book} />);
    } else {
      return null;
    }
  };

  if(isLoading){
    return <Loading/>
  }

  return (
    <Layout>
      {/* { isAuthenticated &&
      <button onClick={() => logout()}>Logout</button>
      } */}
      {/* SVG Background */}
      {!isAuthenticated && <div className="h-screen w-screen grid grid place-items-center"> <button className="w-64 text-white bg-gradient-to-r from-blue-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2" onClick={()=>loginWithRedirect()}>Login</button> </div>} 
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      {/* Renderiza solo si está autenticado */}
      {isAuthenticated && (
        <>
          <input
            type="text"
            placeholder="Buscar libro"
            className="rounded-lg border border-blue-700 w-80 p-4 mb-12 mt-6"
            onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
          
          {context.filteredBooks?.length > 0 && (
            <section className="grid gap-4 sm:grid-cols-4 w-full max-w-screen-lg grid-cols-2 place-items-center">
              {renderView()}
            </section>
          )}
        </>
      )}
    </Layout>
  );
}

export default Home;
