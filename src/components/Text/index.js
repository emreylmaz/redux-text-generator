import { useEffect } from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import Dropdown from "./Dropdown"
import Paragraphs from "./Paragraphs"
import TextArea from "./TextArea"
import { useDispatch, useSelector } from "react-redux"
import {fetchAsyncText} from "../../store/text/textSlice";

const TextComponent = () => {
    const dispatch = useDispatch()
    const {paras, format, error} = useSelector(state => state.text);

    useEffect(() => {
        dispatch(fetchAsyncText()); // eslint-disable-next-line
    }, [paras, format, error]);


    return (
        <Box>
            <Flex justifyContent={"center"} py={4}>
                <Text color={'Blue'} fontSize={['lg','lg','lg','5xl']}>Text Generator App </Text>
            </Flex>
            <Flex py={5} borderTop={'1px solid green'}>
                <Paragraphs />
                <Dropdown />
            </Flex>
            {!error && <TextArea/>}
            {error && <Text fontSize={'xl'} mt={50}>{error}</Text>}
        </Box>
    )

}

export default TextComponent