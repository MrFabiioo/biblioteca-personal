function Unauthorized (){
    return(
        <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-blue-700">Error 401</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              ! Acceso denegado¡
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            ! No tienes autorizacion para acceder a este contenido ¡
            </p>
          </div>
        </main>  
        </>
    );
}

export default Unauthorized;