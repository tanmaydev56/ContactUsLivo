import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

const BoxWithShadowBorder = () => {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bg="#f5f5f5"
    >
      <Box
        w="300px"
        h="200px"
        bg="white"
        borderRadius="8px"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: "10px",
          left: "10px",
          right: "10px",
          bottom: "10px",
          borderRadius: "8px",
          boxShadow: "20px 20px 0px 0px #000",
          zIndex: -1,
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="0 0 0 10px white"
      >
        <Text fontSize="xl" color="black">Styled Box</Text>
      </Box>
    </Container>
  );
};

export default BoxWithShadowBorder;
