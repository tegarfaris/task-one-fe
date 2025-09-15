import { useState } from "react";
import { fileToBase64 } from "../../utils/fileToBase46";

export default function AttachmentStep({
  attachments,
  setAttachments,
  onBack,
  onSave,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFiles = async (files) => {
    setIsLoading(true);
    const arr = Array.from(files);
    const converted = await Promise.all(
      arr.map(async (f) => ({
        name: f.name,
        size: f.size,
        type: f.type,
        dataUrl: await fileToBase64(f),
      }))
    );
    setAttachments((prev) => [...prev, ...converted]);
    setIsLoading(false);
  };

  return (
    <div>
      <h3>Step 2 — Upload Attachments</h3>
      <input
        type="file"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
      />
      {isLoading && <p>Loading files...</p>}
      <ul>
        {attachments.map((a, idx) => (
          <li key={idx}>
            {a.name} ({Math.round(a.size / 1024)} KB)
            <button
              onClick={() =>
                setAttachments((prev) => prev.filter((_, i) => i !== idx))
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onBack}>Back</button>
      <button onClick={onSave} disabled={attachments.length === 0}>
        Save Product
      </button>
    </div>
  );
}
