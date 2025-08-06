import React, { useState } from "react";
export default function Folder({ folderInfo }) {
    const [expand, setExpand] = useState(false);

    if (folderInfo.isFolder) { // if folder
        return <div>
            <span onClick={() => setExpand(!expand)} style={{ cursor: 'pointer' }}>
                📁
                {folderInfo.name}
                <br />
            </span>
            <div
                style={{ display: expand ? "block" : "none", paddingLeft: "20px" }}
            >
                {folderInfo.items.map((subfolderInfo, ind) => (
                    <Folder folderInfo={subfolderInfo} key={ind} />
                ))}
            </div>
        </div>
    } else { // if file
        return <span>
            🏢
            {folderInfo.name} <br />
        </span>

    }
}




import React, { useEffect, useState } from 'react';
import './TrafficLight.css';

const config = {
    red: { backgroundColor: 'red', duration: 4000, next: 'green' },
    yellow: { backgroundColor: 'yellow', duration: 1000, next: 'red' },
    green: { backgroundColor: 'green', duration: 3000, next: 'yellow' }
};
export default function TrafficLight() {
    const [currentColor, setCurrentColor] = useState('green');

    useEffect(() => {
        const { duration, next } = config[currentColor];
        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);
        return () => {
            clearTimeout(timerId);
        };
    }, [currentColor]);

    return <div className="wrapper">
        <div className='traffic-light-container traffic-light-container--vertical'>
            {Object.keys(config).map((color) => (
                <div key={color} className="traffic-light"
                    style={{
                        backgroundColor: color === currentColor
                            ? config[color].backgroundColor
                            : ''
                    }}
                />
            ))}
        </div>
    </div>
}
-------------------------
.wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
}
.traffic-light-container {
    background-color: #000;
    border-radius: 8px;
    display: flex;
    padding: 8px;
    gap: 8px;
}
.traffic-light-container--vertical {
    flex-direction: column;
}
.traffic-light {
    --size: 50px;
    background-color: #555;
    border-radius: var(--size);
    height: var(--size);
    width: var(--size);
}
