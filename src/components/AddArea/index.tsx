
import { useState, KeyboardEvent  } from "react";
import * as C from "./styles";

    type Props = {
        onEnter: (taskName : string) => void
    }



    export const AddArea = ( {onEnter} : Props ) => {
        /* State responsavel por observar e ' armazenar ' o conteudo do input */
        const [inputText, setInputText] = useState('');
            /* Definindo a tecla ENTER como gatilho da função e chamando
            suas respectivas funcções */
        const handleKeyUp = (e: KeyboardEvent) => {

            /* Se apertar enter e o placeholder não tiver vazio */

                if(e.code === 'Enter' && inputText !== ''){

                    /* Envia a função pra add lá np app.tsx como props*/

                        onEnter(inputText);
                        /* E limpa o input */
                        setInputText('');

                }
                /* Do contrario n faça nada meu parceiro */
            
    }

    return(
        /* Campo para adicionar tarefa */
       <C.Container>
            {/* Icone de add */}
            <div className="image">+</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                /* valor = conteudo do input ( que está sendo observado pelo State) */
                value={inputText}

                /* Responsavel por quando apertar alguma tecla
                chamar a função para ver se a tecla é o ENTER */
                onKeyUp={handleKeyUp}
                /* Responsavel por carregar/transportar os valores a cada mudança em nosso input */
                onChange={e => setInputText(e.target.value)}


            />
       </C.Container>
    )
}