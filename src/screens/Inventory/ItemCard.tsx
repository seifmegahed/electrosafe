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
    <CardContainer key={item.name as string} height={120}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "10px", marginLeft: "-10px" }}>
          <Checkbox size="medium" />
        </div>
        <div style={{ width: "50%", flexShrink: 0 }}>
          <Typography fontWeight={600} variant="h6">
            {item.name as string}
          </Typography>
          <Typography fontWeight={500} fontSize={12} color="text.secondary">
            {(item.id as string).toUpperCase()}
          </Typography>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
              marginRight: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography fontWeight={600}>{item.make as string}</Typography>
              <Typography fontWeight={500} fontSize={12} color="text.secondary">
                {item.mpn as string}
              </Typography>
            </div>
            <Typography fontWeight={600}>
              {(item.quantity as string) || 0}
            </Typography>
          </div>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </CardContainer>
  );
};

export default ItemCard;
