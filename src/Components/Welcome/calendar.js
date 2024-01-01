import { Calendar as TCalendar, Tag } from "tdesign-react";

const calendarEventData = {
    "2024-01-01": [
        { title: "元旦", details: "过元旦过元旦过元旦过元旦过元旦过元旦过元旦" },
        { title: "吃饭", details: "添加到git仓库，然后去吃饭" },
    ],
    "2024-01-02": [
        { title: "上班", details: "休假结束，该上班了" },
        { title: "取快递", details: "香炉已经到了" },
    ]
};

function cellAppend(cellData) {
    if (cellData.mode !== "month" || !calendarEventData.hasOwnProperty(cellData.formattedDate)) {
        return null
    }
    let events = calendarEventData[cellData.formattedDate].slice(0, 3);
    return (
        <>
            {events.map((element, index) => (
                < Tag size="small" variant="light" theme="danger" >{element.title}</Tag >
            ))}
        </>
    );
}

export default function Calendar() {
    let controllerConfig = {
        weekend: {
            visible: false
        }
    }
    return (
        <TCalendar controllerConfig={controllerConfig} cellAppend={cellAppend} style={{ border: "none" }}></TCalendar >
    );
}