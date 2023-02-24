// MUI
import { IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

// Types
import {
  GenericObject,
  SelectFieldPropsType,
  ToggleFieldPropsType,
} from "../../../globalTypes";

const Details = ({
  field,
  onDelete,
}: {
  field: GenericObject;
  onDelete: () => void;
}) => {
  const handleDelete = onDelete;
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
        {field.permanent === undefined && (
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        )}
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

export default Details;
