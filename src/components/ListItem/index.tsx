import { useState } from "react";
import styled from "styled-components";
import { Item } from "../../types/Item";
import { Container } from "./styles";

    type Props = {
        item: Item
    }



        /* Componente responsavel por listar nossos itens de forma personalizada/estilizada */
export const ListItem = ({item}:Props) => {
    /* Responsavel por ficar de olho na checkbox para saber se está marcada ou não */
    const [isChecked, setIsChecked] = useState(item.done)

    
    return(<>
        {/* Visualização dos itens */}

        <Container done={isChecked}>
           <input 
           type="checkbox"
           /* Responsavel por chamar a verificação, " marcado ou não ?" */
           checked={isChecked}
           /* Responsavel por verificar as mudanças e passar elas para frente */
           onChange={e => setIsChecked(e.target.checked)} 
           />

           <label>
            {/* Nome da task */}
                {item.name}
           </label>
        </Container>
    </>)
}