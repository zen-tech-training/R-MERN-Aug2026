//Filepath: src/pages/SupplierRegistrationPage.tsx
import { Container, Typography, CircularProgress, Alert, Button, Input, TextField, Box } from "@mui/material";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import SupplierList from "../components/suppliers/SupplierList";
import { addSupplier } from "../api/supplierService";
import type { Supplier } from "../types/Supplier";

const SupplierRegistrationPage = () => {
    const [supplier, setSupplier] = useState<Supplier>({ name:"S15", address:"A15" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    // 2. Generic change handler to update specific keys in the state object
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSupplier((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const registerSupplier = async () => {
        try {
            setLoading(true);
            const response = await addSupplier(supplier); //axios.get()
            console.log(response);
            // setSupplier(response.data);
        } catch (err) {
            setError("Failed to load suppliers");
        } finally {
            setLoading(false);
        }
    };

    // if (loading) {
    //     return <CircularProgress />;
    // }

    return (
        <Container>
            <Typography
                variant="h4"
                gutterBottom
            >
                Suppliers RegistrationPage
            </Typography>

            {error &&
                <Alert severity="error">
                    {error}
                </Alert>
            }

            {/* 4. Form Layout Container */}
            <Box 
                component="form" 
                onSubmit={registerSupplier} 
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
                <TextField
                    label="Supplier Name"
                    name="name"
                    variant="outlined"
                    value={supplier.name}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled={loading}
                />

                <TextField
                    label="Supplier Address"
                    name="address"
                    variant="outlined"
                    value={supplier.address}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    multiline
                    rows={3} // Better user experience for typing physical addresses
                    disabled={loading}
                />

                <Button
                    type="submit" // Triggers the onSubmit of the form box
                    variant="contained"
                    color="primary"                
                    disabled={loading}
                    size="large"
                    sx={{ alignSelf: 'flex-start', minWidth: 120 }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Save"}
                </Button>
            </Box>

            {JSON.stringify(supplier)}

        </Container>
    );
};

export default SupplierRegistrationPage;