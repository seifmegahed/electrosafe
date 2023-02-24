// React
// Firebase
// MUI
import { MoreVert } from "@mui/icons-material";
import { Checkbox, IconButton, Typography } from "@mui/material";
// Components
import CardContainer from "../../components/Containers/CardContainer";
// Types

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ItemCard = ({ item }: { item: any }) => {
  return (
    <CardContainer key={item.name as string} height={100}>
      <Checkbox size="medium" />
      <div
        style={{
          padding: "0 10px",
          display: "flex",
          width: "100%",
          height: "fit-content",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%", flexShrink: 0 }}>
          <Typography fontWeight={600} variant="h6">
            {item.name as string}
          </Typography>
          <Typography fontWeight={500} fontSize={12} color="text.secondary">
            {item.mpn as string}
          </Typography>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={600}>{item.make as string}</Typography>
          <Typography fontWeight={600}>
            {(item.quantity as string) || 0}
          </Typography>
        </div>
      </div>
      <IconButton>
        <MoreVert />
      </IconButton>
    </CardContainer>
  );
};

export default ItemCard;
