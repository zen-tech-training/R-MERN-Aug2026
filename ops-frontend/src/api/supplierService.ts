//Filepath: src/api/supplierService.ts
import axiosClient from "./axiosClient";
import type { Supplier }  from "../types/Supplier";

export const getSuppliers = async () => await axiosClient.get("/suppliers");
export const addSupplier = async (newSupplier: Supplier) => await axiosClient.post("/suppliers", newSupplier);
export const deleteSupplier = async (name: string) => await axiosClient.delete(`/suppliers/${name}`)