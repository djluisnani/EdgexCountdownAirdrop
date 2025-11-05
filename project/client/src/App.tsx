import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function App() {
  const target = new Date("2025-12-31T23:59:59").getTime();
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
      bgGradient="linear(to-br, gray.900, gray.800, gray.700)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={10} textAlign="center">
        <Heading size="2xl">⏳ Countdown</Heading>
        <HStack spacing={5}>
          {Object.entries(timeLeft).map(([label, value]) => (
            <Box
              key={label}
              bg="whiteAlpha.100"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              p={4}
              minW="90px"
              boxShadow="lg"
            >
              <Text fontSize="3xl" fontWeight="bold">
                {value}
              </Text>
              <Text textTransform="uppercase" fontSize="sm" opacity={0.8}>
                {label}
              </Text>
            </Box>
          ))}
        </HStack>

        <Box bg="whiteAlpha.100" p={6} borderRadius="xl" boxShadow="md">
          <Table variant="simple" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Asset</Th>
                <Th isNumeric>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>BTC</Td>
                <Td isNumeric>$68,900</Td>
              </Tr>
              <Tr>
                <Td>ETH</Td>
                <Td isNumeric>$3,200</Td>
              </Tr>
              <Tr>
                <Td>SOL</Td>
                <Td isNumeric>$190</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
}
