// MUI
import { Box, Input, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Box
      display="flex"
      borderRadius="50px"
      sx={{ backgroundColor: "background.paper" }}
    >
      <Input disableUnderline sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p: 1 }}>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
