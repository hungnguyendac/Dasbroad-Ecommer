import React from 'react'
import ApexCharts from "react-apexcharts";
const ChartAdmin = ({options_1, options_2}) => {
  return (
      <>
          <div className="title-group mb-3">
              <h1 className="h2 mb-0">Overview</h1>
              <small className="text-muted">Hello Thomas, welcome back!</small>
          </div>
          <div className="row my-4">
              <div className="col-lg-12 col-12">
                  <div className="custom-block bg-white">
                      <h5 className="mb-4">History</h5>
                      <div id="pie-chart">
                          <ApexCharts
                              options={options_1}
                              series={options_1.series}
                              type="pie"
                              width="380"
                          />
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-12">
                  <div className="custom-block bg-white">
                      <div id="chart">
                          <ApexCharts
                              options={options_2}
                              series={options_2.series}
                              type="bar"
                              height={350}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default ChartAdmin