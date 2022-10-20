import React from 'react';
import { ButtonCont  } from '../../styles/global';
import { Button, Layout, Text } from '@ui-kitten/components';
import styled from 'styled-components';



export const Button1 = ({
  text ="Sign Up",
  style = "body",
  c = "black"
}) => (
 <ButtonCont >
  <Buttonst size={style} >
     <TextSt col={c}>{text}</TextSt>
    </Buttonst>
 </ButtonCont>
 
);

export const Buttonst = styled(Button)`
display:flex;
background-color:#EAAA99;
border-color:"#363630";
border:2px solid;
width: ${({size}) => 
size === 'small' && '50px' ||
size === 'large' && '170px' || 
size === 'huge' && '200px' || 
'170px'
};
height: ${({size}) => 
size === 'small' && '20px' ||
size === 'large' && '45px' || 
size === 'huge' && '60px' || 
'45px'
};
justify-content:center;
align-items:center;
align-content:center;
text-align:center;
margin:10px;
`
export const TextSt = styled(Text)`
color: ${({col}) => 
        col === 'black' && '#363630' ||
        col === 'white' && '#FEFDF4' ||
        col === 'blue' && '#7B89A3' ||
        col === 'teal' && '#99FFDF' ||
        col === 'pink' && '#EAAA99' ||
        '#363630'
    };
`







