import { useState } from "react";
import Papa from "papaparse";

import UploadBox from "../components/UploadBox";
import CSVPreview from "../components/CSVPreview";
import MappingTable from "../components/MappingTable";
import ImportButton from "../components/ImportButton";
import History from "../components/History";

import autoMapColumns from "../utils/columnMapper";

export default function Home() {
  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState([]);
  const [mapping, setMapping] = useState({});

  const handleFileUpload = (selectedFile) => {
    setFile(selectedFile);

    Papa.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        const data = results.data;

        if (!data || data.length === 0) {
          alert("CSV is empty!");
          return;
        }

        setCsvData(data);

        const headers = Object.keys(data[0]);

        const suggestedMapping = autoMapColumns(headers);

        setMapping(suggestedMapping);
      },

      error: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          AI CSV Importer
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Upload a CSV file, preview it, map fields automatically, and import data.
        </p>

        {/* Upload */}
        <div className="mt-10">
          <UploadBox onFileUpload={handleFileUpload} />
        </div>

        {/* Selected File */}
        {file && (
          <div className="mt-6 bg-white shadow rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-2">
              Selected File
            </h2>

            <p>
              <strong>Name:</strong> {file.name}
            </p>

            <p>
              <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB
            </p>

            <p>
              <strong>Rows:</strong> {csvData.length}
            </p>
          </div>
        )}

        {/* CSV Preview */}
        {csvData.length > 0 && (
          <CSVPreview data={csvData} />
        )}

        {/* Mapping */}
        {csvData.length > 0 && (
          <MappingTable
            headers={Object.keys(csvData[0])}
            mapping={mapping}
            setMapping={setMapping}
          />
        )}

        {/* Import Button */}
        {csvData.length > 0 && (
          <ImportButton
            csvData={csvData}
            mapping={mapping}
          />
        )}

        {/* Import History */}
        <History />

      </div>
    </div>
  );
}