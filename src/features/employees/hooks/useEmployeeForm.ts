import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  employeeSchema,
  type EmployeeSchemaType,
} from "../schemas/employeeSchema";

import { employeeDefaultValues } from "../utils/employeeDefaultValues";

export default function useEmployeeForm() {

  return useForm<EmployeeSchemaType>({
    resolver: zodResolver(employeeSchema),
    defaultValues: employeeDefaultValues,
    mode: "onChange",
  });

}