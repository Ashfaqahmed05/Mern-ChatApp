import {styled} from "@mui/material"
import { Link as LinkComponent } from "react-router-dom"
import { grayColor, matBlack } from "../constants/Color";

export const VisuallyHiddenInput =  styled("input")({
    border: 0,
    clip: "rect(0px)",
    height: 1,
    width: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap"
})

export const Link = styled(LinkComponent)`
    color: black;
    text-decoration: none;
    padding: 1rem;
    &:hover{
        background-color: #f0f0f0;
    }
`;

export const InputBox = styled("input")`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 3rem;
    border-radius: 1.5rem;
    background-color: ${grayColor}
` 

export const SearchField = styled("input")`
    width: 20vmax;
    height: 100%;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    border-radius: 1.5rem;
    background-color: #f1f1f1;
    font-size: 1.1rem;
` 

export const CurveButton = styled("button")`
border: none;
outline: none;
padding: 0.5rem 1rem;
border-radius: 1.5rem;
cursor: pointer;
background-color: ${matBlack};
font-size: 1.1rem;
&:hover{
    background-color: rgba(0,0,0,0.8);
}
`