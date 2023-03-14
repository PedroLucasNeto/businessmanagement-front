import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Appointments", "Quantity"],
  ["Feminino", 11],
  ["Moda", 5],
  ["Grávida", 3],
  ["Evento", 1],
  ["F", 7],
];

export const options = {
  title: "Quantidade de Ensaios",
  is3D: true,
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
