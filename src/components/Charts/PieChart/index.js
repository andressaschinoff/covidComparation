import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
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

const PieChart = ({ results }) => {
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
    const { cases, deaths, suspects, refuses } = results;

    setChartData({
      labels: ['Casos', 'Mortes', 'Suspeitos', 'Descartados'],
      datasets: [{
        label: 'Meu primeiro gráfico de pizza',
        backgroundColor: ['#595d66', '#f44694', '#88a8fc', '#28ecce'],
        borderWidth: 1,
        hoverBackgroundColor: ['#595d66', '#f44694', '#88a8fc', '#28ecce'],
        hoverBorderColor: '#000',
        data: [cases, deaths, suspects, refuses],
      }],
    });
  }, [results]);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Pie
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: `Números do Estado: ${results.state}`,
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

export default PieChart;