// import { useState } from "react";
// import Layout from "../../layout";

// const InstitutionAdminDashboard = () => {
//   // Mock Data for the Institution
//   const [institutionData, setInstitutionData] = useState({
//     name: "NIMHANS",
//     address: "Hosur Road, Lakkasandra, Bengaluru, Karnataka, India",
//     contact: {
//       phone: "+91 1234567890",
//       email: "admin@nimhans.in",
//     },
//     metadata: {
//       creationDate: "2021-05-12",
//       lastUpdated: "2023-12-21",
//       totalReports: 120,
//     },
//     departments: [
//       { id: 1, name: "Neurology", admins: 2, reports: 45 },
//       { id: 2, name: "Psychiatry", admins: 3, reports: 60 },
//       { id: 3, name: "Neurosurgery", admins: 1, reports: 15 },
//     ],
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState(institutionData);

//   // Toggle Edit Mode
//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//     setEditData(institutionData); // Reset to original data if cancel
//   };

//   // Handle Input Changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Save Changes
//   const handleSaveChanges = () => {
//     if (validateInputs()) {
//       setInstitutionData(editData); // Simulate saving data
//       setIsEditing(false);
//       alert("Institution details updated successfully!");
//     }
//   };

//   // Validate Inputs
//   const validateInputs = () => {
//     const errors = [];
//     if (!editData.name) errors.push("Institution name is required.");
//     if (!editData.address) errors.push("Address is required.");
//     if (!editData.contact.phone.match(/^\+?[0-9]{10,15}$/))
//       errors.push("Valid phone number is required.");
//     if (!editData.contact.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
//       errors.push("Valid email address is required.");
//     if (errors.length > 0) {
//       alert(errors.join("\n"));
//       return false;
//     }
//     return true;
//   };

//   return (
//     <Layout>
//       <div className="p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Institution Admin Dashboard</h1>

//         {/* Institution Info */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Institution Details</h2>
//           {isEditing ? (
//             <>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-medium">Institution Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={editData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-medium">Address:</label>
//                 <textarea
//                   name="address"
//                   value={editData.address}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-medium">Contact Phone:</label>
//                 <input
//                   type="text"
//                   name="contact.phone"
//                   value={editData.contact.phone}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-medium">Contact Email:</label>
//                 <input
//                   type="email"
//                   name="contact.email"
//                   value={editData.contact.email}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleSaveChanges}
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mr-4"
//                 >
//                   Save Changes
//                 </button>
//                 <button
//                   onClick={handleEditToggle}
//                   className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <p>
//                 <strong>Name:</strong> {institutionData.name}
//               </p>
//               <p>
//                 <strong>Address:</strong> {institutionData.address}
//               </p>
//               <p>
//                 <strong>Contact:</strong> {institutionData.contact.phone} |{" "}
//                 {institutionData.contact.email}
//               </p>
//               <p>
//                 <strong>Created:</strong> {institutionData.metadata.creationDate}
//               </p>
//               <p>
//                 <strong>Last Updated:</strong> {institutionData.metadata.lastUpdated}
//               </p>
//               <p>
//                 <strong>Total Reports:</strong> {institutionData.metadata.totalReports}
//               </p>
//               <button
//                 onClick={handleEditToggle}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Edit Details
//               </button>
//             </>
//           )}
//         </div>

//         {/* Departments */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Departments</h2>
//           {institutionData.departments.map((dept) => (
//             <div
//               key={dept.id}
//               className="flex justify-between items-center border-b py-2"
//             >
//               <div>
//                 <p className="font-medium text-gray-800">{dept.name}</p>
//                 <p className="text-sm text-gray-600">Admins: {dept.admins}</p>
//                 <p className="text-sm text-gray-600">Reports: {dept.reports}</p>
//               </div>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default InstitutionAdminDashboard;



// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Layout from "../../layout";

// const InstitutionAdminDashboard = () => {
//   const router = useRouter();
//   const { institutionId } = router.query; // Fetch institutionId from URL
//   const [institutionData, setInstitutionData] = useState(null);

//   // Mock Data
//   const mockInstitutions = {
//     nimhans: {
//       name: "NIMHANS",
//       address: "Hosur Road, Lakkasandra, Bengaluru, Karnataka, India",
//       contact: {
//         phone: "+91 1234567890",
//         email: "admin@nimhans.in",
//       },
//       metadata: {
//         creationDate: "2021-05-12",
//         lastUpdated: "2023-12-21",
//         totalReports: 120,
//       },
//       departments: [
//         { id: 1, name: "Biomedical", admins: 2, reports: 45 },
//         { id: 2, name: "Neurology", admins: 3, reports: 60 },
//       ],
//     },
//     kmio: {
//       name: "Kidwai Memorial Institute of Oncology",
//       address: "Dr. M.H. Marigowda Road, Bengaluru, Karnataka, India",
//       contact: {
//         phone: "+91 9876543210",
//         email: "admin@kmio.in",
//       },
//       metadata: {
//         creationDate: "2019-08-25",
//         lastUpdated: "2023-12-20",
//         totalReports: 95,
//       },
//       departments: [
//         { id: 1, name: "Quality and Patient Safety", admins: 2, reports: 50 },
//         { id: 2, name: "Pediatric Oncology", admins: 2, reports: 45 },
//       ],
//     },
//     msramaiah: {
//       name: "M S Ramaiah",
//       address: "MSRIT Post, Bengaluru, Karnataka, India",
//       contact: {
//         phone: "+91 1122334455",
//         email: "admin@msramaiah.in",
//       },
//       metadata: {
//         creationDate: "2020-03-15",
//         lastUpdated: "2023-12-19",
//         totalReports: 60,
//       },
//       departments: [
//         { id: 1, name: "Biomedical Engineering", admins: 2, reports: 60 },
//       ],
//     },
//   };

//   useEffect(() => {
//     if (institutionId && mockInstitutions[institutionId]) {
//       setInstitutionData(mockInstitutions[institutionId]); // Load institution-specific data
//     }
//   }, [institutionId]);

//   if (!institutionData) {
//     return <p>Loading...</p>; // Handle loading state
//   }

//   return (
//     <Layout>
//       <div className="p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           {institutionData.name} Dashboard
//         </h1>

//         {/* Institution Info */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">
//             Institution Details
//           </h2>
//           <p>
//             <strong>Name:</strong> {institutionData.name}
//           </p>
//           <p>
//             <strong>Address:</strong> {institutionData.address}
//           </p>
//           <p>
//             <strong>Contact:</strong> {institutionData.contact.phone} |{" "}
//             {institutionData.contact.email}
//           </p>
//           <p>
//             <strong>Created:</strong> {institutionData.metadata.creationDate}
//           </p>
//           <p>
//             <strong>Last Updated:</strong> {institutionData.metadata.lastUpdated}
//           </p>
//           <p>
//             <strong>Total Reports:</strong> {institutionData.metadata.totalReports}
//           </p>
//         </div>

//         {/* Departments */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Departments</h2>
//           {institutionData.departments.map((dept) => (
//             <div
//               key={dept.id}
//               className="flex justify-between items-center border-b py-2"
//             >
//               <div>
//                 <p className="font-medium text-gray-800">{dept.name}</p>
//                 <p className="text-sm text-gray-600">Admins: {dept.admins}</p>
//                 <p className="text-sm text-gray-600">Reports: {dept.reports}</p>
//               </div>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default InstitutionAdminDashboard;


import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../layout";

const InstitutionAdminDashboard = () => {
  const router = useRouter();
  const { institutionId } = router.query; // Get institutionId from URL
  const [institutionData, setInstitutionData] = useState(null);

  // Mock Data for Institutions
  const mockInstitutions = {
    nimhans: {
      name: "NIMHANS",
      address: "Hosur Road, Lakkasandra, Bengaluru, Karnataka, India",
      contact: {
        phone: "+91 1234567890",
        email: "admin@nimhans.in",
      },
      metadata: {
        creationDate: "2021-05-12",
        lastUpdated: "2023-12-21",
        totalReports: 120,
      },
      departments: [
        { id: 1, name: "Biomedical", admins: 2, reports: 45 },
        { id: 2, name: "Neurology", admins: 3, reports: 60 },
      ],
    },
    kmio: {
      name: "Kidwai Memorial Institute of Oncology",
      address: "Dr. M.H. Marigowda Road, Bengaluru, Karnataka, India",
      contact: {
        phone: "+91 9876543210",
        email: "admin@kmio.in",
      },
      metadata: {
        creationDate: "2019-08-25",
        lastUpdated: "2023-12-20",
        totalReports: 95,
      },
      departments: [
        { id: 1, name: "Quality and Patient Safety", admins: 2, reports: 50 },
        { id: 2, name: "Pediatric Oncology", admins: 2, reports: 45 },
      ],
    },
    msramaiah: {
      name: "M S Ramaiah",
      address: "MSRIT Post, Bengaluru, Karnataka, India",
      contact: {
        phone: "+91 1122334455",
        email: "admin@msramaiah.in",
      },
      metadata: {
        creationDate: "2020-03-15",
        lastUpdated: "2023-12-19",
        totalReports: 60,
      },
      departments: [
        { id: 1, name: "Biomedical Engineering", admins: 2, reports: 60 },
      ],
    },
  };

  useEffect(() => {
    if (institutionId && mockInstitutions[institutionId]) {
      setInstitutionData(mockInstitutions[institutionId]); // Load data dynamically
    }
  }, [institutionId]);

  if (!institutionData) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <Layout role="institutionAdmin">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {institutionData.name} Dashboard
        </h1>

        {/* Institution Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Institution Details
          </h2>
          <p>
            <strong>Name:</strong> {institutionData.name}
          </p>
          <p>
            <strong>Address:</strong> {institutionData.address}
          </p>
          <p>
            <strong>Contact:</strong> {institutionData.contact.phone} |{" "}
            {institutionData.contact.email}
          </p>
          <p>
            <strong>Created:</strong> {institutionData.metadata.creationDate}
          </p>
          <p>
            <strong>Last Updated:</strong> {institutionData.metadata.lastUpdated}
          </p>
          <p>
            <strong>Total Reports:</strong> {institutionData.metadata.totalReports}
          </p>
        </div>

        {/* Departments Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Departments
          </h2>
          {institutionData.departments.map((dept) => (
            <div
              key={dept.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="font-medium text-gray-800">{dept.name}</p>
                <p className="text-sm text-gray-600">Admins: {dept.admins}</p>
                <p className="text-sm text-gray-600">Reports: {dept.reports}</p>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default InstitutionAdminDashboard;
