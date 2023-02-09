import AuthModal from "@/components/modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";

type RightContextProps = {
  //   user: any;
};

const RightContext: React.FC<RightContextProps> = () => {
  return (
    <>
      <AuthModal />

      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContext;
