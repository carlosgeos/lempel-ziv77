import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LZtableRow from './LZtableRow';

const styles = {
    lztable: {
        marginTop: '60px',
        fontSize: '1.5rem !important',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // borderRadius: 3,
        border: 0,
        // color: 'white',
        // height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    table_heading: {
        fontSize: '1.5rem',
    },
    table_cell: {
        fontSize: '1.1rem',
    }
};

function LZtable(props) {
    const dict_info = props.dict_info;
    const table_rows = dict_info.map(
        (row_info, index) =>
            <LZtableRow className={props.classes.table_cell} key={index} index={index} row_info={row_info} />
    );
    const table_headings = ["Step", "Window & Buffer", "<Offset, Length, Next Char>"].map(
        (cell, index) =>
            <TableCell className={props.classes.table_heading} key={index}>{cell}</TableCell>
    );
    return (
        <Table className={props.classes.lztable}>
          <TableHead>
            <TableRow>
              {table_headings}
            </TableRow>
          </TableHead>
          <TableBody>
            {table_rows}
          </TableBody>
        </Table>
    );
}


export default withStyles(styles)(LZtable);
