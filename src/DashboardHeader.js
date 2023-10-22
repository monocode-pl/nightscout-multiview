import {
    Button,
    FormControl,
    FormLabel,
    HStack, Image,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select, Show
} from "@chakra-ui/react";
import React, {useState} from "react";
import {LAYOUT_ORIENTATION} from "./services/Layout";
import simpleLogo from './logo-simple.svg';

export function DashboardHeader(props) {
    const [numberOfMonitors, setNumberOfMonitors] = useState(props.numberOfMonitors);

    function onOrientationChange(event) {
        event.preventDefault();

        props.onOrientationChange(event.target.value);
    }

    function onNumberOfMonitorsChange(strValue, numValue) {
        setNumberOfMonitors(strValue);

        if (!isNaN(numValue)) {
            props.onNumberOfMonitorsChange(Math.min(numValue, 30));
        }
    }

    function onNumberOfMonitorsBlur() {
        setNumberOfMonitors(props.numberOfMonitors);
    }

    return (
        <HStack paddingX={5} justify={'flex-start'} gap={{base: 5, md: 10}} paddingY={2} bg={'gray.50'} color={'gray.600'}>
            <Show breakpoint={'(min-width: 700px)'}>
                <Image src={simpleLogo} maxH='40px' />
            </Show>
            <FormControl display='flex' alignItems={'center'} gap={3} maxW={'300px'}>
                <Show breakpoint={'(min-width: 650px)'}>
                    <FormLabel htmlFor='orientation' m={0}>Układ&nbsp;Monitorów</FormLabel>
                </Show>
                <Select value={props.orientation} onChange={onOrientationChange} variant={'outline'}>
                    <option value={LAYOUT_ORIENTATION.VERTICAL}>Pionowy</option>
                    <option value={LAYOUT_ORIENTATION.HORIZONTAL}>Poziomy</option>
                    <option value={LAYOUT_ORIENTATION.GRID}>Siatka</option>
                </Select>
            </FormControl>
            <FormControl display='flex' alignItems={'center'} gap={3}>
                <Show breakpoint={'(min-width: 650px)'}>
                    <FormLabel htmlFor='orientation' m={0}>Liczba&nbsp;Monitorów</FormLabel>
                </Show>
                <NumberInput value={numberOfMonitors}
                             max={30}
                             min={1}
                             inputMode={'numeric'}
                             onChange={onNumberOfMonitorsChange}
                             onBlur={onNumberOfMonitorsBlur}
                             maxW={'80px'}>
                    <NumberInputField></NumberInputField>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
            <Button alignSelf={'flex-end'}
                    size={'md'}
                    minW={'100px'}
                    colorScheme={'yellow'} onClick={props.onDownload}>Pobierz</Button>
        </HStack>
    )
}