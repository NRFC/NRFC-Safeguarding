import {Box, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";

function Contact({role, name, email, phone}) {
    return (
        <Box>
            {role} {name} {email} {phone}
        </Box>
    )
}

export default Contact;
