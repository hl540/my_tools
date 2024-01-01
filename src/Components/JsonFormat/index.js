import { Divider, Textarea } from "tdesign-react";

export default function JsonFormat() {
    return (
        <div>
            <Divider align="left">原始内容</Divider>
            <Textarea autofocus={true}></Textarea>
            <Divider align="left">格式化内容</Divider>
            <Textarea readonly={true}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Textarea>
        </div>
    );
}