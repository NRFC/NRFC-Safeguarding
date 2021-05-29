import {Box, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";

function Role({data}) {
    const listItems = data.duties.map((line, index) => {
        return <ListItem key={index}>{line}</ListItem>;
    });

    return <Box>
        <Heading size="sm">{data.heading}</Heading>
        <Text fontWeight="semibold">Role:</Text>
        {data.role}
        <Text fontWeight="semibold">Duties:</Text>

        <UnorderedList>
            {listItems}
        </UnorderedList>
    </Box>;
}

export default Role;
