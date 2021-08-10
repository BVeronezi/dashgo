import { Flex, SimpleGrid, Box, Text, theme} from "@chakra-ui/react";
import { ChartDashboard } from "../components/Chart";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header/>

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="felx=start">
                    <Box
                     p={["6", "8"]}
                     bg="gray.800"
                     borderRadius={8}
                     pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                      <ChartDashboard />
                    </Box>

                    <Box
                     p={["6", "8"]}
                     bg="gray.800"
                     borderRadius={8}
                     pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <ChartDashboard />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
       
    )
}