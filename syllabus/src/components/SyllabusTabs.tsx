import React from "react";

import { WithTranslation, withTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const TabsWrapper = styled.div`
  padding-left: 1em;
  padding-top: 5px;
  height: 29px;
`;

const Tab = styled.button`
  padding: 0px 1rem;
  border-width: 0px;
  border-radius: 5px 5px 0 0;
  font-size: 16px;
`;

const SyllabusTabs = ({ t }: WithTranslation) => {
  const location = useLocation();
  const tabClassName =
    "text-light-text3 bg-light-bgSide dark:text-dark-text2 dark:bg-dark-bgSide";
  const activeTabClassName =
    "text-light-text1 bg-light-bgMain dark:text-dark-text1 dark:bg-dark-bgMain";

  const tabItems = [
    { path: "syllabus", name: "courses" },
    { path: "labs", name: "labs" },
  ];

  return (
    <TabsWrapper className="bg-light-bgSide dark:bg-dark-bgSide">
      {tabItems.map((item) => (
        <Link to={`/courses/${item.path}`} key={item.name}>
          <Tab
            className={
              location.pathname === `/courses/${item.path}`
                ? activeTabClassName
                : tabClassName
            }
          >
            {t(`syllabusTabs.${item.name}`)}
          </Tab>
        </Link>
      ))}
    </TabsWrapper>
  );
};

export default withTranslation("translation")(SyllabusTabs);
