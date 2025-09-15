import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../products/productsSlice";

const ProductTable = ({ setView }) => {
  const products = useSelector((s) => s.products.items);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        width: "full",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h3>Products ({products.length})</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <button style={{ width: "100px" }} onClick={() => dispatch(clearAll())}>
          Clear All
        </button>
        <button onClick={() => setView("wizard")}>Add Product</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? "No Products available"
            : products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{new Date(p.createdAt).toLocaleString()}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
