import { Box, HStack, Icon, Stack, Text, Heading } from '@chakra-ui/react';
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transaction",
    },
  ];


  return (
    <Stack justify="space-between" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" w="16rem" h="100vh">
      <Box>
      <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem" >
        ||NUCKFIGGA||
      </Heading>
      <Box mt="18px" mx="9px">
      {
      navLinks.map((nav) => (
        <HStack borderRadius="10px" key={nav.text} py="9px" px="12px"
        _hover={{ bg: "#F3F3F7", color: "#171717", cursor: "pointer" }} color="#797E82">
          <Icon as={nav.icon} />
          <Text fontSize="14px" fontWeight="700" >{nav.text}</Text>
        </HStack>
      ))
      }
      </Box>
      </Box>
      <Box mt="18px" mx="9px" mb="18px">
      <HStack borderRadius="10px" py="9px" px="12px"
        _hover={{ bg: "#F3F3F7", color: "#171717", cursor: "pointer" }} color="#797E82">
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="700" >Suppot</Text>
        </HStack>
      </Box>
</Stack>
  );
};

export default Sidenav