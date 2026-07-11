export default function History() {

    const history = JSON.parse(
        localStorage.getItem("importHistory") || "[]"
    );

    if (!history.length) return null;

    return (
        <div className="mt-10 bg-white shadow rounded-xl p-5">

            <h2 className="text-xl font-bold mb-4">
                Import History
            </h2>

            <pre className="text-sm overflow-auto">
                {JSON.stringify(history, null, 2)}
            </pre>

        </div>
    );
}