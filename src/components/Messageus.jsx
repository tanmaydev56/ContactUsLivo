
import {  Stack,Text, Button,Checkbox, FormControl, FormLabel, Input, FormErrorMessage, Flex, VStack, HStack, Textarea } from '@chakra-ui/react'



const Messageus = () => {
  return (
    <Stack style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       
        
    }}>
          <Stack
          flexDirection={{
            base:"column",
            md:"row",
            lg:"row",
            xl:"row",
            "2xl":"row"
    
          }}
          p={{
            base:"10px",
            md:"10px",
            lg:"10px",
            xl:"10px",
            "2xl":"10px"
          }}
        
          height={{
            base:"auto",
            md:"auto",
            lg:"auto",
            xl:"auto",
            "2xl":"auto"
          }}
          width={{
            base:"auto",
            md:"auto",
            lg:"auto",
            xl:"auto",
            "2xl":"1146px"
          }}
          style={{
            
            boxShadow: "50px 50px 0px 0px #D9D9D9 ",
            flexShrink:"0",
            borderRadius:"27px",
            background:"linear-gradient(90deg, #D9D9D9 0%, #FFF 100%)",
            display:"flex",
            
            marginTop:"67px",
            padding:"30px",
            gap:"40px"
            
        }}>
            <Stack  >
              <Text
              justifyContent={{
                base:"center",
                md:"center",
                lg:"center",
                xl:"center",
                "2xl":"start "
              }} 
              style={{
                display:"flex",
                fontSize:"64px",
                fontWeight:"500",
                lineHeight:"100px",
                color:"#000",
                fontStyle:"normal",
                marginBottom:"26px"
    
              }}>Message Us</Text>
              <Text
              style={{
                fontSize:"20px",
                fontWeight:"400",
                lineHeight:"28px",
                color:"#000",
                fontStyle:"normal",
                marginBottom:"26px"
              }} textAlign={{
                base:"justify",
                md:"center",
                lg:"center",
                xl:"center",
               
              }}>
                Have a question or need assistance? We're here to help! Whether
                you're looking for customization options, pricing details, or
                anything else, send us a message. Our team is ready to assist you in
                finding the perfect furniture pieces for your home. We look forward
                to connecting with you!
              </Text>
            </Stack>

            <VStack justifyContent={{
              base:"center",
              md:"center",
              lg:"center",
              xl:"center",
              "2xl":"center"
            }}
            alignItems={{
              base:"center",
              md:"center",
              lg:"center",
              xl:"center",
              "2xl":"center"
            }}>
            <Stack
            height={{
              base:"auto",
              md:"auto",
              lg:"auto",
              xl:"auto",
              "2xl":"629px"
            }}
  style={{
    width: ["100%", "538.915px"],

    
    flexShrink: "0",
    borderRadius: "20px",
    border: "3px solid #000",
    background: "#F2F7F2",
    padding: "25px",
  }}
  spacing={[4, 6]}
>
  <Text color="#000" fontSize={["24px", "32px"]} fontStyle="normal" fontWeight="500" lineHeight={["32px", "40px"]}>
    Name
  </Text>
  <Stack display={["flex", "flex"]} flexDirection={["column", "row"]} justifyContent="space-between" spacing={[4, 6]}>
    <div>
      <Input width={["100%", "219px"]} height="54px" borderRadius="1px" border="2px solid #000" background="#fff" />
      <FormLabel color="#000" fontSize={["16px", "20px"]} fontStyle="normal" fontWeight="400" lineHeight={["24px", "28px"]}>
        First
      </FormLabel>
    </div>
    <div>
      <Input width={["100%", "219px"]} height="54px" borderRadius="1px" border="2px solid #000" background="#fff" />
      <FormLabel color="#000" fontSize={["16px", "20px"]} fontStyle="normal" fontWeight="400" lineHeight={["24px", "28px"]}>
        Last
      </FormLabel>
    </div>
  </Stack>
  <Text color="#000" fontSize={["24px", "32px"]} fontStyle="normal" fontWeight="500" lineHeight={["32px", "40px"]}>
    Email
  </Text>
  <Input width={["100%", "full"]} height="54px" borderRadius="1px" border="2px solid #000" background="#fff" />
  <Text color="#000" fontSize={["24px", "32px"]} fontStyle="normal" fontWeight="500" lineHeight={["32px", "40px"]}>
    Comments
  </Text>
  <Textarea width={["100%", "full"]} height="auto" borderRadius="1px" border="2px solid #000" background="#fff" />
</Stack>

            
            </VStack>
          </Stack>
    
        </Stack>
  )
}

export default Messageus
