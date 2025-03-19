import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../Layout";
import NotReview from "../NotReview";
import Loading from "../Loading";
import Unauthorized from "../Unauthorized";
import { useAuth0 } from "@auth0/auth0-react";
import { getOneBook } from "../../services/book.service";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();



  useEffect(() => {
    async function getBook() {
      if (isLoading) return;
      setLoading(true);
      try {
        let token = null;
        if (isAuthenticated) {
          token = await getAccessTokenSilently({
            authorizationParams: {
              audience: import.meta.env.VITE_AUTH0_AUDIENCE,
              scope: import.meta.env.VITE_AUTH0_SCOPE,
            },
          });
        }
        const response = await getOneBook(id, token);
        setBook(response);
      } catch (error) {

        if (error.response.data?.message === "Invalid Compact JWS" || "Unauthorized") {
          setAccessDenied(true);

        } else if (error.request) {
          console.log("No se recibió respuesta del servidor. Posible problema de red.");
        } else {
          console.log("Error desconocido:", error.message);
        }

      } finally {
        setLoading(false);
      }
    }

    getBook();
  }, [id, isAuthenticated, getAccessTokenSilently]);

  if (loading) {
    return <Loading />; 
  }

  if (accessDenied) {
    return (
      <Layout>
        <Unauthorized />
      </Layout>
    );
  }

  if (!book || !book.review) {
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
          <div className="w-full h-36  rounded-xl my-3 " style={{ backgroundImage: `url(${book?.review?.bannerImage})` }}></div>
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
            <div id="1" className="lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4 ">
                <div className="">
                  <p className="text-base/7 font-semibold text-blue-700 tracking-widest">{book.title}</p>
                  <h1 className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    {book.review?.title}
                  </h1>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 tracking-widest">Sobre el autor: </h2>
                  <img className="m-3 w-20 h-20 rounded-full object-cover " src={book?.review?.authorImage} alt="user photo" />
                 <p className="text-base/7 font-semibold text-blue-700 tracking-widest">{book.author}</p>
                  <p className="mt-3 text-base/7 text-gray-700 tracking-widest text-justify ">
                    {book.review?.aboutAuthor}
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden hidden lg:block">
              <img
                alt=""
                src={book?.review?.imageOne}
                className="  rounded-xl bg-gray-900 ring-1 shadow-xl shadow-neutral-500  ring-gray-400/10 sm:w-[57rem]"
              />
              <img
                alt=""
                src={book?.review?.imageTwo}
                className="mt-12  rounded-xl bg-gray-900 ring-1 shadow-xl shadow-neutral-500 ring-gray-400/10 sm:w-[57rem]"
              />
              <img
                alt=""
                src={book?.review?.imageThree}
                className="mt-12  rounded-xl bg-gray-900 ring-1 shadow-xl shadow-neutral-500 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
            <div className="lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className=" text-base/7 text-gray-700 ">
                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 tracking-widest">Revisión.</h2>
                  <p id="2" className="mt-3 tracking-widest text-justify">
                    {book.review?.introduction}
                  </p>
                  <div className="lg:hidden grid place-items-center ">
                    <img
                      alt=""
                      src={book?.review?.imageOne}
                      className="mt-12  w-[21rem] bg-gray-900 ring-1 shadow-xl shadow-neutral-500 ring-gray-400/10 sm:w-[57rem]"
                    />
                  </div>
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
                  
                  <p id="3" className="mt-3 tracking-widest text-justify">
                    {book.review?.review}
                  </p>
                  <div className="lg:hidden grid place-items-center">
                    <img
                      alt=""
                      src={book?.review?.imageTwo}
                      className="mt-12 w-[21rem] bg-gray-900 ring-1 shadow-xl shadow-neutral-500 ring-gray-400/10 sm:w-[57rem]"
                    />
                  </div>
                  
                  <p className="mt-3 tracking-widest text-justify">
                    {book.review?.conclusion}
                  </p>
                  <div className="mt-8 lg:hidden grid place-items-center">
                    <img
                      alt=""
                      src={book?.review?.imageThree}
                      className=" w-[21rem]   bg-gray-900 ring-1 shadow-xl shadow-neutral-500  ring-gray-400/10 sm:w-[57rem]"
                    />
                  </div>
                  
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
