import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ACNAreaChart = ({
  width = "100%",
  height = 400,
  dataKey = "uv",
  stroke = "#8884d8",
  fill = "#8884d8",
  data,
  showGrid,
  showTootlTip,
  showLegend,
  themeName,
  multipleSvg,
  isStacked,
}) => (
  <ResponsiveContainer width={width} height={height}>
    {!multipleSvg && (
      <AreaChart data={data}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey="name" />
        <YAxis />
        {showTootlTip && <Tooltip />}
        {showLegend && <Legend />}
        {!isStacked && (
          <Area type="monotone" dataKey={dataKey} stroke={stroke} fill={fill} />
        )}
        {isStacked && (
          <>
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </>
        )}
      </AreaChart>
    )}

    {multipleSvg && (
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        {showTootlTip && <Tooltip />}
        {showLegend && <Legend />}
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    )}
  </ResponsiveContainer>
);

export default ACNAreaChart;
