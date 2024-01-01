import { Col, Row, Card } from "tdesign-react";
import Tianqi from "./tianqi";
import Calendar from "./calendar"
import "./index.css"

export default function Welcome() {

    return (
        <div className="root">
            <Row justify="center" gutter={8}>
                <Col span={3}>
                    <Tianqi />
                </Col>
                <Col span={4}>
                    <Calendar />
                </Col>
                <Col span={3}>
                    <Card title="xxxxxxxx" actions={"xxx"}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Card><br />
                    <Card title="xxxxxxxx" actions={"xxx"}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Card><br />
                    <Card title="xxxxxxxx" actions={"xxx"}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Card><br />
                    <Card title="xxxxxxxx" actions={"xxx"}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Card><br />
                    <Card title="xxxxxxxx" actions={"xxx"}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Card><br />
                    <Card title="xxxxxxxx" actions={"xxx"}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Card><br />
                </Col>
            </Row>
        </div>
    );
}

export function addHandler() { }