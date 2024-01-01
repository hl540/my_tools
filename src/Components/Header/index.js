import { Layout, Menu } from "tdesign-react";

export default function Header({ tools, newTabHandler }) {
    return (
        <Layout.Header>
            <Menu.HeadMenu
                theme="dark"
                logo={<Logo src="https://tdesign.gtimg.com/site/baseLogo-light.png" />}>
                {tools.map((element, index) => (
                    <Menu.MenuItem
                        key={index}
                        value={index}
                        onClick={newTabHandler}>{element.name}</Menu.MenuItem>
                ))}
            </Menu.HeadMenu>
        </Layout.Header>
    );
}

function Logo({ src }) {
    return (
        <img src={src} height="28" alt="logo" />
    );
}