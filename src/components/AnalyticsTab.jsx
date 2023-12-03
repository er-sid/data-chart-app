
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { getAnalyticsData } from '../services/api';
import {Data} from '../constant'

const AnalyticsTab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        // Fetching sample analytics data
        const response = await getAnalyticsData();
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch analytics data', error);
      }
    };

    fetchAnalyticsData();
  }, []);

  
  return (
    <BarChart width={600} height={300} data={data.length > 0 ? data : Data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#8884d8" />
    </BarChart>
  );
};

export default AnalyticsTab;
