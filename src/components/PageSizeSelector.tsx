import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface PageSizeSelectorProps {
  onPageSizeChange: (pageSize: number) => void;
}

export default function PageSizeSelector({
  onPageSizeChange,
}: PageSizeSelectorProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>Page size</InputLabel>
      <Select
        label='Page size'
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
