import React from 'react'

function FetchProducts() {  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        setData(jsonData.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>FetchProducts
      {/* <h2>{JSON.stringify(data)}</h2> */}
      {data?.map((ele) => (
        <div key={ele.id}>
          <img src={ele.thumbnail} alt={ele.title} height='100' width='100' />
          <h2>{ele.id}</h2>
          <button>addtocart</button>
        </div>
      ))}
    </div>
  )
}

export default FetchProducts;