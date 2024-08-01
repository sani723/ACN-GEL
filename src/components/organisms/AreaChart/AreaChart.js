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
}) => (
  <ResponsiveContainer width={width} height={height}>
    <AreaChart data={data}>
      {showGrid && <CartesianGrid strokeDasharray="3 3" />}
      <XAxis dataKey="name" />
      <YAxis />
      {showTootlTip && <Tooltip />}
      {showLegend && <Legend />}
      <Area type="monotone" dataKey={dataKey} stroke={stroke} fill={fill} />
    </AreaChart>
  </ResponsiveContainer>
);

export default ACNAreaChart;
