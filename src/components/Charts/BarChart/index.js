import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 1000,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #88a8fc',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 3, 2),
  },
}));

const BarChart = ({ result1, result2 }) => {
  const [chartData, setChartData] = useState({});
  const [open, setOpen] = useState(false);
  
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const { cases, deaths, suspects, refuses, outputDate } = result1;
    const { cases: cases2, deaths: deaths2, suspects: suspect2, refuses: refuses2, outputDate: outputDate2 } = result2;

    setChartData({
      labels: ['Casos', 'Mortes', 'Suspeitos', 'Descartados'],
      datasets: [{
        label: `Dia ${outputDate}`,
        backgroundColor: ['#595d66', '#f44694', '#88a8fc', '#28ecce'],
        borderWidth: 1,
        hoverBackgroundColor: ['#595d66', '#f44694', '#88a8fc', '#28ecce'],
        data: [cases, deaths, suspects, refuses],
      }, {
        label: `Dia ${outputDate2}`,
        backgroundColor: ['#959cab', '#ffc0cb', '#c1d1fd', '#acf3e8'],
        borderWidth: 1,
        hoverBackgroundColor: ['#959cab', '#ffc0cb', '#c1d1fd', '#acf3e8'],
        data: [cases2, deaths2, suspect2, refuses2],
      }],
    });
  }, [result1, result2]);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: `Números do Estado ${result1.state} nos dias ${result1.outputDate} e ${result2.outputDate}`,
            display: true,
            fontSize: 24,
          },
        }}
      />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>Gráfico</button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
};

export default BarChart;