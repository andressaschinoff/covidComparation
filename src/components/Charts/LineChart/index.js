import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
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

const LineChart = ({ result1, result2 }) => {
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
    const { state, cases, deaths, suspects, refuses } = result1;
    const { state: state2, cases: cases2, deaths: deaths2, suspects: suspect2, refuses: refuses2 } = result2;

    setChartData({
      labels: [state, state2],
      datasets: [{
        label: 'Casos',
        backgroundColor: '#595d66',
        borderColor: '#959cab',
        pointHoverBackgroundColor: '#595d66',
        fill: false,
        lineTension: 0.1,
        pointBorderWidth: 3,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 4,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [cases, cases2],
      }, {
        label: 'Mortes',
        backgroundColor: '#f44694',
        borderColor: '#ffc0cb',
        pointHoverBackgroundColor: '#f44694',
        fill: false,
        lineTension: 0.1,
        pointBorderWidth: 3,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 4,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [deaths, deaths2]
      }, {
        label: 'Suspeitos',
        backgroundColor: '#88a8fc',
        borderColor: '#c1d1fd',
        pointHoverBackgroundColor: '#88a8fc',
        fill: false,
        lineTension: 0.1,
        pointBorderWidth: 3,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 4,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [suspects, suspect2]
      }, {
        label: 'Descartados',
        backgroundColor: '#28ecce',
        borderColor: '#acf3e8',
        pointHoverBackgroundColor: '#28ecce',
        fill: false,
        lineTension: 0.1,
        pointBorderWidth: 3,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 4,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [refuses, refuses2]
      }],
    });
  }, [result1, result2]);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Line data={chartData} />
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

export default LineChart;