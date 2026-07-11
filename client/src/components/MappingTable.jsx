const crmFields = [
  "Name",
  "Email",
  "Phone",
  "Company",
  "City",
  "State",
  "Country",
  "Job Title",
  "Source",
];

export default function MappingTable({ headers, mapping, setMapping }) {
  if (!headers.length) return null;

  const handleChange = (header, value) => {
    setMapping({
      ...mapping,
      [header]: value,
    });
  };

  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6">
        Column Mapping
      </h2>

      <table className="w-full border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 border">CSV Column</th>
            <th className="p-3 border">CRM Field</th>
          </tr>
        </thead>

        <tbody>
          {headers.map((header) => (
            <tr key={header}>
              <td className="border p-3">
                {header}
              </td>

              <td className="border p-3">
                <select
                  value={mapping[header] || ""}
                  onChange={(e) =>
                    handleChange(header, e.target.value)
                  }
                  className="border rounded px-3 py-2 w-full"
                >
                  <option value="">Select Field</option>

                  {crmFields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}