import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface PageSizeSelectorProps {
  onPageSizeChange: (pageSize: number) => void;
  label: string;
}

export default function PageSizeSelector({
  onPageSizeChange,
  label,
}: PageSizeSelectorProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        defaultValue={10}
        onChange={(e) => {
          onPageSizeChange(Number(e.target.value));
        }}
      >
        {[5, 10, 20].map((pageSize) => (
          <MenuItem key={pageSize} value={pageSize}>
            {pageSize}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
