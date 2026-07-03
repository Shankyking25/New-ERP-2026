{/*}
import { useEffect } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  attendanceSchema,
  AttendanceSchemaType,
} from "../schemas/attendanceSchema";

import { attendanceDefaultValues } from "../utils/attendanceDefaultValues";

import AttendanceForm from "./AttendanceForm";

import AppButton from "../../../components/common/AppButton";

import useAttendance from "../hooks/useAttendance";



interface Props {

  open: boolean;

  attendance?: any;

  onClose: () => void;

}

export default function AttendanceDialog({

  open,

  attendance,

  onClose,

}: Props) {

  const isEdit = !!attendance;

  const {

    addAttendance,

    updateAttendance,

    createLoading,

    updateLoading,

  } = useAttendance();

  const {

    register,

    handleSubmit,

    reset,

    formState: { errors },

  } = useForm<AttendanceSchemaType>({

    resolver: zodResolver(attendanceSchema),

    defaultValues: attendanceDefaultValues,

  });

  useEffect(() => {

    if (attendance) {

      reset({

        employee: attendance.employee._id,

        date: attendance.date?.substring(0,10),

        checkIn: attendance.checkIn,

        checkOut: attendance.checkOut,

        workingHours: attendance.workingHours,

        overtimeHours: attendance.overtimeHours,

        status: attendance.status,

        remarks: attendance.remarks,

      });

    }

    else {

      reset(attendanceDefaultValues);

    }

  }, [attendance, reset]);

  const onSubmit = async (

    data: AttendanceSchemaType

  ) => {

    try {

      if (isEdit) {

        await updateAttendance({

          id: attendance._id,

          body: data,

        }).unwrap();

      }

      else {

        await addAttendance(data).unwrap();

      }

      reset(attendanceDefaultValues);

      onClose();

    }

    catch (err) {

      console.log(err);

    }

  };

  return (

    <Dialog

      open={open}

      onClose={() => {

        reset(attendanceDefaultValues);

        onClose();

      }}

      fullWidth

      maxWidth="sm"

    >

      <DialogTitle>

        {isEdit

          ? "Update Attendance"

          : "Add Attendance"}

      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>

        <DialogContent>

          <AttendanceForm

            register={register}

            errors={errors}

          />

        </DialogContent>

        <DialogActions>

          <AppButton

            color="inherit"

            onClick={() => {

              reset(attendanceDefaultValues);

              onClose();

            }}

          >

            Cancel

          </AppButton>

          <AppButton

            type="submit"

            loading={

              isEdit

                ? updateLoading

                : createLoading

            }

          >

            {isEdit

              ? "Update"

              : "Save"}

          </AppButton>

        </DialogActions>

      </form>

    </Dialog>

  );

}

*/}



import { useEffect } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import AttendanceForm from "./AttendanceForm";

import AppButton from "../../../components/common/AppButton";

import {
  attendanceSchema,
  type AttendanceSchemaType,
} from "../schemas/attendanceSchema";

// import {
//   useAddAttendanceMutation,
//   useUpdateAttendanceMutation,
// } from "../api/attendanceApi";

import {
  useCreateAttendanceMutation,
  useUpdateAttendanceMutation,
} from "../api/attendanceApi";
import { attendanceDefaultValues } from "../utils/attendanceDefaultValues";

interface Props {
  open: boolean;
  attendance?: any;
  onClose: () => void;
}

export default function AttendanceDialog({
  open,
  attendance,
  onClose,
}: Props) {

//   const [addAttendance, { isLoading: adding }] =
//     useAddAttendanceMutation();

const [createAttendance, { isLoading: adding }] =
  useCreateAttendanceMutation();



const [updateAttendance, { isLoading: updating }] =
    useUpdateAttendanceMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AttendanceSchemaType>({
    resolver: zodResolver(attendanceSchema),
    defaultValues: attendanceDefaultValues,
  });

  useEffect(() => {

    if (!open) return;

    if (attendance) {

      reset({

        employee:
          attendance.employee?._id ??
          attendance.employee ??
          "",

        date:
          attendance.date
            ? attendance.date.substring(0, 10)
            : "",

        checkIn:
          attendance.checkIn || "",

        checkOut:
          attendance.checkOut || "",

        workingHours:
          attendance.workingHours || 0,

        overtimeHours:
          attendance.overtimeHours || 0,

        status:
          attendance.status || "Present",

        remarks:
          attendance.remarks || "",

      });

    } else {

      reset(attendanceDefaultValues);

    }

  }, [attendance, open, reset]);

  const onSubmit = async (
    data: AttendanceSchemaType
  ) => {

    try {

      if (attendance) {

        await updateAttendance({
          id: attendance._id,
          body: data,
        }).unwrap();

      } else {

        // await addAttendance(data).unwrap();

        await createAttendance(data).unwrap();
      }

      reset(attendanceDefaultValues);

      onClose();

    } catch (err) {

      console.log(err);

    }

  };

  const handleClose = () => {

    reset(attendanceDefaultValues);

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
        {attendance
          ? "Update Attendance"
          : "Add Attendance"}
      </DialogTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >

        <DialogContent>

          <AttendanceForm
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
            loading={adding || updating}
          >
            {attendance
              ? "Update"
              : "Save"}
          </AppButton>

        </DialogActions>

      </form>

    </Dialog>

  );

}