import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center"> 
        {showProfileData && (
         <Box mr="4" textAlign="right">
            <Text>Bianca Veronezi</Text>
            <Text 
            color="gray.300" 
            fontSize="smaill">
                bds.veronezi@gmail.com
            </Text>
         </Box>
        )}

        <Avatar size="md" name="Bianca Veronezi" src="https://avatars.githubusercontent.com/u/32149875?v=4"/>
        </Flex>
    )
}