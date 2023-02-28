// React
import { useNavigate } from "react-router-dom";

// MUI
import { Checkbox, Typography, useMediaQuery, Box } from "@mui/material";

// Components
import CardContainer from "../../../components/Containers/CardContainer";

// Types
import { HelperItemType } from "../firestore/items";

// Functions
import OptionsMenu from "./OptionsMenu";
import routes from "../../../routes";

const placeHolderImage = "../../../public/assets/images/imageplaceholder.png";
type ItemCardProps = {
  item: HelperItemType;
  checked: boolean;
  onChecked: (id: HelperItemType, value: boolean) => void;
};
const ItemCard = ({
  item,
  checked,
  onChecked: handleChecked,
}: ItemCardProps) => {
  const navigate = useNavigate();
  const { name, make, mpn, category, id } = item;
  const isNonMobile = useMediaQuery("(min-width:500px)");

  const handleClick = () => navigate(routes.item.path, { state: { id } });

  return (
    <CardContainer height={100}>
      <Checkbox
        checked={checked}
        onChange={(event, value) => handleChecked(item, value)}
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
      {isNonMobile && (
        <Box
          className="pointer"
          display="flex"
          alignItems="center"
          onClick={handleClick}
        >
          <img className="card-image" alt="" src={placeHolderImage} />
        </Box>
      )}
      <div className="card-content">
        <div>
          <Typography
            title={`Name: ${name}`}
            onClick={handleClick}
            className="card-text pointer"
            fontWeight={600}
            variant="h6"
          >
            {name}
          </Typography>
          <Typography
            title={`Make: ${make}\nPart Number: ${mpn}`}
            className="card-text"
            fontWeight={500}
            fontSize={12}
            color="text.secondary"
          >
            {`${make} - ${mpn}`}
          </Typography>
        </div>
        <div style={{ textAlign: "right" }}>
          <Typography
            className="card-text-category"
            fontWeight={600}
            title={`Category: ${category.label}`}
          >
            {category.label}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={12}
            title="Quantity"
            color="text.secondary"
          >
            {`${isNonMobile ? "Quantity: " : ""}${item.quantity ?? 0}`}
          </Typography>
        </div>
      </div>
      <OptionsMenu />
    </CardContainer>
  );
};

export default ItemCard;
