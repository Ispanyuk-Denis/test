import React, { useEffect, useState } from "react";
import * as Styled from "./style";

export const Tab = ({ children, active = 0 }) => {
    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabsData] = useState([]);

    useEffect(() => {
        let data = [];

        React.Children.forEach(children, (element) => {
            if (!React.isValidElement(element)) return;

            const {
                props: { tab, children },
            } = element;
            data.push({ tab, children });
        });

        setTabsData(data);
    }, [children]);
    return (
        <Styled.TabContainer>
            <Styled.TabNav>
                {tabsData.map(({ tab }, index) => 
                    <Styled.TabItem key={index}>
                        <Styled.TabLink onClick={() => setActiveTab(index)}>{tab}</Styled.TabLink>
                    </Styled.TabItem>
                )}
            </Styled.TabNav>

            <Styled.TabContent>
                {tabsData[activeTab] && tabsData[activeTab].children}
            </Styled.TabContent>
        </Styled.TabContainer>
    );
};

const TabPane = ({ children }) => {
    return { children };
};

Tab.TabPane = TabPane;

export default Tab;
