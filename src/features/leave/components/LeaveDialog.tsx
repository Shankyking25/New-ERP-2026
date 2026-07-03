import { useEffect } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import AppButton from "../../../components/common/AppButton";

import LeaveForm from "./LeaveForm";

import {
  leaveSchema,
  type LeaveSchemaType,
} from "../schemas/leaveSchema";

import {
  leaveDefaultValues,
} from "../utils/leaveDefaultValues";

import {
  useCreateLeaveMutation,
  useUpdateLeaveMutation,
} from "../api/leaveApi";

interface Props {

  open: boolean;

  leave?: any;

  onClose: () => void;

}

export default function LeaveDialog({

  open,

  leave,

  onClose,

}: Props) {

  const [

    createLeave,

    { isLoading: creating },

  ] = useCreateLeaveMutation();

  const [

    updateLeave,

    { isLoading: updating },

  ] = useUpdateLeaveMutation();

  const {

    register,

    handleSubmit,

    reset,

    formState: {

      errors,

    },

  } = useForm<LeaveSchemaType>({

    resolver: zodResolver(leaveSchema),

    defaultValues: leaveDefaultValues,

  });

  useEffect(() => {

    if (!open) return;

    if (leave) {

      reset({

        employee:

          leave.employee?._id ??

          leave.employee ??

          "",

        leaveType:

          leave.leaveType ?? "",

        fromDate:

          leave.fromDate

            ? leave.fromDate.substring(0,10)

            : "",

        toDate:

          leave.toDate

            ? leave.toDate.substring(0,10)

            : "",

        totalDays:

          leave.totalDays ?? 1,

        reason:

          leave.reason ?? "",

        remarks:

          leave.remarks ?? "",

        status:

          leave.status ?? "Pending",

      });

    }

    else {

      reset(

        leaveDefaultValues

      );

    }

  }, [

    leave,

    open,

    reset,

  ]);

  const onSubmit = async (

    data: LeaveSchemaType

  ) => {

    try {

      if (leave) {

        await updateLeave({

          id: leave._id,

          body: data,

        }).unwrap();

      }

      else {

        await createLeave(

          data

        ).unwrap();

      }

      reset(

        leaveDefaultValues

      );

      onClose();

    }

    catch (err) {

      console.log(err);

    }

  };

  const handleClose = () => {

    reset(

      leaveDefaultValues

    );

    onClose();

  };

  return (

    <Dialog

      open={open}

      onClose={handleClose}

      fullWidth

      maxWidth="md"

    >

      <DialogTitle>

        {leave

          ? "Update Leave"

          : "Add Leave"}

      </DialogTitle>

      <form

        onSubmit={

          handleSubmit(

            onSubmit

          )

        }

      >

        <DialogContent>

          <LeaveForm

            register={register}

            errors={errors}

          />

        </DialogContent>

        <DialogActions>

          <AppButton

            color="inherit"

            onClick={handleClose}

          >

            Cancel

          </AppButton>

          <AppButton

            type="submit"

            loading={

              creating ||

              updating

            }

          >

            {leave

              ? "Update"

              : "Save"}

          </AppButton>

        </DialogActions>

      </form>

    </Dialog>

  );

}