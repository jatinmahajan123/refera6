
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import WaveDecoration from "./WaveDecoration";

// const RegisterForm: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setError("");
//     console.log("Registered:", { email, password });
//     localStorage.setItem("justLoggedIn", "true");

//     navigate("/platformsetup");
//   };

//   return (
//     <div style={styles.container}>
//       <WaveDecoration />
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2 style={styles.heading}>Register for ReferralHub</h2>

//         <label>Email Id</label>
//         <input
//           type="email"
//           placeholder="robert.fox@myemail.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={styles.input}
//         />

//         <label>Create Password</label>
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={styles.input}
//         />

//         <label>Confirm Password</label>
//         <input
//           type="password"
//           placeholder="Re-enter password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//           style={styles.input}
//         />

//         {error && <p style={styles.error}>{error}</p>}

//         <button type="submit" style={styles.button}>Register</button>

//         <div style={styles.divider}>or</div>

//         <div style={styles.socialIcons}>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={styles.icon} />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png" alt="Facebook" style={styles.icon} />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X" style={styles.icon} />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style={styles.icon} />
//         </div>

//         <div style={styles.loginText}>
//           Already have an account?{" "}
//           <button
//             type="button"
//             onClick={() => navigate("/")}
//             style={{ color: "#3b82f6", textDecoration: "none", background: "none", border: "none", cursor: "pointer", padding: 0 }}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     background: "linear-gradient(to bottom right, #eef5ff, #d6e5ff)",
//     position: "relative",
//     overflow: "hidden"
//   },
//   form: {
//     backgroundColor: "white",
//     padding: "30px",
//     borderRadius: "12px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
//     width: "350px",
//     display: "flex",
//     flexDirection: "column",
//     position: "relative",
//     zIndex: 1,
//   },
//   heading: {
//     fontSize: "20px",
//     fontWeight: 600,
//     marginBottom: "20px",
//     textAlign: "center",
//     color: "#333",
//   },
//   input: {
//     padding: "12px",
//     margin: "10px 0",
//     borderRadius: "6px",
//     border: "1px solid #ddd",
//   },
//   button: {
//     padding: "12px",
//     background: "linear-gradient(to right, #6a9dfb, #9dd1ff)",
//     border: "none",
//     borderRadius: "6px",
//     color: "white",
//     fontWeight: "bold",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   divider: {
//     textAlign: "center",
//     margin: "20px 0",
//     position: "relative",
//   },
//   socialIcons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "15px",
//   },
//   icon: {
//     width: "28px",
//     height: "28px",
//     cursor: "pointer",
//   },
//   loginText: {
//     textAlign: "center",
//     marginTop: "10px",
//   },
//   error: {
//     color: "red",
//     fontSize: "0.9em",
//     marginTop: "-5px",
//   },
// };

// export default RegisterForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WaveDecoration from "./WaveDecoration";
import { authService } from "@/lib/auth-service";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validate password strength (optional)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Register the user
    const registrationSuccess = authService.registerUser(email, password);
    
    if (registrationSuccess) {
      // Redirect to login page with success parameter
      navigate("/?registered=true");
    } else {
      setError("Email is already registered. Please use a different email or login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      <WaveDecoration />
      <div className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg relative z-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register for ReferralHub
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="robert.fox@myemail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Create Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <button 
            type="submit" 
            className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition"
          >
            Register
          </button>

          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative bg-white px-4">
              <span className="text-sm text-gray-500">or</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-7 h-7 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png"
              alt="Facebook"
              className="w-7 h-7 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
              alt="X"
              className="w-7 h-7 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-7 h-7 cursor-pointer"
            />
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;