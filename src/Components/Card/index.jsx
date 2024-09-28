
function Card (){
    return(
        <div className='bg-white cursor-pointer w-56 h-90'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5'>Novelas</span>
                <img className='w-full h-full object-cover rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDM0Kv3OnyhOCAdBM31jxnymestxjOiyyVwA&s"  alt="libro"/>
            </figure>
            <p className='grid place-content-center'>
                <span className='text-xs font-medium'>Del amor y otros demonio</span>
                <span className='text-sm font-light'>Gabriel Garcia Marquez</span>
            </p>
        </div>
    )
}

export default Card