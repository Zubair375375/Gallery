import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "JacFu7Jw564qrTNCDmu2o218ExTPptMQasfOf2dVUbU";
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
      .then(async (response) => {
        const res = await response.json();
        console.log(res);
        setImages(res);
        console.log(images[0].id);
        console.log(images[0].urls.small);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <h1 style={{ color: "black" }}>Loading...</h1>}
      {!loading && (
        <>
          <h1 style={{ color: "black" }}>Gallery Application</h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {images.map((imgg) => (
              <div
                key={imgg.id}
                style={{
                  margin: "2rem 2rem",
                  backgroundColor: "white",
                  width: "20rem",
                  borderRadius: "0.6rem 0.6rem 0.6rem 0.6rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.4s",
                }}
                className="main-container"
              >
                <img
                  src={imgg.urls.small}
                  style={{
                    height: "20rem",
                    width: "20rem",
                    borderRadius: "0.6rem 0.6rem 0rem 0rem",
                  }}
                />
                <p
                  style={{
                    color: "black",
                    width: "18rem",
                    textAlign: "center",
                  }}
                >
                  {imgg.alt_description}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
