//Filepath: src/components/suppliers/SupplierList.tsx
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Supplier } from "../../types/Supplier";

interface Props {
    suppliers: Supplier[];
    onDelete: (name: string) => void;
}

const SupplierList = ({ suppliers, onDelete }: Props) => {
    return (
        <>
            {
                suppliers.map((supplier) => (
                    <Card key={supplier._id} sx={{ mb: 2 }} >
                        <CardContent>

                            <Typography variant="h6">
                                {supplier.name}
                            </Typography>

                            <Typography color="text.secondary">
                                {supplier.address}
                            </Typography>

                            <Stack direction="row" mt={2} >
                                <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => onDelete(supplier.name)}
                                >
                                    Delete
                                </Button>
                            </Stack>

                        </CardContent>
                    </Card>
                ))
            }
        </>
    );
};

export default SupplierList;