// File: src/pages/LoginPage.tsx
import { Container, Alert, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/auth/LoginForm";
import type { LoginRequest } from "../types/LoginRequest";
import { loginUser, clearAuthError } from "../features/authSlice";
import type { AppDispatch, RootState } from "../store";

const LoginPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    // Select dynamic state tracking elements from Redux store
    const { error, isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);

    // Clear stale errors when mounting the component
    useEffect(() => {
        dispatch(clearAuthError());
    }, [dispatch]);

    const handleLogin = async (loginData: LoginRequest) => {
        dispatch(loginUser(loginData));
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                OPS Login
            </Typography>
            
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            {isAuthenticated && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    Logged in successfully!
                </Alert>
            )}

            <LoginForm onLogin={handleLogin} />
        </Container>
    );
};

export default LoginPage;





// import { Container, Alert, Typography } from "@mui/material";
// import { useState } from "react";
// import LoginForm from "../components/auth/LoginForm";
// import { login } from "../api/authService";
// import type { LoginRequest } from "../types/LoginRequest";
// import { saveToken } from "../utils/auth";


// const LoginPage = () => {
//     const [error, setError] = useState("");
//     const handleLogin = async (loginData: LoginRequest) => {
//         try {
//             setError("");
            // const response = await login(loginData);
//             console.log("Login Success", response.data);
//             saveToken(response.data.token);
//         } catch (err) {
//             console.error(err);
//             setError("Invalid Username or Password");
//         }
//     };

//     return (
//         <Container maxWidth="sm">
//             <Typography
//                 variant="h4"
//                 gutterBottom
//                 sx={{ mt: 4 }}
//             >
//                 OPS Login
//             </Typography>
            
//             {error && (
//                 <Alert
//                     severity="error"
//                     sx={{ mb: 2 }}
//                 >
//                     {error}
//                 </Alert>
//             )
//             }

//             <LoginForm
//                 onLogin={handleLogin}
//             />

//         </Container>
//     );
// };

// export default LoginPage;