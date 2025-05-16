
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// export default function LoginPage() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isValid = login(username, password);
//     if (isValid) {
//       navigate('/search');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-800 p-8 rounded shadow-md w-96"
//       >
//         <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-2 mb-4 text-black rounded"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-6 text-black rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-semibold"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = login(username, password);
    if (isValid) {
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <p className="text-sm text-gray-300 mb-4 text-center">
          If you want to access the Search results, please provide valid credentials to log in.
        </p>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 text-black rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 text-black rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-semibold"
        >
          Proceed
        </button>
      </form>
    </div>
  );
}
