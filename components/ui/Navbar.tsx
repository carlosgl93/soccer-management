import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AccountCircleOutlined,
  ClearOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { UiContext } from "../../context";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<PropsWithChildren<Props>> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { asPath, push } = useRouter();
  const theme = useTheme();

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  const { toggleSideMenu } = useContext(UiContext);

  //   const { numberOfItems } = useContext(CartContext);

  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: theme.palette.background.default }}>
        <NextLink href='/' passHref>
          <Link display='flex' alignItems='center'>
            <Typography variant='h2'>Pichangas </Typography>
            <Typography variant='h2' sx={{ ml: 0.5 }}>
              Management
            </Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
        >
          <NextLink href='/profile'>
            <Link>
              <AccountCircleOutlined
                sx={{
                  color: asPath === "/profile" ? "#fff" : "#adcce4",
                }}
              />
            </Link>
          </NextLink>
          <NextLink href='/category/children'>
            <Link>
              <Button
                style={{
                  backgroundColor:
                    asPath === "/category/children" ? "black" : "white",
                  color: asPath === "/category/children" ? "white" : "black",
                }}
              >
                Children
              </Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        {/* pantallas grandes */}
        {/* <IconButton>
          <SearchOutlined />
        </IconButton> */}

        {isSearchVisible ? (
          <Input
            sx={{ display: { xs: "none", sm: "flex" } }}
            className='fadeIn'
            autoFocus={true}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            type='text'
            placeholder='Search...'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={() => setIsSearchVisible(true)}
            className='fadeIn'
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* pantallas pequenas */}

        <IconButton
          sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
          onClick={toggleSideMenu}
        >
          <SearchOutlined />
        </IconButton>

        <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
