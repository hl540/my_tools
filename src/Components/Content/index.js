import { Layout, Tabs } from "tdesign-react"
import Welcome from "../Welcome";

export default function Content({ tabs, delHandler }) {
    return (
        <Layout.Content>
            <Tabs defaultValue="welcome" onRemove={delHandler}>
                <Tabs.TabPanel value="welcome" label="Welcome">
                    <div className="tabs-content" >
                        <Welcome />
                    </div>
                </Tabs.TabPanel>
                {tabs.map((element, index) => (
                    <Tabs.TabPanel removable={element.isDefault ? false : true} key={element.value} value={element.value} label={element.name}>
                        <div className="tabs-content" >{element.Component}</div>
                    </Tabs.TabPanel>
                ))}
            </Tabs>
        </Layout.Content>
    );
}