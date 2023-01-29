import { Button } from "@chakra-ui/react";

const AuthButtons = () => {
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => {}}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => {}}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
