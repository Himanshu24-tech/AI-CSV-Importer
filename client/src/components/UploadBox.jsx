import { Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";

export default function UploadBox({ onFileUpload }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "text/csv": [".csv"],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition ${
        isDragActive
          ? "border-blue-600 bg-blue-50"
          : "border-gray-300 bg-white hover:border-blue-500"
      }`}
    >
      <input {...getInputProps()} />

      <Upload size={50} className="mx-auto text-blue-600" />

      <h2 className="text-xl font-semibold mt-4">
        Drag & Drop CSV Here
      </h2>

      <p className="text-gray-500 mt-2">
        or click to browse
      </p>
    </div>
  );
}