import {

  useCreateAttendanceMutation,

  useDeleteAttendanceMutation,

  useUpdateAttendanceMutation,

} from "../api/attendanceApi";

export default function useAttendance() {

  const [

    createAttendance,

    {

      isLoading: createLoading,

    },

  ] = useCreateAttendanceMutation();

  const [

    updateAttendance,

    {

      isLoading: updateLoading,

    },

  ] = useUpdateAttendanceMutation();

  const [

    deleteAttendance,

    {

      isLoading: deleteLoading,

    },

  ] = useDeleteAttendanceMutation();

  return {

    createAttendance,

    updateAttendance,

    deleteAttendance,

    createLoading,

    updateLoading,

    deleteLoading,

  };

}