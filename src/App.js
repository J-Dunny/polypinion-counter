import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Stack,
  Button,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { BsDiamondHalf } from "react-icons/bs";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
    const newCount = visitCount + 1;

    setCount(newCount);

    localStorage.setItem("visitCount", newCount.toString());
  }, []);

  return (
    <Box position="relative" height="100vh">
      <Flex padding={2} direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"}>
          <Image
            width={"30px"}
            src="https://www.f6s.com/content-resource/profiles/3615871_th1.jpg"
          />
          <Text fontSize={"lg"} fontWeight={"bold"}>
            polypinion
          </Text>
        </Stack>
        <Stack direction={"row"}>
          <Button backgroundColor={"white"}>Facts</Button>
          <Button backgroundColor={"white"}>Opinions</Button>
          <Button backgroundColor={"black"} color={"white"} borderRadius={20}>
            {" "}
            Get Invited Now
          </Button>
        </Stack>
      </Flex>
      <Flex direction={"column"} alignItems={"center"} marginTop={"10%"}>
        <Image width={"12%"} src="/polypinionIcon2.png" alt="Your Image" />
        <Text
          fontSize={"7xl"}
          fontWeight={"bold"}
          bgGradient="linear(to-r, purple.400, pink.500, orange.400)"
          bgClip="text"
        >
          polypinion
        </Text>
        <InputGroup width={"25%"} size="sm">
          <Input borderRadius={20} placeholder="Search" bg="gray.100" />
          <InputRightAddon borderRadius={10}>
            <FaSearch cursor="pointer" />
          </InputRightAddon>
        </InputGroup>
      </Flex>
      <Flex
        position="absolute"
        bottom="0"
        height={"30px"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        bgGradient="linear(to-b, #d9d9d9, #f0f0f0, #d9d9d9)"
      >
        <Text fontSize={"small"}>CoTextyright @ WeMake Corp.&nbsp;</Text>
        <BsDiamondHalf style={{ width: "7px" }} />
        <Text>&nbsp;Polypinion 2023-2024&nbsp; </Text>
        <BsDiamondHalf style={{ width: "7px" }} />
        <Text>&nbsp; {count} enthusiasts have already discovered us!</Text>
      </Flex>
    </Box>
  );
}

export default App;