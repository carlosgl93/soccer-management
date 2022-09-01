import type { NextPage } from "next";
import { Box } from "@mui/material";
import MainLayout from "../components/layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout
      title={"Home page"}
      pageDescription={"Manage your footbal matches here!"}
    >
      <Box></Box>
    </MainLayout>
  );
};

export default Home;
