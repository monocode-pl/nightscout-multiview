import {Button, Flex, Text} from "@chakra-ui/react";

export function MonitorOverlay({label, onEdit}) {
    return (
        <Flex flexDir={'column'} align={'center'}>
            <Text mb={10} fontSize={30}>{label}</Text>
            <Button size={'md'} colorScheme={'teal'} onClick={onEdit}>Edytuj</Button>
        </Flex>
    )
}