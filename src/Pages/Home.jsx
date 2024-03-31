import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error occurs in fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <HomeContainer>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>
          <p>{error}</p>
        </div>
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] gap-y-6 gap-x-6">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;
