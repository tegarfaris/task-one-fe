import React from "react";

export default function ProductFormStep({ data, onChange, onNext }) {
  return (
    <div>
      <h3>Step 1 — Product Data</h3>
      <div className="form-grid">
        <label>
          Name *
          <input
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
            placeholder="Nama produk"
          />
        </label>
        <label>
          Price
          <input
            type="number"
            value={data.price}
            onChange={(e) => onChange({ ...data, price: e.target.value })}
            placeholder="Harga"
          />
        </label>
        <label>
          Description
          <textarea
            value={data.description}
            onChange={(e) => onChange({ ...data, description: e.target.value })}
            placeholder="Deskripsi singkat"
          />
        </label>
        <button className="bg-red-500" onClick={onNext} disabled={!data.name}>
          Next — Upload attachments
        </button>
      </div>
    </div>
  );
}
