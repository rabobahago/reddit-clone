import AuthModal from "@/components/modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";

type RightContextProps = {
  user?: User | null;
};

const RightContext: React.FC<RightContextProps> = ({ user }) => {
  return (
    <>
      <AuthModal />

      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        {/* <Menu/> */}
      </Flex>
    </>
  );
};
export default RightContext;
