import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  
      // state for rendering user name when logged in 
      const [ loggedInUser, setLoggedInUSer ] = useState('') 

      // state for holding of all the products fetched through api
      const [productData, setProductData] = useState([]);

      // useNavigate for routing
      const navigate = useNavigate()

      // retrieve user's name from localstorage when home page is rendered
      useEffect(() => {
        setLoggedInUSer(localStorage.getItem('LoggedInUser: '))
      },[])

      // user logout
      const userLogout = () => {
        localStorage.clear()
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      }

      // fetch products from the database 
      const fetchProductData = async () => {
        try {
            const url = 'http://localhost:8080/products';
            const headers = {
              headers: {
                'Authorization': localStorage.getItem('token')
              }
            }
            const res = await fetch(url,headers);
            const result = await res.json();
            setProductData(result);
          } catch (error) {
            toast.error('No data found', error);
        }
      }
      useEffect(() => {
        fetchProductData()
      },[])

  return (
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
  }}
>
  <h1
    style={{
      fontSize: "2rem",
      color: "#007bff",
      marginBottom: "20px",
    }}
  >
    Hi, {loggedInUser}
  </h1>
  <div
    style={{
      width: "80%",
      maxWidth: "600px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    {productData.length > 0 ? (
      productData.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            marginBottom: "10px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div>
            <p
              style={{
                margin: "0",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {product.name}
            </p>
            <p
              style={{
                margin: "5px 0 0",
                color: "#555",
              }}
            >
              Price: Rs {product.price}
            </p>
          </div>
        </div>
      ))
    ) : (
      <p
        style={{
          textAlign: "center",
          fontSize: "1rem",
          color: "#999",
        }}
      >
        No products available
      </p>
    )}
  </div>
  <button
    onClick={userLogout}
    style={{
      marginTop: "20px",
      padding: "12px 24px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
  >
    Logout
  </button>
</div>


  )
}

export default Home;
