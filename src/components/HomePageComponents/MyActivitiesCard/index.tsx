import React from "react";
import { Bar } from "react-chartjs-2";

import { Container, Title } from "./styles";

const MyLastAccessCard: React.FC = () => {
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    datasets: [
      {
        label: "Crachás Emitidos",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(31, 159, 132, 0.15)",
        borderColor: "rgba(31, 159, 132, 1)",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Container>
      <Title>Minhas Atividades</Title>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default MyLastAccessCard;
