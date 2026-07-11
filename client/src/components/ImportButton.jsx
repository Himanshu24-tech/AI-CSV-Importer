import toast from "react-hot-toast";

export default function ImportButton({ csvData, mapping }) {
  const handleImport = () => {
    const mappedData = csvData.map((row) => {
      const newRow = {};

      Object.keys(mapping).forEach((csvColumn) => {
        const crmField = mapping[csvColumn];

        if (crmField) {
          newRow[crmField] = row[csvColumn];
        }
      });

      return newRow;
    });

    console.log(mappedData);

    // Save temporarily in browser
    localStorage.setItem(
      "importHistory",
      JSON.stringify(mappedData)
    );

    toast.success("CSV Imported Successfully!");
  };

  return (
    <button
      onClick={handleImport}
      className="mt-8 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
    >
      Import Data
    </button>
  );
}