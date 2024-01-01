import { useState, useEffect } from "react";
import axios from "axios";
import { Timeline, Avatar } from 'tdesign-react';

export default function Tianqi() {
    const [data, setData] = useState({});
    const [tianqiCasts, setTianqiCasts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getTianqiData();
            setData(data);
            setTianqiCasts(data.casts);
        };
        fetchData();
    }, []);
    const avatarUrl = 'https://tdesign.gtimg.com/list-icon.png';
    return (
        <>
            {data.province}        {data.city}
            <Timeline mode="alternate">
                {tianqiCasts.map((element, index) => {
                    let description = `${element.dayweather} ${element.daytemp}℃ ${element.daypower}级${element.daywind}风`;
                    return (
                        <Timeline.Item
                            key={index}
                            label={element.date}
                            dotColor="primary"
                            labelAlign="right">
                            <Avatar image={avatarUrl} size="large" /><br />
                            {description}
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </>

    );
}

// 获取天气数据，每小时缓存
async function getTianqiData() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hour = currentDate.getHours();


    let value = localStorage.getItem("tianqi_data") || "{}";
    let data = JSON.parse(value);

    let time = year + "-" + month + "-" + day + "-" + hour;
    if (data.time && data.time === time) {
        return data.data;
    }

    try {
        let key = "fcd7cc06ff8eb56ba1ea33c01a4b2947";
        let city = "440306";
        let response = await axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}&extensions=all`);
        data.time = time;
        data.data = response.data.forecasts[0];
        localStorage.setItem("tianqi_data", JSON.stringify(data));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return data.data;
}