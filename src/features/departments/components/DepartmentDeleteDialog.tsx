import DeleteDialog from "../../employees/components/DeleteDialog";
interface Props {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DepartmentDeleteDialog({
  open,
  onClose,
  onDelete,
}: Props) {
  return (
    <DeleteDialog
      open={open}
      onClose={onClose}
      onDelete={onDelete}
    />
  );
}