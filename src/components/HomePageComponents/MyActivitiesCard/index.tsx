import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { Container, TitleActivities } from "./styles";

const MyLastAccessCard: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

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
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <Container>
      <TitleActivities>Minhas Atividades nesta Semana</TitleActivities>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default MyLastAccessCard;
