import { Pagination, Stack } from "@mui/material";

interface PaginationProps {
  pageCount: number;
  pageIndex: number;
  onPageChange: (page: number) => void;
}

export default function PaginationComponent({
  pageCount,
  pageIndex,
  onPageChange,
}: PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        color='primary'
        page={pageIndex + 1}
        onChange={(_, value) => onPageChange(value - 1)}
      />
    </Stack>
  );
}
