import {MonitorOverlay} from "./MonitorOverlay";
import {Box, Center, Grid} from "@chakra-ui/react";
import {MonitorFrame} from "./MonitorFrame";

export function Monitor({label, url, onEdit}) {
    let iframe = null;

    if (url) {
        iframe = <Grid position={'absolute'} w={'100%'} h={'100%'}><MonitorFrame url={url} label={label}></MonitorFrame></Grid>
    }

    return (
        <Box position={'relative'}>
            <Center position={'absolute'}
                    w={'100%'}
                    h={'100%'}
                    zIndex={1}
                    bg={'gray.100'}
                    opacity={url ? 0 : 1}
                    _hover={{opacity: 1}}
                    transition={'100ms'}>
                <MonitorOverlay label={label} url={url} onEdit={onEdit}></MonitorOverlay>
            </Center>
            {iframe}
        </Box>
    )
}