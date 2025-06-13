import { useEffect, useState, useMemo } from "react";
import "./App.css";
import { useStatistics } from "./useStatistics";
import { Chart } from "./Chart";

export default function App() {
  const statistics = useStatistics(10);
  const [activeView, setActiveView] = useState<View>("CPU");

  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );

  const ramUsages = useMemo(
    () => statistics.map((stat) => stat.ramUsage),
    [statistics]
  );

  const storageUsages = useMemo(
    () => statistics.map((stat) => stat.storageData),
    [statistics]
  );

  const activeUsage = useMemo(() => {
    switch (activeView) {
      case "CPU":
        return cpuUsages;
      case "RAM":
        return ramUsages;
      case "STORAGE":
        return storageUsages;
    }
  }, [activeView, cpuUsages, ramUsages, storageUsages]);

  useEffect(() => {
    return window.electron.subscribeChangeView((view) => setActiveView(view));
  }, []);

  return (
    <div style={{ height: "120px" }}>
      <Chart data={activeUsage} maxDataPoints={10} selectedView="CPU" />
    </div>
  );
}
