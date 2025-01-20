import {Monitor} from "./Monitor";
import React, {useState} from "react";
import {Grid, GridItem, SimpleGrid} from "@chakra-ui/react";
import {EditMonitor} from "./EditMonitor";
import {DashboardHeader} from "./DashboardHeader";
import {computeLayout, LAYOUT_ORIENTATION} from "./services/Layout";
import {Monitors} from "./services/Monitors";
import {FileBuilder} from "./services/FileBuilder";
import {FileDownloader} from "./services/FileDownloader";

export function Dashboard(props) {
    const [monitors, setMonitors] = useState(Monitors.create(props.numberOfMonitors));
    const [editedMonitor, setEditedMonitor] = useState(null);
    const [orientation, setOrientation] = useState(LAYOUT_ORIENTATION.GRID);

    const [numberOfRows, numberOfCols] = computeLayout(monitors.length, orientation);
    const isEditingMonitor = editedMonitor !== null;

    function editMonitor(monitor) {
        return () => {
            setEditedMonitor(monitor);
        }
    }

    function updateMonitor(newMonitor) {
        setMonitors(monitors.map(monitor => {
            if (monitor.id === newMonitor.id) {
                monitor.label = newMonitor.label;
                monitor.url = newMonitor.url;
                monitor.token = newMonitor.token;
                monitor.withClock = newMonitor.withClock;
            }

            return monitor;
        }));
        setEditedMonitor(null);
    }


    function onNumberOfMonitorsChange(value) {
        if (monitors.length < value) {
            const newMonitors = Monitors.create(value - monitors.length, monitors.length);

            setMonitors([...monitors, ...newMonitors]);
        } else if (monitors.length > value) {
            setMonitors([...monitors.slice(0, value)]);
        }
    }

    function download() {
        const file = new FileBuilder()
            .monitors(monitors)
            .rows(numberOfRows)
            .cols(numberOfCols)
            .build('nightscout-multiview.html');

        FileDownloader.download(file)
    }

    return (
        <>
            <Grid gridTemplateRows={'min-content 1fr'} h={'100vh'}>
                <GridItem bg={'gray.50'} alignSelf={'center'}>
                    <DashboardHeader orientation={orientation}
                                     onOrientationChange={setOrientation}
                                     numberOfMonitors={monitors.length}
                                     onNumberOfMonitorsChange={onNumberOfMonitorsChange}
                                     onDownload={download}></DashboardHeader>
                </GridItem>
                <GridItem>
                    <SimpleGrid columns={numberOfCols}
                                rows={numberOfRows}
                                gap={0.5}
                                h={'100%'}>
                        {
                            monitors.map(monitor => {
                                return (
                                    <Monitor label={monitor.label}
                                             url={monitor.frameUrl}
                                             onEdit={editMonitor(monitor)}
                                             key={monitor.id}></Monitor>
                                )
                            })
                        }
                    </SimpleGrid>
                </GridItem>
            </Grid>
            {
                isEditingMonitor ? <EditMonitor monitor={editedMonitor} onSubmit={updateMonitor}></EditMonitor> : null
            }
        </>
    )
}