import React from 'react'
import { AiFillContainer } from "react-icons/ai";
import { Link } from 'react-router';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 4500,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ThirdBox = () => {
  return (
    <div className="Third-Box">
            <div className="box-info-section">
        <div className="top-boxs-section">
          <AiFillContainer style={{color:"#2a6b83", fontSize:"20px"}} />
          <span>Total Products</span>
        </div>
        <h1>270</h1>
        <Link to="/" style={{fontSize:"16px", color:"#2a6b83",letterSpacing:"1px"}}>View All</Link>
      </div>
      <div className="box-chart-section">
        <div className="chart-contain">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Tooltip contentStyle={{background:"transparent",border:"none"}} labelStyle={{display:"none"}} position={{x:10, y:44}}/>
              <Line type="monotone" dataKey="pv" stroke="#2a6b83" strokeWidth={2} dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-text-contain">
          <span className="percentage" style={{color:"red"}}>-12%</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default ThirdBox