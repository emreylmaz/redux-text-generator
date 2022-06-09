import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFormat} from "../../store/text/textSlice";
import {FormControl, FormLabel, Select} from "@chakra-ui/react";

function Dropdown() {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.text);

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(changeFormat(value));
    }
    return (
        <FormControl>
            <FormLabel htmlFor='html' >Paragraph Type</FormLabel>
            <Select disabled={loading} onChange={handleChange} textTransform={'uppercase'} defaultValue={'text'} bg='gray.200'
                    borderColor='black' id='html' placeholder=''>
                <option value='text'>text</option>
                <option value='html'>html</option>
            </Select>
        </FormControl>
    );
}

export default Dropdown;