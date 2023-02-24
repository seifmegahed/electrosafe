/* eslint-disable react/jsx-props-no-spreading */
// React
import { Draggable } from "react-beautiful-dnd";

// Components
import AccordionStyled from "../../Containers/AccordionStyled";
import Summary from "./Summary";
import Details from "./Details";

// Types
import { FieldsPropsTypes } from "../../../globalTypes";

const FieldBlock = ({
  field,
  index,
  expanded,
  onExpand,
  onDelete,
}: {
  field: FieldsPropsTypes;
  index: number;
  expanded: number | false;
  onExpand: (index: number) => void;
  onDelete: () => void;
}) => {
  const handleDelete = onDelete;
  const handleExpand = onExpand;
  return (
    <Draggable key={field.name} index={index} draggableId={field.name}>
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
                title={field.input !== "toggle" ? field.label : field.name}
                subtitle={field.input}
              />
            }
            details={<Details field={field} onDelete={handleDelete} />}
          />
        </div>
      )}
    </Draggable>
  );
};

export default FieldBlock;
