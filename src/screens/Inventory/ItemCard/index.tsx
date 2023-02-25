// MUI
import { Checkbox, Typography, useMediaQuery } from "@mui/material";

// Components
import CardContainer from "../../../components/Containers/CardContainer";

// Types
import { HelperItemType } from "../firestore/items";

// Functions
import { textShrink } from "../../../utils/textFormatting";
import OptionsMenu from "./OptionsMenu";

const placeHolderImage = "../../../public/assets/images/imageplaceholder.png";

const ItemCard = ({ item }: { item: HelperItemType }) => {
  const { name, make, mpn, category } = item;
  const isNonMobile = useMediaQuery("(min-width:500px)");

  return (
    <CardContainer height={100}>
      <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
      {isNonMobile && (
        <img className="card-image" alt="" src={placeHolderImage} />
      )}
      <div className="card-content">
        <div>
          <Typography
            title={`Name: ${name}`}
            className="card-text"
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
          <Typography fontWeight={600} title={`Category: ${category.label}`}>
            {textShrink(category.label, 6)}
          </Typography>
          <Typography fontWeight={500} fontSize={12} title="Quantity">
            {`${isNonMobile ? "Quantity: " : ""}${item.quantity ?? 0}`}
          </Typography>
        </div>
      </div>
      <OptionsMenu />
    </CardContainer>
  );
};

export default ItemCard;
