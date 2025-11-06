import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { Table, Tbody, Thead, Tr, Th, Td } from "@chakra-ui/table";
import { useEffect, useState } from "react";

export default function App() {
  const target = new Date("2025-12-03T07:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) return clearInterval(interval);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, #0a0a0a, #141414, #1a1a1a)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 2, md: 6 }}
      py={{ base: 6, md: 10 }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-10%"
        left="-10%"
        w="60vw"
        h="60vw"
        bg="purple.600"
        filter="blur(150px)"
        opacity={0.15}
      />
      <Box
        position="absolute"
        bottom="-10%"
        right="-10%"
        w="60vw"
        h="60vw"
        bg="cyan.500"
        filter="blur(150px)"
        opacity={0.15}
      />

      <VStack spacing={10} textAlign="center" w="full" maxW="1000px" zIndex={2}>
        <Heading size={{ base: "lg", md: "2xl" }} letterSpacing="wide">
          ⏳ Countdown to EdgeX Airdrop
        </Heading>

        <HStack
          spacing={{ base: 2, md: 6 }}
          flexWrap="wrap"
          justify="center"
          w="full"
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <Box
              key={label}
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.1)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={{ base: 3, md: 5 }}
              minW={{ base: "70px", md: "90px" }}
              boxShadow="0 0 15px rgba(255,255,255,0.1)"
              _hover={{
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                transform: "scale(1.05)",
              }}
              transition="0.2s ease"
            >
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                {value}
              </Text>
              <Text textTransform="uppercase" fontSize="sm" opacity={0.8}>
                {label}
              </Text>
            </Box>
          ))}
        </HStack>

        <Box
          position={{ base: "relative", md: "absolute" }}
          top={{ base: 0, md: 4 }}
          left={{ base: 0, md: 4 }}
          bg="rgba(255,255,255,0.05)"
          p={4}
          borderRadius="xl"
          border="1px solid rgba(255,255,255,0.1)"
          boxShadow="0 0 25px rgba(0,0,0,0.3)"
          w={{ base: "100%", md: "400px" }}
          h={{ base: "auto", md: "300px" }}
          mb={{ base: 4, md: 0 }}
        >
          <Text fontSize="sm" mb={3} fontWeight="semibold" textAlign="center">
            Value of one point with same market cap as:
          </Text>

          <Table variant="simple" size="sm" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Project Name</Th>
                <Th isNumeric>FDV</Th>
                <Th isNumeric>Value per Point</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>XRP</Td>
                <Td isNumeric>$228,321,803,934</Td>
                <Td isNumeric>$8154</Td>
              </Tr>
              <Tr>
                <Td>SOLANA</Td>
                <Td isNumeric>$99,756,692,310</Td>
                <Td isNumeric>$3571</Td>
              </Tr>
              <Tr>
                <Td>HYPE</Td>
                <Td isNumeric>$41,611,770,391</Td>
                <Td isNumeric>$1486</Td>
              </Tr>
              <Tr>
                <Td>ASTER</Td>
                <Td isNumeric>$8,917,210,633</Td>
                <Td isNumeric>$317</Td>
              </Tr>
              <Tr>
                <Td>PUMP</Td>
                <Td isNumeric>$4,217,388,875</Td>
                <Td isNumeric>$150</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box
          position={{ base: "relative", md: "absolute" }}
          top={{ base: 0, md: 4 }}
          right={{ base: 0, md: 4 }}
          bg="rgba(255,255,255,0.05)"
          p={4}
          borderRadius="xl"
          border="1px solid rgba(255,255,255,0.1)"
          boxShadow="0 0 25px rgba(0,0,0,0.3)"
          w={{ base: "100%", md: "400px" }}
          h={{ base: "auto", md: "300px" }}
          mb={{ base: 4, md: 0 }}
        >
          <Text fontSize="md" mb={1} fontWeight="semibold">
            Polymarket 1 Day FDV Prediction
          </Text>
          <Text fontSize="xs" mb={3} opacity={0.7}>
            Updated every 24h
          </Text>

          <Table variant="simple" size="sm" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>FDV</Th>
                <Th isNumeric>% Chance</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>$1B</Td>
                <Td isNumeric>87%</Td>
              </Tr>
              <Tr>
                <Td>$2B</Td>
                <Td isNumeric>63%</Td>
              </Tr>
              <Tr>
                <Td>$3B</Td>
                <Td isNumeric>47%</Td>
              </Tr>
              <Tr>
                <Td>$4B</Td>
                <Td isNumeric>37%</Td>
              </Tr>
              <Tr>
                <Td>$5B</Td>
                <Td isNumeric>35%</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box
          bg="rgba(255,255,255,0.05)"
          border="1px solid rgba(255,255,255,0.1)"
          p={6}
          borderRadius="xl"
          boxShadow="0 0 25px rgba(0,0,0,0.3)"
          w="100%"
          maxW="900px"
          overflowX="auto"
        >
          <Table
            variant="simple"
            colorScheme="whiteAlpha"
            size={{ base: "sm", md: "md" }}
          >
            <Thead>
              <Tr>
                <Th>airdrop allocation 25%</Th>
                <Th>7 million points distributed</Th>
              </Tr>
              <Tr>
                <Th>FDV</Th>
                <Th>FDV * airdrop allocation / points = 1 point value</Th>
                <Th>Market Cap</Th>
                <Th>100 points</Th>
                <Th>Hvor mye penger får Bjørn?</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>$1B</Td>
                <Td>$36</Td>
                <Td>$250,000,000</Td>
                <Td>$3600</Td>
                <Td>110,000 NOK</Td>
              </Tr>
              <Tr>
                <Td>$2B</Td>
                <Td>$72</Td>
                <Td>$500,000,000</Td>
                <Td>$7200</Td>
                <Td>219,000 NOK</Td>
              </Tr>
              <Tr>
                <Td>$3B</Td>
                <Td>$107</Td>
                <Td>$750,000,000</Td>
                <Td>$10,700</Td>
                <Td>326,000 NOK</Td>
              </Tr>
              <Tr>
                <Td>$4B</Td>
                <Td>$142</Td>
                <Td>$1,000,000,000</Td>
                <Td>$14,200</Td>
                <Td>433,000 NOK</Td>
              </Tr>
              <Tr>
                <Td>$5B</Td>
                <Td>$178</Td>
                <Td>$1,250,000,000</Td>
                <Td>$17,800</Td>
                <Td>543,000 NOK</Td>
              </Tr>
              <Tr>
                <Td>$10B</Td>
                <Td>$357</Td>
                <Td>$2,500,000,000</Td>
                <Td>$35,700</Td>
                <Td>1,1M NOK</Td>
              </Tr>
              <Tr>
                <Td>$15B</Td>
                <Td>$535</Td>
                <Td>$3,750,000,000</Td>
                <Td>$53,500</Td>
                <Td>1,63M NOK</Td>
              </Tr>
              <Tr>
                <Td>$20B</Td>
                <Td>$714</Td>
                <Td>$5,000,000,000</Td>
                <Td>$71,400</Td>
                <Td>2,2M NOK</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
}
