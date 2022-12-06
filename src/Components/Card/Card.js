import { useDispatch } from "react-redux";
import { add, remove } from "../Redux/ProductSlice";
import "./Card.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StarFilled } from "@ant-design/icons";
function Card({ movies }) {
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(movies);
  }, [movies]);
  const [search, setSearch] = useState("");
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddCart = (movie, stocks) => {
    if (stocks < 50) {
      alert("hurry ! only few stock left");
      dispatch(add(movie));
    } else {
      dispatch(add(movie));
    }
  };
  const handleRemoveCart = (movie) => {
    dispatch(remove(movie));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const maxRating = () => {
    const dataProduct = product.slice();
    dataProduct.sort((a, b) => b.rating - a.rating);
    setProduct(dataProduct);
  };

  const lowRating = () => {
    const dataProduct = product.slice();
    dataProduct.sort((a, b) => a.rating - b.rating);
    setProduct(dataProduct);
  };

  const maxPrice = () => {
    const dataProduct = product.slice();
    dataProduct.sort((a, b) => b.price - a.price);
    setProduct(dataProduct);
  };

  const lowPrice = () => {
    const dataProduct = product.slice();
    dataProduct.sort((a, b) => a.price - b.price);
    setProduct(dataProduct);
  };

  return (
    <div>
      <input
        className="prod_input"
        type="text"
        onChange={handleSearch}
        value={search}
        placeholder="search by category only"
      />
      <button className="sort" onClick={maxRating}>
        rating ↑
      </button>
      <button className="sort" onClick={lowRating}>
        rating ↓
      </button>
      <button className="sort" onClick={maxPrice}>
        price ↑
      </button>
      <button className="sort" onClick={lowPrice}>
        price ↓
      </button>
      <div>
        {product
          ?.filter((movie) => {
            if (search === "") {
              return movie;
            } else if (movie.brand.includes(search.toLowerCase())) {
              return movie;
            } else if (movie.category.includes(search.toLowerCase())) {
              return movie;
            }
          })
          .map((movie) => {
            return (
              <div className="cards" key={movie.id}>
                <img className="cards__img" src={movie.images[0]} />
                <div className="cards__overlay">
                  <div className="card__title">{movie.title}</div>
                  <div className="card__runtime">
                    Price : {movie.price}
                    <span className="card__rating">
                      {movie.rating}
                      <StarFilled />
                    </span>
                  </div>
                  <div className="card__description">
                    {movie.description.slice(0, 118) + "..."}
                    <br />
                    <br />
                    stocks : {movie.stock}
                    <br />
                    {/* <br/> */}
                    Category : {movie.category}
                    <br />
                    {/* <br/> */}
                    Brand : {movie.brand}
                  </div>
                  <div>
                    {items.find((e) => e.id === movie.id) ? (
                      <button
                        className="prod_btn"
                        onClick={() => handleRemoveCart(movie)}
                      >
                        Delete to cart
                      </button>
                    ) : (
                      <button
                        className="prod_btn"
                        onClick={() => handleAddCart(movie, movie.stock)}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
