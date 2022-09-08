import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { LineChart } from "./LineChart";
import { Donut } from "./Donut";
import { LoadingIndicator } from "../../../loadingIndicator/LoadingIndicator";

export const Chart = () => {
  const [graphLabels, setGraphLabels] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [topLocationsLabels, setTopLocationsLabels] = useState(null);
  const [topLocationsData, setTopLocationsData] = useState(null);
  const [topSourcesLabels, setTopSourcesLabels] = useState(null);
  const [topSourcesData, setTopSourcesData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://test.api.mainstack.io/");

        const graphData = response?.data?.graph_data?.views;
        const locationsData = response?.data?.top_locations;
        const sourcesData = response?.data?.top_sources;

        const graphValues = Object.values(graphData);
        const graphLabels = Object.keys(graphData);
        const locationsLabels = locationsData.map((data) => data.country);
        const locationsValues = locationsData.map((data) => data.percent);
        const sourcesLabels = sourcesData.map((data) => data.source);
        const sourcesValues = sourcesData.map((data) => data.percent);

        setGraphLabels(graphLabels);
        setGraphData(graphValues);
        setTopLocationsLabels(locationsLabels);
        setTopLocationsData(locationsValues);
        setTopSourcesLabels(sourcesLabels);
        setTopSourcesData(sourcesValues);
        setSuccess(true);
        setLoading(false);
      } catch (error) {
        setSuccess(false);
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <LoadingIndicator />;

  return (
    <div>
      <div className="dashboard__chart">
        <div className="dashboard__chart__headerWrapper">
          <h3 className="dashboard__chart__header">Page Views</h3>
          <Image src="/info.svg" alt="info" width="20px" height="20px" />
        </div>
        <div className="dashboard__chart__allTime">All time</div>
        <div className="dashboard__chart__number">500</div>

        {graphLabels &&
          graphData &&
          topSourcesLabels &&
          topSourcesData &&
          topLocationsLabels &&
          topLocationsData && (
            <LineChart graphLabels={graphLabels} graphData={graphData} />
          )}
      </div>

      {graphLabels &&
        graphData &&
        topSourcesLabels &&
        topSourcesData &&
        topLocationsLabels &&
        topLocationsData && (
          <div className="dashboard__donutsWrapper">
            <Donut
              labels={topLocationsLabels}
              data={topLocationsData}
              title="Top Locations"
            />
            <Donut
              labels={topSourcesLabels}
              data={topSourcesData}
              title="Top Referral source"
            />
          </div>
        )}
    </div>
  );
};
