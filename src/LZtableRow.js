import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



function LZtableRow(props) {
    return (
        <TableRow >
          <TableCell className={props.className} numeric>{props.index}</TableCell>
          <TableCell className={props.className}>{props.row_info.buffer}</TableCell>
          <TableCell className={props.className}>&lt;{props.row_info.offset}, {props.row_info.distance}, {props.row_info.next_char}&gt;</TableCell>
        </TableRow>
    );
}

export default LZtableRow;
