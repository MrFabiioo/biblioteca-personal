import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Layout from '../Layout/index';
import NotReview from "../NotReview";
import axios from 'axios';
import endPoints from '../../services/index';
import Loading from "../Loading";
function BookDetail() {
  const { id } = useParams(); // Captura el ID desde la URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    if (!id) return;
    
    async function getBook() {
      try {
        const response = await axios.get(endPoints.books.getBook(id));
        setBook(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Cuando termine la petición, desactiva la carga
      }
    }
    
    getBook();
  }, [id]);

  if (loading) {
    return null;
  }

  if (!book || !book.review?.title) {
    return (
      <Layout>
        <NotReview book={book} />
      </Layout>
    );
  }

  return (
    <>
    
    <Layout>
      <div className="w-full px-7">
      <div className=" w-full h-36 rounded-xl my-3  bg-[url(https://www.explorationfilms.com/narnia/images/header.jpg)]"></div>
      </div>
      
      
      <div className="relative isolate overflow-hidden bg-white px-6 mb-24 lg:overflow-visible lg:px-0">
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
      <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="">
            <p className="text-base/7 font-semibold text-blue-700 tracking-widest">{book.title}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {book.review?.title}
              </h1>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 tracking-widest">Sobre el autor: </h2> 
              <img  className="m-3 w-20 h-20 rounded-full object-cover " src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyYlit0amJw4L5zAar4CrefghzIKEL9QXG-0E55P8E7kyv7IdXv8Jqu4G52hSLPy5xiSnhKmsSQ3UrOJhj7kVHlQ" alt="user photo"/>
              <p className="text-base/7 font-semibold text-blue-700 tracking-widest">{book.author}</p>
              <p className="mt-3 text-base/7 text-gray-700 tracking-widest text-justify ">
                {book.review?.aboutAuthor}
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={book.image}
            className=" w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl shadow-blue-500/50 ring-gray-400/10 sm:w-[57rem]"
          />
          <img
            alt=""
            src={book.image}
            className="mt-6  w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl shadow-blue-500/50 ring-gray-400/10 sm:w-[57rem]"
          />
          <img
            alt=""
            src={book.image}
            className="mt-6 w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl shadow-blue-500/50 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className=" text-base/7 text-gray-700 ">
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 tracking-widest">Introducción.</h2>
              <p className="mt-3 tracking-widest text-justify">
                {book.review?.introduction}
              </p>
              {/* <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul> */}
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Revisión.</h2>
              <p className="mt-3 tracking-widest text-justify">
                {book.review?.review}
              </p>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Conclusion.</h2>
              <p className="mt-3 tracking-widest text-justify">
                {book.review?.conclusion}
              </p>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Critica.</h2>
              <p className="mt-3 tracking-widest text-justify">
                {book.review?.criticism}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    </>
  );
}

export default BookDetail;
