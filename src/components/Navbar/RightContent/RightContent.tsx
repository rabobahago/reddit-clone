import AuthModal from "@/components/modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";

type RightContextProps = {
  user: any;
};

const RightContext: React.FC<RightContextProps> = ({ user }) => {
  return (
    <>
      <AuthModal />

      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RightContext;
