// Задача 2: Создать компонент Gallery, который загружает список изображений
// с сервера и отображает их в виде галереи. Каждое изображение должно быть кликабельным
// и при клике на него должно открываться в полноразмерном режиме.
// 1.Создайте компонент Gallery, который будет загружать и отображать список изображений.
// 2.Добавьте обработчик события для открытия изображения в полноразмерном режиме.
// Обязательно использовать useEffect, useState и axios.
// API:  https://jsonplaceholder.typicode.com/photos
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";

const API_IMAGE_URL = "https://jsonplaceholder.typicode.com/photos";

function Gallery() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await axios.get(`${API_IMAGE_URL}?_limit=10`);
        setImages(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return "Loading";
  }

  if (error) {
    return `Error: ${error}`;
  }

  return (
    <div className="list">
      {images.map(({ id, url, title }) => (
        <Image key={id} src={url} alt={title} />
      ))}
    </div>
  );
}

export default Gallery;
