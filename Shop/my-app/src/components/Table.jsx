import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 140px;
  width:auto;
  background-color:white;
  border: 0.5px solid #F96C85;
z-index:999;
position:relative;
    display: flex;

   
`;



const Image = styled.img`
margin-top:35px;
height: 70%;
width:70%;
margin-left:30px;

z-index:99999;

`;
const Title= styled.h3`
z-index:99999;
 margin-left:-30px;
  font-weight: 100;
  font-size: 20px;
  line-height: 38px;
  letter-spacing: -1px;
  color: #000;
  width: 100%;
margin-top:50px;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: .25px;
  
      
  `
  
const Title2 = styled.h3`
  font-weight: 80;
  margin-left:-140px;
`;

const BoxCnt= styled.div`
flex:1;




`;
const Table = ({ data }) => {
    return (
   
          
            <Container>

<Link to={`/product/${data._id}`}>    
<Image src={data.img} />
</Link>
<BoxCnt>
          <Title>
            {data.title}
            </Title>
            <Title2>
             di {data.brand}
            </Title2>
            </BoxCnt>     
    
      </Container>
    );
  };
  
  export default Table;