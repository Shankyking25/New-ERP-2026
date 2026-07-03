import { useEffect } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import PayrollForm from "./PayrollForm";

import AppButton from "../../../components/common/AppButton";

import {
  payrollSchema,
 type PayrollSchemaType,
} from "../schemas/payrollSchema";

import {
  useAddPayrollMutation,
  useUpdatePayrollMutation,
} from "../api/payrollApi";

import { payrollDefaultValues } from "../utils/payrollDefaultValues";

interface Props {
  open: boolean;
  payroll?: any;
   onClose: () => void;
  onSuccess?: () => void;
}

export default function PayrollDialog({
  open,
  payroll,
  onClose,
}: Props) {

  const [addPayroll, { isLoading: adding }] =
    useAddPayrollMutation();

  const [updatePayroll, { isLoading: updating }] =
    useUpdatePayrollMutation();

  const {
    register,
    handleSubmit,
    reset,
     watch,
  setValue,
  control,
    formState: { errors },
  } = useForm<PayrollSchemaType>({
    resolver: zodResolver(payrollSchema),
    defaultValues: payrollDefaultValues,
  });

  useEffect(() => {
    if (!open) return;

    if (payroll) {
      reset({
        employee: payroll.employee?._id ?? "",
        month: payroll.month || "",
        basicSalary: payroll.basicSalary || 0,
        bonus: payroll.bonus || 0,
        deduction: payroll.deduction || 0,
        status: payroll.status || "Pending",
        remarks: payroll.remarks || "",
      });
    } else {
      reset(payrollDefaultValues);
    }
  }, [payroll, open, reset]);

  const onSubmit = async (data: PayrollSchemaType) => {
  
  console.log("Payroll Form Data:", data);

    try {
      if (payroll) {
        await updatePayroll({
          id: payroll._id,
          body: data,
        }).unwrap();
      } else {
        await addPayroll(data).unwrap();
      }

      onSuccess?.();
      reset(payrollDefaultValues);
      onClose();

    } catch (err: any) {

  console.log("Full Error:", err);

  console.log("Status:", err?.status);

  console.log("Data:", err?.data);

}
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">

      <DialogTitle>
        {payroll ? "Update Payroll" : "Add Payroll"}
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>

        <DialogContent>
          <PayrollForm
    register={register}
    errors={errors}
    watch={watch}
    setValue={setValue}
    control={control}
  />
        </DialogContent>

        <DialogActions>

          <AppButton
            color="inherit"
            onClick={onClose}
          >
            Cancel
          </AppButton>

          <AppButton
            type="submit"
            loading={adding || updating}
          >
            {payroll ? "Update" : "Save"}
          </AppButton>

        </DialogActions>

      </form>

    </Dialog>
  );
}