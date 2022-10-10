
import React from 'react';
import { Button, Alert} from 'react-native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout} from '@ui-kitten/components';


const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default () => (

    <ApplicationProvider style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} {...eva} theme={eva.light}>
   
      <Button 
        onPress={()  => Alert.alert('simple press')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
  />
    </ApplicationProvider>

);