// React
// Firebase
// MUI
import { Box, Input, IconButton, Button, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import FormContainer from "../../components/FormContainer";
import { componentMaxWidth } from "../../globalVariables";
// Components
// Types
let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Inventory = () => {
  return (
    <Box maxWidth={componentMaxWidth} width="100%" display="flex" flexDirection="column" gap="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        gap="20px"
        width="100%"
      >
        <Box
          display="flex"
          borderRadius="50px"
          sx={{ backgroundColor: "background.paper" }}
        >
          <Input
            disableUnderline
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search"
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <Search />
          </IconButton>
        </Box>
        <Button sx={{ minWidth: "110px" }} variant="contained" size="large">
          New Item
        </Button>
      </Box>
      {x.map((item) => (
        <FormContainer key={item}>
          <Typography>item</Typography>
        </FormContainer>
      ))}
    </Box>
  );
};

export default Inventory;
