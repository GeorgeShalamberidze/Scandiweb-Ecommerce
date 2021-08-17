import React, { useEffect } from "react";
import axios from "axios";
function Main() {
  const [item, setItem] = React.useState({});
  useEffect(() => {
    const func = async () => {
      const asd = await axios.post("http://localhost:4000/graphql", {
        query: `
              query {
                product (id: "huarache-x-stussy-le") {
                  id
                  name
                  inStock
                  gallery
                  description
                  category
                  attributes {
                    id
                    name
                    type
                    items{
                      displayValue
                      value
                      id
                    }
                  }
                  prices {
                    currency
                    amount
                  }
                  brand
                }
              }
              `,
      });
      const result = asd.data.data.product;
      setItem(result);
    };
    func();
  }, []);

  return (
    <div>
      <h1>{item.id}</h1>
      <p>{item.name}</p>
      {item.description}
      {item.gallery &&
        item?.gallery.map((i) => {
          return <img src={i} alt="323" key={i} />;
        })}
    </div>
  );
}

export default Main;
