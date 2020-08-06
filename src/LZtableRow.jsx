import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  window: {
    backgroundColor: '#FE6B8B',
    borderRadius: '6px',
  },
  buffer: {
    backgroundColor: '#FF8E53',
    borderRadius: '6px',
  }
};

function LZtableRow (props) {
  const next_char = props.row_info.next_char ? props.row_info.next_char : "⊥";
  return (
    <TableRow>
      <TableCell className={ props.className }>{ props.index }</TableCell>
      <TableCell className={ props.className }>
        <span>{props.row_info.head}</span>
        <span className={ props.classes.window }>{ props.row_info.window }</span>
        <span className={ props.classes.buffer }>{ props.row_info.buffer }</span>
        <span>{ props.row_info.tail }</span>
      </TableCell>
      <TableCell className={ props.className }>
        &lt;{ props.row_info.offset }, { props.row_info.distance }, { next_char }&gt;
      </TableCell>
    </TableRow>
  );
}

export default withStyles(styles)(LZtableRow);
