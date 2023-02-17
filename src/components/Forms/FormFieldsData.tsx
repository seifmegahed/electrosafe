// React
import { useState } from "react";

// MUI
import { IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

// Components
import AccordionStyled from "../Containers/AccordionStyled";

// Types
import { FieldsPropsTypes, OptionType } from "../../globalTypes";

// Constants
import { componentBoxShadow, componentMaxWidth } from "../../globalConstants";

const FormFieldsData = ({ fields }: { fields: FieldsPropsTypes[] }) => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const handleExpand = (index: number) => {
    if (expanded === index) setExpanded(false);
    else setExpanded(index);
  };
  return (
    <div
      style={{
        gridColumn: "span 4",
        width: "100%",
        maxWidth: componentMaxWidth,
        boxShadow: componentBoxShadow,
        borderRadius: "10px",
      }}
    >
      {fields.map((field, index) => (
        <AccordionStyled
          key={index}
          index={index}
          expanded={expanded}
          onExpand={handleExpand}
          summary={
            <Summary
              title={field.input !== "toggle" ? field.label : field.name}
              subtitle={field.input}
            />
          }
          details={<Details field={field} />}
        />
      ))}
    </div>
  );
};

const Summary = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <Typography
      variant="h6"
      sx={{ alignSelf: "center", width: "33%", flexShrink: 0 }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        width: "100%",
        alignSelf: "center",
        color: "text.secondary",
      }}
    >
      {`${subtitle} Field`.toUpperCase()}
    </Typography>
    <IconButton>
      <Menu />
    </IconButton>
  </>
);

const Details = ({ field }: { field: any }) => {
  const fieldKeys = Object.keys(field);
  return (
    <div style={{ gridColumn: "span 4", width: "100%" }}>
      {fieldKeys.map((key, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gridColumn: "span 4",
            margin: "8px 35px",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <Typography sx={{ width: "38%", flexShrink: 0 }}>
            {`${key.toUpperCase()}:`}
          </Typography>
          {key === "options" ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {field.options.map((option: OptionType, index: number) => (
                <Typography key={index}>{`${index + 1}. ${
                  option.label
                }`}</Typography>
              ))}
            </div>
          ) : (
            <Typography>
              {(field[key] as string | boolean).toString()}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormFieldsData;
