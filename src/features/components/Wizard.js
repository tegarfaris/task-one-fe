import { useState } from "react";
import AttachmentStep from "./AttachmentStep";
import { useDispatch } from "react-redux";
import { addProduct } from "../products/productsSlice";
import ProductFormStep from "./ProductFormState";

const Wizard = ({ setView }) => {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    mangga: "",
    tegar: "",
  });
  const [attachments, setAttachments] = useState([]);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addProduct({ ...product, attachments }));
    setProduct({ name: "", price: "", description: "", mangga: "", tegar: "" });
    setAttachments([]);
    setStep(1);
    setView("table");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Wizard (Step {step}/2)</h2>
      <button style={{ width: "100px" }} onClick={() => setView("table")}>
        Back
      </button>
      {step === 1 && (
        <ProductFormStep
          data={product}
          onChange={setProduct}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <AttachmentStep
          attachments={attachments}
          setAttachments={setAttachments}
          onBack={() => setStep(1)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Wizard;
