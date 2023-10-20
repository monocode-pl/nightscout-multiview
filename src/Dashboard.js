import {Monitor} from "./Monitor";
import React, {useState} from "react";
import {Box, Flex, Grid, GridItem, HStack, Select, SimpleGrid} from "@chakra-ui/react";
import {EditPerson} from "./EditPerson";
import {Person} from "./Person";

const ORIENTATION_VERTICAL = 'VERTICAL';
const ORIENTATION_HORIZONTAL = 'HORIZONTAL';
const ORIENTATION_GRID = 'GRID';

export function Dashboard({numberOfPeople}) {
    const [people, setPeople] = useState(Array(numberOfPeople).fill(null).map((n, index) => new Person(index)));
    const [editedPerson, setEditedPerson] = useState(null);
    const [orientation, setOrientation] = useState(ORIENTATION_GRID)

    const [numberOfRows, numberOfCols] = computeLayout(numberOfPeople, orientation);
    const isEditingPerson = editedPerson !== null;

    function computeLayout(numberOfPeople, orientation) {
        let numberOfRows, numberOfCols;

        if (orientation === ORIENTATION_VERTICAL) {
            numberOfRows = numberOfPeople;
            numberOfCols = 1;
        } else if (orientation === ORIENTATION_HORIZONTAL) {
            numberOfRows = 1;
            numberOfCols = numberOfPeople;
        } else {
            numberOfRows = Math.round(Math.sqrt(numberOfPeople));
            numberOfCols = Math.ceil(numberOfPeople / numberOfRows);
        }

        return [numberOfRows, numberOfCols];
    }

    function editPerson(person) {
        return () => {
            setEditedPerson(person);
        }
    }

    function updatePerson(newPerson) {
        setPeople(people.map(person => {
            if (person.id === newPerson.id) {
                person.label = newPerson.label;
                person.url = newPerson.url;
                person.withClock = newPerson.withClock;
            }

            return person;
        }));
        setEditedPerson(null);
    }

    function onOrientationChange(event) {
        event.preventDefault();

        setOrientation(event.target.value);
    }

    return (
        <>
            <Grid gridTemplateRows={'60px 1fr'} h={'100vh'}>
                <GridItem bg={'gray.50'} alignSelf={'center'}>
                    <Flex paddingX={10} justify={'stretch'}>
                        <HStack>
                            <Box color={'gray.600'}>Układ&nbsp;Monitorów</Box>
                            <Select value={orientation} onChange={onOrientationChange} variant={'outline'}>
                                <option value={ORIENTATION_VERTICAL}>Pionowy</option>
                                <option value={ORIENTATION_HORIZONTAL}>Poziomy</option>
                                <option value={ORIENTATION_GRID}>Siatka</option>
                            </Select>
                        </HStack>
                    </Flex>
                </GridItem>
                <GridItem>
                    <SimpleGrid columns={numberOfCols} rows={numberOfRows} gap={0.5} h={'100%'}>
                        {
                            people.map(person => {
                                return (
                                    <Monitor label={person.label}
                                             url={person.frameUrl}
                                             onEdit={editPerson(person)}
                                             key={person.id}></Monitor>
                                )
                            })
                        }
                    </SimpleGrid>
                </GridItem>
            </Grid>
            {
                isEditingPerson ? <EditPerson person={editedPerson} onSubmit={updatePerson}></EditPerson> : null
            }
        </>
    )
}