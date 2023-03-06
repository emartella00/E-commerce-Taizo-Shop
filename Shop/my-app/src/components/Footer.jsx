
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  
  const Container = styled.div`
    display: flex;
  }
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
  color:#F96C85;`;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
   }
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    color:#F96C85;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
   }
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>TAIZO SHOP.</Logo>
          <Desc>
          Dal desiderio di condividere la nostra passione e conoscenza sul mondo degli amici a quattro zampe, nel 2000 è nato Taizo Shop, catena di pet store specializzata in prodotti per animali da compagnia.

La nostra mission è offrire un’esperienza di shopping completa per gli amanti dei pet, con il miglior assortimento di alimenti, accessori, prodotti per l’igiene e la bellezza. L’ampia gamma di prodotti dedicati alle specifiche esigenze di cani, gatti, uccelli, roditori, pesci e rettili
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Vieni nei nostri store</Title>
          <List>
            <ListItem>Milano</ListItem>
            <ListItem>Roma</ListItem>
            <ListItem>Torino</ListItem>
            <ListItem>Parma</ListItem>
            <ListItem>Bologna</ListItem>
            <ListItem>Lecce</ListItem>
            <ListItem>Bari</ListItem>
            <ListItem>Venezia</ListItem>
            <ListItem>Firenze</ListItem>
            <ListItem>Modena</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contatti</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Via Giovanni Battista Grassi,17;
     
          </ContactItem>
          <ContactItem>
          <div style={{marginLeft:"40px"}}>73039,Tricase(LE) </div>
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +0833-542389
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> taizoshop@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;