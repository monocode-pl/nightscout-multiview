import {Button, Flex, Text} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

export function MonitorOverlay({label, onEdit}) {
    const {t} = useTranslation();

    return (
        <Flex flexDir={'column'} align={'center'}>
            <Text mb={10} fontSize={30}>{label}</Text>
            <Button size={'md'} colorScheme={'teal'} onClick={onEdit}>
                {t('Edit')}
            </Button>
        </Flex>
    )
}