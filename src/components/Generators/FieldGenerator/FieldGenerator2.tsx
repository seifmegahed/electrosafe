// React
import { SyntheticEvent, useState } from "react";
// Firebase
// MUI
import { Tabs, Tab, Typography, Box, Button } from "@mui/material";
// Components
import FormContainer from "../../Containers/FormContainer";
import TextFieldGenerator from "./TextFieldGenerator";
import {
  formButtonStyle,
  singleButtonFormContainerStyle,
} from "../../../globalConstants";
import { Add } from "@mui/icons-material";
import GridWrapper from "../../Containers/GridWrapper";
import { FieldsPropsTypes } from "../../../globalTypes";
// Types

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  if (index === value)
    return (
      <div
        role="tabpanel"
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        style={{ gridColumn: "span 4" }}
        {...other}
      >
        {children}
      </div>
    );
  return <></>;
};

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

const FieldGenerator2 = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSubmit = (values: FieldsPropsTypes) => {
    console.log(values);
  };

  const tabs = [
    {
      label: "Text",
      component: <TextFieldGenerator onSubmit={handleSubmit} />,
    },
    { label: "Select", component: "Select" },
    { label: "Toggle", component: "Toggle" },
    { label: "Checkbox", component: "Checkbox" },
    { label: "Lister", component: "Lister" },
  ];

  return (
    <FormContainer title="Field Generator">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", gridColumn: "span 4" }}
      >
        <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable">
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={tabValue} index={index}>
          {tab.component}
        </TabPanel>
      ))}
    </FormContainer>
  );
};

export default FieldGenerator2;
