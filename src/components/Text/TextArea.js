import {useSelector} from "react-redux";


import React from 'react';
import {Box} from "@chakra-ui/react";

function TextArea() {
    const {text} = useSelector(state => state.text);
    return (
        <Box mt={10} p={10} bg={'gray.500'} borderRadius={30} color={'white'} fontSize={'lg'} >
            {text}
        </Box>
    );
}

export default TextArea;