//Filepath: src/pages/SupplierPage.tsx
import { Container, Typography, CircularProgress, Alert, Button } from "@mui/material";
import { useEffect, useState } from "react";
import SupplierList from "../components/suppliers/SupplierList";
import { getSuppliers, addSupplier, deleteSupplier } from "../api/supplierService";
import type { Supplier } from "../types/Supplier";
import { Link } from "react-router-dom";

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

    // const handleAdd = async() =>{
    //     alert("I am adding new supplier");
    // }
    // const handleAdd = async(name:string, address:string) =>{
    //     alert("I am adding new supplier" + name + ", " + address);
    // }
    // const handleAdd = async() => {
        // try{
        //     await addSupplier({"name":"S14", "address":"Patna"});
        // }
        // finally{

        // }
    // }
    const handleAdd = async() => {

    }

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

            <Button
                variant="contained"
                color="primary"
                // startIcon={ />}
                // onClick={() => ( alert("Button Clicked!!!!!!!!")) }
                // onClick={()=>alert("Button Clicked!!!!!!!!") }
                // onClick={()=>console.log("abc")}
                // onClick={ handleAdd }
                // onClick={ handleAdd("Tom", "Kerala") } //Auto called beacuse of parameter
                // onClick={ ()=> handleAdd("Tom", "Kerala") } //Auto called beacuse of parameter
                // onClick = { handleAdd }

                component={Link}
                to="/register-supplier"
            >
                Add Supplier
            </Button>

            <SupplierList
                suppliers={suppliers}
                onDelete={handleDelete}
            />


        </Container>
    );
};

export default SupplierPage;