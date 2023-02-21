/* eslint-disable react/jsx-props-no-spreading */
// React
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

// MUI
import { IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

// Components
import AccordionStyled from "../Containers/AccordionStyled";

// Types
import {
  FieldsPropsTypes,
  GenericObject,
  SelectFieldPropsType,
  ToggleFieldPropsType,
} from "../../globalTypes";

// Constants
import { componentBoxShadow, componentMaxWidth } from "../../globalConstants";

const Summary = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <Typography
      variant="h6"
      sx={{ alignSelf: "center", width: { xs: "100%" } }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        width: "100%",
        alignSelf: "center",
        color: "text.secondary",
        display: { xs: "none", sm: "block" },
      }}
    >
      {`${subtitle} Field`.toUpperCase()}
    </Typography>
  </>
);

const Details = ({ field }: { field: GenericObject }) => {
  const fieldKeys: string[] = Object.keys(field);
  return (
    <div style={{ gridColumn: "span 4", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 20px",
        }}
      >
        <IconButton>
          <Delete />
        </IconButton>
      </div>
      {fieldKeys.map((key) => (
        <div
          key={key}
          style={{
            display: "flex",
            gridColumn: "span 4",
            margin: "8px 35px",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            {`${key.toUpperCase()}:`}
          </Typography>
          {key === "options" ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {(
                field as SelectFieldPropsType | ToggleFieldPropsType
              ).options.map((option, index) => (
                <Typography key={option.name}>
                  {`${index + 1}. ${option.label}`}
                </Typography>
              ))}
            </div>
          ) : (
            <Typography>
              {(field[key] as string | boolean) ? field[key]?.toString() : ""}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

type FormFieldsSorterProps = {
  fields: FieldsPropsTypes[];
  onSort: (values: FieldsPropsTypes[]) => void;
};

const FormFieldsSorter = ({ fields, onSort }: FormFieldsSorterProps) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleDrag = (result: DropResult) => {
    if (!result.destination) return;
    const temp = Array.from(fields);
    const [reorderedItem] = temp.splice(result.source.index, 1);
    temp.splice(result.destination.index, 0, reorderedItem);
    onSort(temp);
  };

  const handleExpand = (index: number) => {
    if (expanded === index) setExpanded(false);
    else setExpanded(index);
  };
  return (
    <DragDropContext onDragEnd={handleDrag}>
      <Droppable droppableId="FieldsDataDroppable">
        {(providedDrop) => (
          <div
            ref={providedDrop.innerRef}
            {...providedDrop.droppableProps}
            style={{
              background: "#fefefe",
              gridColumn: "span 4",
              width: "100%",
              maxWidth: componentMaxWidth,
              boxShadow: componentBoxShadow,
              borderRadius: "10px",
            }}
          >
            {fields.map((field, index) => (
              <Draggable
                key={field.name}
                index={index}
                draggableId={field.name}
              >
                {(provided) => (
                  <div
                    key={field.name}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <AccordionStyled
                      key={field.name}
                      dragHandleProps={provided.dragHandleProps}
                      draggable={false}
                      index={index}
                      expanded={expanded}
                      onExpand={handleExpand}
                      summary={
                        <Summary
                          title={
                            field.input !== "toggle" ? field.label : field.name
                          }
                          subtitle={field.input}
                        />
                      }
                      details={<Details field={field} />}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {providedDrop.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default FormFieldsSorter;
