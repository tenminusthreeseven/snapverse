import { useState } from "react";

function ProductList() {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <p>Flag is: {flag ? "true" : "false"}</p>

      <button onClick={() => setFlag(!flag)}>
        Toggle Flag
      </button>
    </div>
  );
}

export default ProductList;
