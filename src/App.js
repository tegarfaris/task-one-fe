import { useState } from "react";
import ProductTable from "./features/components/ProductTable";
import Wizard from "./features/components/Wizard";

export default function App() {
  const [view, setView] = useState("table");
  return (
    <div className="container">
      <main>
        {view === "table" ? (
          <ProductTable setView={setView} />
        ) : (
          <Wizard setView={setView} />
        )}
      </main>
    </div>
  );
}
