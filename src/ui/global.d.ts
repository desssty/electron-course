export {};

declare global {
  interface Window {
    electron: {
      subscribeStatistics: (callback: (stats: StatisticsData) => void) => void;
      getStaticData: () => void;
    };
  }

  interface StatisticsData {
    cpuUsage: number;
    ramUsage: number;
    storageData: number;
  }
}
