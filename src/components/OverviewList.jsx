// Project files
import MetricCard from "./MetricCard";
import overviewData from "../data/overview.json";

export default function OverviewList() {
  // Constants
  const metricCardArray = overviewData.map((item) => (
    <MetricCard key={item.id} info={item} />
  ));

  return (
    <section>
      <h2>Overview - Today</h2>
      <div className="card-section">{metricCardArray}</div>
    </section>
  );
}
