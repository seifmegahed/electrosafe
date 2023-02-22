/* eslint-disable react/jsx-props-no-spreading */
// React
import { SyntheticEvent, useState } from "react";

// MUI
import { Tabs, Tab, Box } from "@mui/material";

// Components
import FormContainer from "../../Containers/FormContainer";
import TextFieldGenerator from "./TextFieldGenerator";
import SelectFieldGenerator from "./SelectFieldGenerator";
import ToggleFieldGenerator from "./ToggleFieldGenerator";
import CheckboxFieldGenerator from "./CheckboxFieldGenerator";

// Types
import { FieldsPropsTypes } from "../../../globalTypes";

// Functions
import { extractPureDataFromForm } from "../../../utils/conversions";
import { isDuplicateField } from "../../../utils/validation";

interface TabPanelProps {
  children: React.ReactNode;
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
  return null;
};

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

type FieldGenerator2Props = {
  fields: FieldsPropsTypes[];
  onSubmit: (values: FieldsPropsTypes) => void;
};

const FieldGenerator = ({ fields, onSubmit }: FieldGenerator2Props) => {
  const passValues = onSubmit;
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSubmit = (values: FieldsPropsTypes) => {
    const field = extractPureDataFromForm(values) as FieldsPropsTypes;
    if (isDuplicateField(field, fields)) return;
    passValues(field);
  };

  const tabs = [
    {
      label: "Text",
      component: <TextFieldGenerator onSubmit={handleSubmit} />,
    },
    {
      label: "Select",
      component: <SelectFieldGenerator onSubmit={handleSubmit} />,
    },
    {
      label: "Toggle",
      component: <ToggleFieldGenerator onSubmit={handleSubmit} />,
    },
    {
      label: "Checkbox",
      component: <CheckboxFieldGenerator onSubmit={handleSubmit} />,
    },
  ];

  return (
    <FormContainer title="Field Generator">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", gridColumn: "span 4" }}
      >
        <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable">
          {tabs.map((tab, index) => (
            <Tab key={tab.label} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      <>
        {tabs.map((tab, index) => (
          <TabPanel key={tab.label} value={tabValue} index={index}>
            {tab.component}
          </TabPanel>
        ))}
      </>
    </FormContainer>
  );
};

export default FieldGenerator;
