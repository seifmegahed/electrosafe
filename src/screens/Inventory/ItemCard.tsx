// React
// Firebase
// MUI
import { MoreVert } from "@mui/icons-material";
import { Checkbox, IconButton, Typography } from "@mui/material";
// Components
import CardContainer from "../../components/Containers/CardContainer";
import { HelperItemType } from "./firestore/items";
// Types

const ItemCard = ({ item }: { item: HelperItemType }) => {
  return (
    <CardContainer key={item.name} height={100}>
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
            {item.name}
          </Typography>
          <Typography fontWeight={500} fontSize={12} color="text.secondary">
            {item.mpn}
          </Typography>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={600}>{item.make}</Typography>
          <Typography fontWeight={600}>{item.quantity ?? 0}</Typography>
        </div>
      </div>
      <IconButton>
        <MoreVert />
      </IconButton>
    </CardContainer>
  );
};

export default ItemCard;
