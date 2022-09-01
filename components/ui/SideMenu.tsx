import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/router";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  Sports,
  Scoreboard,
} from "@mui/icons-material";
// import { AuthContext, UiContext } from "../../context";
import { UiContext } from "../../context";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const SideMenu: FC<PropsWithChildren<Props>> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const router = useRouter();
  const theme = useTheme();

  //   const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  //   const { isLoggedIn, user } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    navigateTo(`/search/${searchTerm}`);
  };

  const navigateTo = (url: string) => {
    // toggleSideMenu();
    router.push(url);
  };

  return (
    <Drawer
      open={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      anchor='left'
      sx={{
        // backdropFilter: "blur(4px)",
        // transition: "all 0.5s ease-out",
        borderRight: "5px solid ##bdd7d0",

        // width: "25vw",
      }}
      variant='permanent'
    >
      <Box
        sx={{
          paddingY: 5,
          paddingX: 5,
          backgroundColor: theme.palette.background.default,
          width: "20vw",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          height: "100vh",
        }}
      >
        <List>
          {/* <ListItem sx={{ display: { xs: "flex", sm: "none" } }}>
            <Input
              autoFocus={true}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
              type='text'
              placeholder='Search...'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={onSearchTerm}>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem> */}

          <ListItem button onClick={() => navigateTo("/")}>
            <Typography variant='h6'>Coach Pro</Typography>
          </ListItem>

          <Box sx={{ height: "15vh" }} />

          <ListItem
            button
            onClick={() => navigateTo("/manage")}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <ListItemIcon>
              <Sports />
            </ListItemIcon>
            <ListItemText primary={"Organizar"} />
          </ListItem>

          <ListItem
            button
            onClick={() => navigateTo("/partidos")}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <ListItemIcon>
              <Scoreboard />
            </ListItemIcon>
            <ListItemText primary={"Women"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>

          {/* Admin */}
          <Divider />

          <>
            <ListSubheader>Admin Panel</ListSubheader>

            <ListItem button onClick={() => navigateTo("/admin/products")}>
              <ListItemIcon>
                <CategoryOutlined />
              </ListItemIcon>
              <ListItemText primary={"Products"} />
            </ListItem>
            <ListItem button onClick={() => navigateTo("/admin/orders")}>
              <ListItemIcon>
                <ConfirmationNumberOutlined />
              </ListItemIcon>
              <ListItemText primary={"Orders"} />
            </ListItem>

            <ListItem button onClick={() => navigateTo("/admin/users")}>
              <ListItemIcon>
                <AdminPanelSettings />
              </ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItem>
          </>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
