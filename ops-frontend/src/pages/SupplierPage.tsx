//Filepath: src/pages/SupplierPage.tsx
import { Container, Typography, CircularProgress, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import SupplierList from "../components/suppliers/SupplierList";
import { getSuppliers, deleteSupplier } from "../api/supplierService";
import type { Supplier } from "../types/Supplier";

const SupplierPage = () => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const loadSuppliers = async () => {
        try {
            setLoading(true);
            const response = await getSuppliers(); //axios.get()
            setSuppliers(response.data);
        } catch (err) {
            setError("Failed to load suppliers");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadSuppliers();
    }, []);

    const handleDelete = async (name: string) => {
            try {
                await deleteSupplier(name); //axios.delete()                
                setSuppliers(prev => prev.filter(x => x.name !== name)); //axios.get()
                // setCounter(prevvvv => preevv-1)
                // setCounter(preevv-1)
            } catch {
                alert("Delete Failed");
            }
        };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Container>
            <Typography
                variant="h4"
                gutterBottom
            >
                Suppliers
            </Typography>

            {error &&
                <Alert severity="error">
                    {error}
                </Alert>
            }

            <SupplierList
                suppliers={suppliers}
                onDelete={handleDelete}
            />

        </Container>
    );
};

export default SupplierPage;