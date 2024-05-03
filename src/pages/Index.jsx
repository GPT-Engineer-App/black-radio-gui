// Complete the Index page component for an online black radio station website
import { Box, Flex, Text, Button, Image, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { FaPlay, FaPause, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh" color="white">
      <Flex direction="column" align="center" justify="center">
        <Image src="https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMHJhZGlvJTIwc3RhdGlvbiUyMGxvZ298ZW58MHx8fHwxNzE0NzQ0OTUyfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" my={8} />
        <Text fontSize="5xl" fontWeight="bold" mb={2}>
          Black Beats Radio
        </Text>
        <Text fontSize="md" mb={6}>
          The heart of African American culture.
        </Text>

        <VStack spacing={4}>
          <Button rightIcon={<Icon as={FaPlay} />} colorScheme="red" variant="solid" size="lg">
            Listen Live
          </Button>
          <HStack spacing={4}>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebookF} w={6} h={6} />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
