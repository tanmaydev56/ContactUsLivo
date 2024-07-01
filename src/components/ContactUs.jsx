import { Card, Stack,Text,Box,  } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'




const ContactUs = () => {
  return (
    <Stack>
   <Text
  style={{
    textAlign: "center",
    color: "#FF7E48",
    fontSize: "96px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "100px",
    fontFamily: "Apfel Grotezk, sans-serif",
  }}
>
  Get In Touch{" "}
</Text>


      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "513.001px",
            height: "4px",
            marginTop: "15px",
            flexShrink: "0",
            background: "#ccc",
          }}
        ></div>
      </Box>
      <Stack 
     
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        style={{
          display: "flex",
          justifyContent:"space-evenly",
          alignItems: "center",
          marginTop: "72.5px",
        }}
      >
   <div> 
   <div style={{
  background: "#D9D9D9",
  borderRadius: "20px",
  width: "269px",
  height: "483px",
  border: "3px solid #000",
position:'absolute',
marginLeft:"24px",
marginTop:"2.5rem",
zIndex:"0"
 
}}>
  
</div>
        <Card
      
          style={{
            width: "269px",
            height: "490px",
            flexShrink: "0",
            borderRadius: "20px",
            border: "3px solid #000",
            background: "#F2F7F2",
            zIndex:"2",
            textAlign: "center",
            margin:"1rem",
            marginLeft:""
          }}
        >
           
<Stack>
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "197px",
        height: "197px",
        borderRadius: "50%",
        background: "#D8D5D0",
        marginTop: "24px"
      }}
    >
      <img src="/Location.svg" alt="" style={{
        width: "128px",
        height: "128px"
      }} />
    </Container>
    <Text
      style={{
        textAlign: "center",
        fontSize: "40px",
        fontWeight: "400",
        lineHeight: "100px",
        color: "#000",
        fontStyle: "normal"
      }}
    >
      Address
    </Text>
    <Text
      style={{
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "24px",
        color: "#000",
        fontStyle: "normal"
      }}
    >
      Delhi Office: 6950 S. Jordan Road Centennial, CO 80112
      <br />
      <br />
      Bengaluru Office: 6775 Sherman Street, Loveland, CO 80538
    </Text>
  </Stack>

         
             
  

        </Card>
        </div>
      
        <div>
        <div style={{
  background: "#D9D9D9",
  borderRadius: "20px",
  width: "269px",
  height: "483px",
  border: "3px solid #000",
position:'absolute',
marginLeft:"24px",
marginTop:"1.6rem",
zIndex:"0"
 
}}>
  
</div>
          
        <Card
          style={{
            width: "269px",
            height: "490px",
            flexShrink: "0",
            borderRadius: "20px",
            border: "3px solid #000",
            background: "#F2F7F2",
           
            textAlign: "center",
          }}
        >
          <Stack>
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "197px",
                height: "197px",
                borderRadius: "50%",
                background: "#D8D5D0",
                marginTop: "24px",
              }}
            >
             
                 <img src="/Phone.svg" alt=""  style={{
                width: "128px",
                height:"128px"
              }}/>
              
            </Container>
            <Text
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "400",
                lineHeight: "100px",
                color: "#000",
                fontStyle: "normal",
              }}
            >
              Phone
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#000",
                fontStyle: "normal",
              }}
            >
              Delhi Office:877.WEIFIELD phone
              <br />
              <br />
              Bengaluru Office877.WEIFIELD phone
            </Text>
          </Stack>
        </Card>
        </div>
        <div>
        <div style={{
  background: "#D9D9D9",
  borderRadius: "20px",
  width: "269px",
  height: "483px",
  border: "3px solid #000",
position:'absolute',
marginLeft:"24px",
marginTop:"1.6rem",
zIndex:"0"
 
}}>
  
</div>


        <Card
          style={{
            width: "269px",
            height: "490px",
            flexShrink: "0",
            borderRadius: "20px",
            border: "3px solid #000",
            background: "#F2F7F2",
            
            textAlign: "center",
          }}
        >
          
          <Stack>
       
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "197px",
                height: "197px",
                borderRadius: "50%",
                background: "#D8D5D0",
                marginTop: "24px",
              }}
            >
              <img src="/Email.svg" alt=""  style={{
                width: "128px",
                height:"128px"
              }}/>
            </Container>
            <Text
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "400",
                lineHeight: "100px",
                color: "#000",
                fontStyle: "normal",
              }}
            >
              E-Mail
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#000",
                fontStyle: "normal",
              }}
            >
              email <b>@livio.com</b>
              <br />
              <br />
              Product Service Calls: <b>service@livio.com</b> 
            </Text>
          </Stack>
        </Card>
        </div>
      
      </Stack>


    </Stack>
  );
}

export default ContactUs
