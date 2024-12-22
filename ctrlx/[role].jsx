// pages/dashboard/[role].js
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const { query } = router;

  const handleLogout = () => {
    // Clear session or token here (if implemented)
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Dashboard</h1>
      <div className="w-[500px] bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm">
          {JSON.stringify(query, null, 2)}
        </pre>
        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
