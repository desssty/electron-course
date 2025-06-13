type Statistics = {
  cpuUsage: number;
  ramUsage: number;
  storageData: number;
};

type StaticData = {
  totalStorage: number;
  cpuModel: string;
  totalMemoryGB: number;
};

type View = "CPU" | "RAM" | "STORAGE";

type EventPayLoadMapping = {
  statistics: Statistics;
  getStaticData: StaticData;
  changeView: View;
};

type UnsubscribeFunction = () => void;

interface Window {
  electron: {
    subscribeStatistics: (
      callback: (stats: StatisticsData) => void
    ) => UnsubscribeFunction;
    getStaticData: () => Promise<StaticData>;
    subscribeChangeView: (
      callback: (view: View) => void
    ) => UnsubscribeFunction;
  };
}
