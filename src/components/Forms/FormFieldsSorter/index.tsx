/* eslint-disable react/jsx-props-no-spreading */
// React
import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

// Components
import FieldBlock from "./FieldBlock";

// Types
import { FieldsPropsTypes } from "../../../globalTypes";

// Constants
import {
  COMPONENT_BOX_SHADOW,
  COMPONENT_MAX_WIDTH,
} from "../../../globalConstants";

type FormFieldsSorterProps = {
  fields: FieldsPropsTypes[];
  onChange: (values: FieldsPropsTypes[]) => void;
};

const FormFieldsSorter = ({ fields, onChange }: FormFieldsSorterProps) => {
  const handleChange = onChange;
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleDelete = (field: FieldsPropsTypes) => {
    handleChange(
      fields.filter((currentField) => currentField.name !== field.name)
    );
  };

  const handleDrag = (result: DropResult) => {
    if (!result.destination) return;
    const temp = Array.from(fields);
    const [reorderedItem] = temp.splice(result.source.index, 1);
    temp.splice(result.destination.index, 0, reorderedItem);
    handleChange(temp);
  };

  const handleExpand = (index: number) => {
    if (expanded === index) setExpanded(false);
    else setExpanded(index);
  };
  return (
    <DragDropContext onDragEnd={handleDrag}>
      <Droppable droppableId="FieldsDataDroppable">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              background: "#fefefe",
              gridColumn: "span 4",
              width: "100%",
              maxWidth: COMPONENT_MAX_WIDTH,
              boxShadow: COMPONENT_BOX_SHADOW,
              borderRadius: "10px",
            }}
          >
            {fields.map((field, index) => (
              <FieldBlock
                key={field.name}
                index={index}
                expanded={expanded}
                field={field}
                onDelete={() => handleDelete(field)}
                onExpand={handleExpand}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default FormFieldsSorter;
