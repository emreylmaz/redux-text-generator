import React from 'react';
import {
    FormControl,
    FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
} from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux";
import {changeParas} from "../../store/text/textSlice";

function Paragraphs() {
    const dispatch = useDispatch();
    const { paras, loading } = useSelector(state => state.text);

    const handleChange = (e) => {
        dispatch(changeParas(e))
    }
    return (
        <FormControl>
            <FormLabel htmlFor='amount'>Paragraphs</FormLabel>
            <NumberInput borderRadius={10} bg={'gray.200'} disabled={loading} onChange={handleChange} max={50} min={2} value={paras} borderColor={'black'} >
                <NumberInputField id='amount' />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
    );
}

export default Paragraphs;