import { useEffect, useState, useMemo } from "react";
import "./App.css";
import { useStatistics } from "./useStatistics";
import { Chart } from "./Chart";

export default function App() {
  const statistics = useStatistics(10);

  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );

  return (
    <div style={{ height: "120px" }}>
      <Chart data={cpuUsages} maxDataPoints={10} selectedView="CPU" />
    </div>
  );
}
