import React from "react";
import { Layout, Card } from "tdesign-react";
import JsonFormat from "./Components/JsonFormat";
import Header from "./Components/Header";
import Content from "./Components/Content";

const tools = [
    {
        name: "json格式化",
        Component: <JsonFormat />
    }
];

const dtabs = [
    {
        value: Date.now() + 2,
        name: "tab2",
        Component: <Card>wwwwwwwwwwwwwwwwwwwwwwwwwww</Card>
    },
]

function App() {
    const [tabs, setTabs] = React.useState(dtabs);
    // 删除tab
    function delTab(opt) {
        let newTabs = tabs.filter((item, index) => {
            return item.value !== opt.value;
        });
        setTabs(newTabs);
    }

    return (
        <Layout>
            <Header tools={tools} />
            <Content tabs={tabs} delHandler={delTab} />
            <Layout.Footer>
                xxxxxxxxxxxxxxxxxxxx
            </Layout.Footer>
        </Layout >
    );
}

export default App;
