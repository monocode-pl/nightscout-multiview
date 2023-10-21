import {Monitor} from "./Monitor";
import React, {useState} from "react";
import {Grid, GridItem, SimpleGrid} from "@chakra-ui/react";
import {EditPerson} from "./EditPerson";
import {DashboardHeader} from "./DashboardHeader";
import {computeLayout, LAYOUT_ORIENTATION} from "./services/Layout";
import {People} from "./services/People";

export function Dashboard(props) {
    const [people, setPeople] = useState(People.create(props.numberOfPeople));
    const [editedPerson, setEditedPerson] = useState(null);
    const [orientation, setOrientation] = useState(LAYOUT_ORIENTATION.GRID);

    const [numberOfRows, numberOfCols] = computeLayout(people.length, orientation);
    const isEditingPerson = editedPerson !== null;

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


    function onNumberOfPeopleChange(value) {
        if (people.length < value) {
            const newPeople = People.create(value - people.length, people.length);

            setPeople([...people, ...newPeople]);
        } else if (people.length > value) {
            setPeople([...people.slice(0, value)]);
        }
    }

    return (
        <>
            <Grid gridTemplateRows={'min-content 1fr'} h={'100vh'}>
                <GridItem bg={'gray.50'} alignSelf={'center'}>
                    <DashboardHeader orientation={orientation}
                                     onOrientationChange={setOrientation} numberOfPeople={people.length}
                                     onNumberOfPeopleChange={onNumberOfPeopleChange}></DashboardHeader>
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