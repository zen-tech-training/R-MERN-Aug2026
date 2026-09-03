//Filepath: src/api/supplierService.ts
import axiosClient from "./axiosClient";

export const getSuppliers = async () => await axiosClient.get("/suppliers");
export const deleteSupplier = async (name: string) => await axiosClient.delete(`/suppliers/${name}`)