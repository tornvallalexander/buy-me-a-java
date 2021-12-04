import { Box, Text } from "@chakra-ui/react";
import ProfileScreen from "../ProfileScreen";
import DonatorLayout from "../../components/DonatorLayout";

const SupporterModule = () => {
  return (
    <DonatorLayout>
      <ProfileScreen />
    </DonatorLayout>
  );
};

export default SupporterModule;
