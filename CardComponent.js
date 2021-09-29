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
export default function CardComponent({imageUrl,title}){


    return(
  
      <Box
      rounded="lg"
      overflow="hidden"
      width="95%"
      shadow={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
      <Box style={styles.card}>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={imageUrl}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5"
        >
          { title }
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            _light={{ color: 'violet.500' }}
            _dark={{ color: 'violet.300' }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="gray.500" fontWeight="400">
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  
  
  
    ) ;
  
  }

  
const styles = StyleSheet.create({

    card:{
      flex:1,
      width:'100%',
      marginTop:52
    }
  
  });
  