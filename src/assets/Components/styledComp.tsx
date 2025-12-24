import styled from 'styled-components';



export const Buttong =styled.button`
        position: relative;
        margin-top: 4vh;
        margin-left:80%;
        background-color: #2c2c2c;
        border: 0.1vh solid rgb(66, 0, 0);
        padding: 0.4rem;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        &:hover{
          transform: scale(1.1) translateY(-0.2rem);
          border-color: rgb(184, 0, 0);
          filter: drop-shadow(0 0 2vh red)
        }
`

export const Buttona =styled.button<{ $bordercolor?: string}>`
&:hover{
    box-shadow: 0 0 3vh ${props => props.$bordercolor};
  }
`

export  const TodoItemSection = styled.section<{ $bordercolora: string; $textColor: string }>`
   border: 0.1vh solid ${props => props.$bordercolora} ;
   color: ${props => props.$textColor};
   transition: all 0.3s ease;
   
 
   &:hover {
    box-shadow: 0 0 2vh ${props => props.$bordercolora };
     
     
   }

             
             
    `;







    