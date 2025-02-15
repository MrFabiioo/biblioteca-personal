import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Layout from '../Layout/index';
import NotReview from "../NotReview";
import axios from 'axios';
import endPoints from '../../services/index';
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
    return (
      <Layout>
        <p>Cargando...</p>
      </Layout>
    );
  }

  if (!book || !book.review?.title) {
    return (
      <Layout>
        <NotReview />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Detalles del Libro</h1>
        <p className="text-lg">ID del libro: {book.id}</p>
        <p className="text-lg">NOMBRE del libro: {book.title}</p>
        <p className="text-lg">AUTOR del libro: {book.author}</p>
        <p className="text-lg">TITULO DE REVISADO del libro: {book.review?.title}</p>
        <p className="text-lg">ACERCA del AUTOR: {book.review?.aboutAuthor}</p>
        <p className="text-lg">INTRODUCCION del libro: {book.review?.introduction}</p>
        <p className="text-lg">REVISADO del libro: {book.review?.review}</p>
        <p className="text-lg">CONCLUSION del libro: {book.review?.conclusion}</p>
        <p className="text-lg">CRITICA del libro: {book.review?.criticism}</p>
      </div>
    </Layout>
  );
}

export default BookDetail;
