import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Headings } from "../../components/Heading";
import { Sidebar } from "../../components/Sidebar";

export default function FormUser() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWwidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Headings title="Criar usuário"/>
                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome completo"></Input>
                            <Input name="email" type="email" label="E-mail"></Input>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" type="password" label="Senha"></Input>
                            <Input name="password_confirmation" type="password" label="Confirmação da senha"></Input>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                             <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                    
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}