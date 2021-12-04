import React from "react";
import { Box } from "@chakra-ui/react";

interface spacerProps {
  height: number;
}

const Spacer: React.FC<spacerProps> = ({ height }) => {
  return <Box height={`${height * 10}px`} />;
};

export default Spacer;
