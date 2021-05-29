import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, ListItem, UnorderedList, OrderedList, Heading
} from "@chakra-ui/react"
import Role from "./components/Role";
import Contact from "./components/Contact";
import CoachData from "./data/coaches.json"
import ManagerData from "./data/managers.json"
import FirstAiderData from "./data/firstaider.json"
import SafeguardingData from "./data/so.json"
import DORData from "./data/mini-youth-dor.json"
import FixturesData from "./data/fixtures-sec.json"
import ReactMarkdown from 'react-markdown'
import Policy from './data/nrfc-safeguarding-policy.md'

export default function Home() {
    return (
        <Box className="App">
            <Accordion defaultIndex={2} allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Norwich Rugby Football Club Safeguarding Policy</Heading>
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <ReactMarkdown source={Policy} />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Volunteering as a youth or minis coach, team manager or 1st aider</Heading>
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Role data={CoachData} />
                        <Role data={ManagerData} />
                        <Role data={FirstAiderData} />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Volunteering in other roles</Heading>
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Role data={SafeguardingData} />
                        <Role data={DORData} />
                        <Role data={FixturesData} />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Forms and helpful links</Heading>
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <ListItem>Reporting an issue <a
                                href="https://www.englandrugby.com/governance/safeguarding/reporting-an-issue">[Web
                                page]</a> <a
                                href="https://www.englandrugby.com//dxdam/91/91d2809e-07b8-43ba-8860-707c25534a80/SafeguardingReferralForm.pdf">[PDF]</a></ListItem>
                            <ListItem>RFU Safeguarding toolkit <a
                                href="https://www.englandrugby.com/dxdam/47/47825ee0-5ca7-449f-baad-401e2ef78ae7/safeguardingtoolkit.pdf">[PDF]</a></ListItem>
                            <ListItem>RFU Safeguarding Home <a
                                href="https://www.englandrugby.com/governane/safeguarding">[Web page]</a></ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
  )
}
