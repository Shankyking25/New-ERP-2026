import {

  useCreateEmployeeMutation,

  useUpdateEmployeeMutation,

  useDeleteEmployeeMutation,

} from "../api/employeeApi";

export default function useEmployee() {

  const [

    createEmployee,

    createState,

  ] = useCreateEmployeeMutation();

  const [

    updateEmployee,

    updateState,

  ] = useUpdateEmployeeMutation();

  const [

    deleteEmployee,

    deleteState,

  ] = useDeleteEmployeeMutation();

  return {

    createEmployee,

    updateEmployee,

    deleteEmployee,

    createLoading: createState.isLoading,

    updateLoading: updateState.isLoading,

    deleteLoading: deleteState.isLoading,

  };

}