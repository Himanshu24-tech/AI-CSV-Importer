export default function CSVPreview({ data }) {
  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">CSV Preview</h2>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border px-4 py-2 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.slice(0, 5).map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td
                  key={header}
                  className="border px-4 py-2"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-gray-500 mt-3">
        Showing first 5 rows
      </p>
    </div>
  );
}