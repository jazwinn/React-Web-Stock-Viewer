import { useEffect, useRef } from "react";
import { Chart, LineController } from "chart.js";
import "../index.css";

export default function StockGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Stock Price",
            data: [100, 110, 120, 130, 140, 150, 160],
            borderColor: "rgba(75,192,192,1)",
            fill: false,
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true
      }
    });

    return () => myChart.destroy();
  }, []);

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}