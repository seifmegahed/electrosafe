// React
import { SyntheticEvent, useState } from "react";
// Firebase
// MUI
import { Tabs, Tab, Box } from "@mui/material";
// Components
import FormContainer from "../../Containers/FormContainer";
import TextFieldGenerator from "./TextFieldGenerator";
import { FieldsPropsTypes } from "../../../globalTypes";
import { extractPureDataFromForm } from "../../../utils/conversions";
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

type FieldGenerator2Props = {
  onSubmit: (values: FieldsPropsTypes) => void;
};

const FieldGenerator2 = ({ onSubmit }: FieldGenerator2Props) => {
  const passValues = onSubmit;
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSubmit = (values: FieldsPropsTypes) => {
    passValues(extractPureDataFromForm(values) as FieldsPropsTypes);
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
