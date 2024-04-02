import {
  Alert,
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { useTable, useSortBy, usePagination } from "react-table";
import { Columns, Data } from "../types";
import { useMemo } from "react";
import { useFetch } from "../useFetch";
import { useStore } from "../store/store";
import Spinner from "./Spinner";
import PageSizeSelector from "./PageSizeSelector";
import PaginationComponent from "./PaginationComponent";

export default function TagsTable() {
  const { data, isLoading, isError } = useStore();

  useFetch();

  const columns: Columns[] = useMemo(
    () => [
      {
        Header: "No.",
        accessor: "number",
        Cell: ({ row }) => <span>{row.index + 1}</span>,
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Count",
        accessor: "count",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    pageOptions,
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data: data as Data[],
    },
    useSortBy,
    usePagination
  );

  if (isLoading) return <Spinner />;

  return (
    <Container
      sx={{
        width: 700,
        margin: "auto",
        marginTop: 5,
        marginBottom: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isError ? (
        <Alert severity='error'>{isError}</Alert>
      ) : (
        <>
          <Box
            sx={{
              width: 80,
              display: "flex",
              alignSelf: "flex-end",
              marginBottom: 2,
            }}
          >
            <PageSizeSelector
              onPageSizeChange={setPageSize}
              label='Page size'
            />
          </Box>

          <TableContainer component={Paper} elevation={3}>
            <Table {...getTableProps()}>
              <TableHead sx={{ backgroundColor: "#e5e7eb" }}>
                {headerGroups.map((headerGroup) => (
                  <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <TableCell
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <TableSortLabel
                          active={column.isSorted}
                          direction={column.isSortedDesc ? "desc" : "asc"}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <TableRow {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <TableCell {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              marginTop: 2,
            }}
          >
            <PaginationComponent
              pageCount={Math.ceil(pageOptions.length)}
              pageIndex={state.pageIndex}
              onPageChange={gotoPage}
            />
          </Box>
        </>
      )}
    </Container>
  );
}
