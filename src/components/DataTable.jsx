// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DataTable = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const pageSize = 30; // Number of items per page

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://68.178.162.203:8080/application-test-v1.1/books?page=${currentPage}&pageSize=${pageSize}`);
//       setData(response.data.data);
//       setTotalPages(Math.ceil(response.data.pagination.totalElements / pageSize));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             {/* Add more columns as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.title}</td>
//               {/* Render more columns here */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={currentPage === index + 1 ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DataTable;
