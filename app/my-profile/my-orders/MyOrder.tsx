'use client';
import COLORS from '@/app/assets/theme/colors';
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const MyOrder = () => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Box className="tw-w-full">
      <h1 className="heading1 tw-uppercase tw-mb-[1rem] lg:tw-mb-[2rem]">
        My Order
      </h1>
      <TableContainer>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          stickyHeader={true}
        >
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Ship To</TableCell>
              <TableCell align="left">Order Total</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
                <TableCell align="left">
                  <Box className="tw-flex tw-items-center tw-min-w-fit">
                    <Link href="#" style={{ color: COLORS.colorLink }}>
                      View Order
                    </Link>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        margin: '0 16px',
                        color: COLORS.colorBorder,
                      }}
                    />
                    <Link href="#" style={{ color: COLORS.colorLink }}>
                      Reorder
                    </Link>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyOrder;
