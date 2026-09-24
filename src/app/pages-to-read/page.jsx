"use client";

import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Figma ডিজাইনের হুবহু ডেটা
const data = [
  { name: "The Great Gatsby", pages: 192 },
  { name: "To kill a mocking bird", pages: 281 },
  { name: "1984", pages: 328 },
  { name: "The Alchemist", pages: 177 },
  { name: "Pride and prejudice", pages: 279 },
];

// Figma ডিজাইনের নিখুঁত ৫টি কালার
const colors = ["#0085FF", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

// Curved Triangle shape generator
const getPath = (x, y, width, height) => {
  return `M ${x},${y + height} 
          C ${x + width / 3},${y + height} ${x + width / 2 - 2},${y + height / 2} ${x + width / 2},${y} 
          C ${x + width / 2 + 2},${y + height / 2} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height} 
          Z`;
};

const CustomTriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// বার-এর উপরে কালারফুল সংখ্যা দেখানোর জন্য কাস্টম লেবেল
const CustomLabel = (props) => {
  const { x, y, width, value, index } = props;
  return (
    <text
      x={x + width / 2}
      y={y - 10}
      fill={colors[index % colors.length]}
      textAnchor="middle"
      fontSize={14}
      fontWeight="bold"
    >
      {value}
    </text>
  );
};

const PagesToRead = () => {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-8">
      <div className="flex h-[520px] w-full items-center justify-center rounded-3xl bg-gray-50/80 p-6 md:p-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 40,
              right: 30,
              left: 0,
              bottom: 30,
            }}
          >
            {/* Light gray dotted grid lines */}
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
            
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 13 }}
              dy={10}
            />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 13 }}
              domain={[0, 340]}
              ticks={[0, 85, 170, 255, 340]}
              tickFormatter={(value) => (value === 0 ? "00" : value)}
            />
            
            <Bar
              dataKey="pages"
              shape={<CustomTriangleBar />}
              label={<CustomLabel />}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PagesToRead;