import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LZtableRow from 'LZtableRow';

const styles = {
  lztable: {
    marginTop: '20px',
    fontSize: '1.5rem !important',
    border: 0,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  lztableheading: {
    background: 'rgb(254,107,139)',
    background: '-moz-linear-gradient(90deg, rgba(254,107,139,1) 0%, rgba(255,142,83,1) 100%)',
    background: '-webkit-linear-gradient(90deg, rgba(254,107,139,1) 0%, rgba(255,142,83,1) 100%)',
    background: 'linear-gradient(90deg, rgba(254,107,139,1) 0%, rgba(255,142,83,1) 100%)',
    backgroundAttachment: 'fixed', // safari fix
    border: 0,
  },
  lztableheadingcell: {
    fontSize: '1.7rem',
  },
  lztablecell: {
    fontSize: '1.3rem',
    fontFamily: 'Roboto Mono, Lucida Console, DejaVu Sans Mono, Monaco, monospace'
  },
};

function LZtable (props) {
  const dict_info = props.dict_info;
  const table_rows = dict_info.map((row_info, index) => {
    return (
      <LZtableRow className={ props.classes.lztablecell }
                  key={ index }
                  index={ index }
                  row_info={ row_info }
      />
    );
  });
  return (
    <Table className={ props.classes.lztable }>
      <TableHead className={ props.classes.lztableheading }>
        <TableRow>
          <TableCell className={ props.classes.lztableheadingcell }>
            Step
          </TableCell>
          <TableCell className={ props.classes.lztableheadingcell }>
            Window & Buffer
          </TableCell>
          <TableCell className={ props.classes.lztableheadingcell }>
            &lt;Offset, Length, Next Char&gt;
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {table_rows}
      </TableBody>
    </Table>
  );
}


export default withStyles(styles)(LZtable);
