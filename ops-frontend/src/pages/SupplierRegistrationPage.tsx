//Filepath: src/pages/SupplierRegistrationPage.tsx
import { Container, Typography, CircularProgress, Alert, Button, Input, TextField, Box } from "@mui/material";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import SupplierList from "../components/suppliers/SupplierList";
import { addSupplier } from "../api/supplierService";
import type { Supplier } from "../types/Supplier";

const SupplierRegistrationPage = () => {
    const [supplier, setSupplier] = useState<Supplier>({ name: "S16", address: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [supplierFormErrors, setSupplierFormErrors] = useState<Supplier>({
        name: "Pls enter valid sname.......................",
        address: ""
    });

    // 2. Generic change handler to update specific keys in the state object
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        validateInput(e);
        const { name, value } = e.target;
        setSupplier((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("I am in Vaildation function: ", e.target.name, e.target.value);
        const { name, value } = e.target;
        if (e.target.name == "address") {            
            if (e.target.value === "d") {
                console.log("I am in if");
                setSupplierFormErrors({
                    ...supplierFormErrors,
                    address: ""
                })
            }
            else if(e.target.value === "de")
            {
                console.log("I am in else");
                setSupplierFormErrors({
                    ...supplierFormErrors,
                    address: "Pls enter valid s address"
                })
            }
        }
    };

    const registerSupplier = async (eve: SubmitEvent) => {
        eve.preventDefault();      // To stop the default submission behaviour/ Refresh Browser
        try {
            setLoading(true);
            const response = await addSupplier(supplier); //axios.post()
            console.log(response);
            // setSupplier(response.data);
            setSuccessMessage("Supplier is added successfully");
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
                    onChange={handleChange}
                    fullWidth
                    required
                    disabled={loading}
                />

                {supplierFormErrors.name &&
                    <Alert severity="error">
                        AAAAAA - {supplierFormErrors.name}
                    </Alert>
                }

                <TextField
                    label="Supplier Address"
                    name="address"
                    variant="outlined"
                    value={supplier.address}
                    onChange={handleChange}
                    fullWidth
                    required
                    multiline
                    rows={3} // Better user experience for typing physical addresses
                    disabled={loading}
                />


                {supplierFormErrors.address &&
                    <Alert severity="error">
                        {supplierFormErrors.address}
                    </Alert>
                }
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

            {successMessage &&
                <Alert severity="success">
                    {successMessage}
                </Alert>
            }


            {JSON.stringify(supplier)}
            {JSON.stringify(supplierFormErrors)}


            {<p>HHHHHH</p>}
            {"HHHHHH"} {2 * 3}
            {error} - {[2, " , SecondElement-Angular, ", 3]}


        </Container>
    );
};

export default SupplierRegistrationPage;