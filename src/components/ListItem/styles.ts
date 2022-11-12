import styled from "styled-components";
type ContainerProps = {
    done: boolean;
}



    /* Css classico com adição de condições externas ( o estado da checkbox ) */
export const Container = styled.div(({done} : ContainerProps) => (
   `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom:10px;
    align-items: center;
        label{
            color: #CCC;
            text-decoration: ${ done ? 'line-through' : 'initial'};
        }
        input{
            width: 25px;
            height: 25px;
            margin-right: 5px;
            border:none;
            
        }
`
))
