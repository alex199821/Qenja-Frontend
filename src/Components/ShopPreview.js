import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/ShopPreview";
import { ProductsList } from "../utils/links";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import readMoreArrow from "../assets/images/readMoreArrow.png";

const ShopPreview = () => {
  const { productsList } = useSelector((store) => store.products);
  //Display minimum of 2 items on shop preview
  const [itemCount, setItemCount] = useState(2);
  const [fullListShown, setFullListShown] = useState(false);

  //Display more products on click
  const showMoreProducts = () => {
    if (itemCount < 5) {
      let newItemCount = itemCount + 2;
      setItemCount(newItemCount);
    }
  };

  //If more then 5 items shown on shop preview then refer user to shop for more
  useEffect(() => {
    if (itemCount > 5) {
      setFullListShown(true);
    }
  }, [itemCount]);
  return (
    <Wrapper>
      <section className="shopPreviewDescriptionContainer">
        <p className="shortDescription">
          LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING
        </p>
        <p className="longDescription">
          Versatile elegance for dining room, office or living room. This
          seating solution offers great appeal. Versatile elegance for dining
          room, office or living room. This seating solution offers great
          appeal.
        </p>
      </section>
      <section className="productListContainer">
        {productsList.slice(0, itemCount).map((product, index) => {
          const { image, name, id } = product;
          console.log(id);
          return (
            <div className="productContainer" key={index}>
              <img
                className="productImage"
                src={image}
                alt="Product Alt Text"
              />
              <div className="productNameContainer">
                <p>{name}</p>
              </div>
              <Link className="linkContainer" to={`/shop/${id}/`}>
                <p>Read more&nbsp;&nbsp;&nbsp;</p>
                <img src={readMoreArrow} alt="Read More Arrow" />
              </Link>
            </div>
          );
        })}
      </section>
      <section className="discoverMoreContainer">
        <button className="disoverMoreButton" onClick={showMoreProducts}>
          <u>
            {fullListShown
              ? "Check our shop for more products..."
              : "Disover More"}
          </u>
        </button>
      </section>
    </Wrapper>
  );
};
export default ShopPreview;
