import {

  useAddAttendanceMutation,

  useDeleteAttendanceMutation,

  useUpdateAttendanceMutation,

} from "../api/attendanceApi";

export default function useAttendance() {

  const [

    addAttendance,

    {

      isLoading: createLoading,

    },

  ] = useAddAttendanceMutation();

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

    addAttendance,

    updateAttendance,

    deleteAttendance,

    createLoading,

    updateLoading,

    deleteLoading,

  };

}