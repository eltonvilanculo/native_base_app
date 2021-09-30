import React from 'react';
import { StyleSheet, View, SafeAreaView,  Alert } from 'react-native';
import { NativeBaseProvider, Box ,VStack,  AspectRatio,
  Image,
  HStack,
  Stack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  Center,
  Divider,
  Heading, } from 'native-base';
  import { Ionicons, MaterialIcons } from '@expo/vector-icons';
  import { FontAwesome5 } from '@expo/vector-icons';
  import CardComponent from './CardComponent';


export default function App() {
  return (
 
    <NativeBaseProvider>
    <Center>
    <VStack
      space={5}
      width="100%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>


      <VStack width="100%" space={5} alignItems="center" style={styles.barraPesquisa}>

        <Input
          placeholder="Search People & Places"
          bg="#fff"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
          InputRightElement={
            <Icon
              m="2"
              mr="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="mic" />}
            />
          }
        />
      </VStack>
    </VStack>

   <CardComponent imageUrl={require('./assets/Toyota-Ractis.jpg')} title="Dinaldo" />
 

    </Center>

  </NativeBaseProvider>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  configbtn:{
   
    color:'#282C34',
    fontSize:29,
  },
  barraPesquisa:{
    backgroundColor:'red',
    marginTop:34,
    color:'white'
  },
  card:{
    flex:1,
    width:'100%',
    marginTop:52
  }

});
