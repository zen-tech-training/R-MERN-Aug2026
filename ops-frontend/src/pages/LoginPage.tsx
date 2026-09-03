import { Container, Alert, Typography } from "@mui/material";
import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import { login } from "../api/authService";
import type { LoginRequest } from "../types/LoginRequest";
import { saveToken } from "../utils/auth";


const LoginPage = () => {
    const [error, setError] = useState("");
    const handleLogin = async (loginData: LoginRequest) => {
        try {
            setError("");
            const response = await login(loginData);
            console.log("Login Success", response.data);
            saveToken(response.data.token);
        } catch (err) {
            console.error(err);
            setError("Invalid Username or Password");
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 4 }}
            >
                OPS Login
            </Typography>
            
            {error && (
                <Alert
                    severity="error"
                    sx={{ mb: 2 }}
                >
                    {error}
                </Alert>
            )
            }

            <LoginForm
                onLogin={handleLogin}
            />

        </Container>
    );
};

export default LoginPage;