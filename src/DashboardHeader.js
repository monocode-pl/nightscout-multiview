import {
    FormControl,
    FormLabel,
    HStack,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select
} from "@chakra-ui/react";
import React, {useState} from "react";
import {LAYOUT_ORIENTATION} from "./services/Layout";

export function DashboardHeader(props) {
    const [numberOfPeople, setNumberOfPeople] = useState(props.numberOfPeople);

    function onOrientationChange(event) {
        event.preventDefault();

        props.onOrientationChange(event.target.value);
    }

    function onNumberOfPeopleChange(strValue, numValue) {
        setNumberOfPeople(strValue);

        if (!isNaN(numValue)) {
            props.onNumberOfPeopleChange(Math.min(numValue, 30));
        }
    }

    function onNumberOfPeopleBlur() {
        setNumberOfPeople(props.numberOfPeople);
    }

    return (
        <HStack paddingX={5} justify={'flex-start'} gap={10} paddingY={2} bg={'gray.50'} color={'gray.600'}>
            <FormControl display='flex' alignItems={'center'} gap={3} maxW={'300px'} >
                <FormLabel htmlFor='orientation' m={0}>Układ&nbsp;Monitorów</FormLabel>
                <Select value={props.orientation} onChange={onOrientationChange} variant={'outline'}>
                    <option value={LAYOUT_ORIENTATION.VERTICAL}>Pionowy</option>
                    <option value={LAYOUT_ORIENTATION.HORIZONTAL}>Poziomy</option>
                    <option value={LAYOUT_ORIENTATION.GRID}>Siatka</option>
                </Select>
            </FormControl>
            <FormControl display='flex' alignItems={'center'} gap={3}>
                <FormLabel htmlFor='orientation' m={0}>Liczba Monitorów</FormLabel>
                <NumberInput value={numberOfPeople}
                             max={30}
                             min={1}
                             inputMode={'numeric'}
                             onChange={onNumberOfPeopleChange}
                             onBlur={onNumberOfPeopleBlur}
                             maxW={'80px'}>
                    <NumberInputField></NumberInputField>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
        </HStack>
    )
}