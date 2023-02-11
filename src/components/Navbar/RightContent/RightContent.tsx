import AuthModal from "@/components/modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContextProps = {
  user?: User | null;
};

const RightContext: React.FC<RightContextProps> = ({ user }) => {
  return (
    <>
      <AuthModal />

      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu />
      </Flex>
    </>
  );
};
export default RightContext;
