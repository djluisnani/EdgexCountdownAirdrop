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
      bgGradient="linear(to-br, gray.900, gray.800, gray.700)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <VStack spacing={10} textAlign="center">
        <Heading size="2xl" letterSpacing="wide">
          ⏳ Countdown to EdgeX airdrop
        </Heading>

        <HStack spacing={6}>
          {Object.entries(timeLeft).map(([label, value]) => (
            <Box
              key={label}
              bg="whiteAlpha.100"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              p={5}
              minW="90px"
              boxShadow="0 0 15px rgba(255,255,255,0.1)"
              _hover={{
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                transform: "scale(1.05)",
              }}
              transition="0.2s ease"
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

        <Box
          bg="whiteAlpha.100"
          p={6}
          borderRadius="xl"
          boxShadow="0 0 20px rgba(255,255,255,0.1)"
          w="100%"
          maxW="800px"
        >
          <Table variant="simple" colorScheme="whiteAlpha">
            <Thead>
              <Th>airdrop allocation 25%</Th>
              <Th>7 million points distributed</Th>
              <Tr>
                <Th>FDV</Th>
                <Th>FDV * airdrop allocation / points = 1 point value</Th>
                <Th>Market Cap</Th>
                <Th>100 points</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>$1,000,000,000</Td>
                <Td>$36</Td>
                <Td>$250,000,000</Td>
                <Td>$3600</Td>
              </Tr>
              <Tr>
                <Td>$2,000,000,000</Td>
                <Td>$72</Td>
                <Td>$500,000,000</Td>
                <Td>$7200</Td>
              </Tr>
              <Tr>
                <Td>$3,000,000,000</Td>
                <Td>$107</Td>
                <Td>$750,000,000</Td>
                <Td>$10,700</Td>
              </Tr>
              <Tr>
                <Td>$4,000,000,000</Td>
                <Td>142</Td>
                <Td>$1,000,000,000</Td>
                <Td>$14,200</Td>
              </Tr>
              <Tr>
                <Td>$5,000,000,000</Td>
                <Td>$178</Td>
                <Td>$1,250,000,000</Td>
                <Td>$17,800</Td>
              </Tr>
              <Tr>
                <Td>$10,000,000,000</Td>
                <Td>$357</Td>
                <Td>2,500,000,000</Td>
                <Td>$35,700</Td>
              </Tr>
              <Tr>
                <Td>$15,000,000,000</Td>
                <Td>$535</Td>
                <Td>$3,750,000,000</Td>
                <Td>$53,500</Td>
              </Tr>
              <Tr>
                <Td>$20,000,000,000</Td>
                <Td>$714</Td>
                <Td>$5,000,000,000</Td>
                <Td>$71,400</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
}
