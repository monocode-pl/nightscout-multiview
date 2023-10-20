import {Center, Flex} from "@chakra-ui/react";

export function MonitorFrame({label, url}) {
    return (
        <Flex position={'relative'} justify={'stretch'}>
            <Center position={'absolute'} w={'100%'} top={2} fontSize={'2xl'} fontWeight={800} color={'white'} textTransform={'uppercase'}>{label}</Center>
            <iframe src={url} frameBorder="0" style={{flexGrow: 1}} title={label}></iframe>
        </Flex>
    );
}