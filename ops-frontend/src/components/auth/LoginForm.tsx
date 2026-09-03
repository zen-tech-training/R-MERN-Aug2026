// src/components/auth/LoginForm.tsx
import { Button, TextField, Paper, Typography, Stack } from "@mui/material";
import { useState } from "react";
import type { LoginRequest } from "../../types/LoginRequest";

interface Props {
    onLogin: (loginData: LoginRequest) => Promise<void>;
}

const LoginForm = ({ onLogin }: Props) => {
    const [loginData, setLoginData] = useState<LoginRequest>({
            username: "admin",
            password: "admin"
        });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData(prev => ({...prev, value}));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onLogin(loginData);
    };

    return (
        <Paper
            elevation={3}
            sx={{ p: 4, maxWidth: 450, mx: "auto" }}
        >
            <Typography
                variant="h5"
                gutterBottom
            >
                Login
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Username"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                        fullWidth
                        required
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={loginData.password}
                        onChange={handleChange}
                        fullWidth
                        required
                    />

                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Login
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
};

export default LoginForm;