import styled from 'styled-components/native';
import { View } from 'react-native';
import { Image } from 'react-native-svg';

const Cont = styled.View`

`

const ImageItem = styled(Image)`
width:100%;
`

export function ImgDiv({ 

onClick=()=>{},
path="/logo.svg", 
width='100%', 
}){


return	<Cont>
 <ImageItem 
source={path} 
style={{ size: width
}}
/>
</Cont> 
}

