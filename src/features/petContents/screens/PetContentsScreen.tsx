import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Header from 'src/components/Header';
import {PetDictionaryDto} from 'src/types/CustomData';
import {CustomStackNavigationParams} from 'src/types/CustomStackNavigationParams';
import {PetDictionary} from 'src/types/DummyData';
import styled from 'styled-components/native';

const PetContentsScreen = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<CustomStackNavigationParams, 'PetContentsScreen'>
    >();

  const headerTitle = () => {
    return (
      <View style={{marginHorizontal: 'auto'}}>
        <Text style={{textAlign: 'center', marginHorizontal: 'auto'}}>
          견종백과
        </Text>
      </View>
    );
  };

  const renderItem = (item: any) => {
    const petContents = item.item as PetDictionaryDto;
    return (
      <ContentContainer>
        <DogImg source={petContents.thumbnailImage} />
        <View>
          <BoldText>{petContents.name}</BoldText>
          <RowContainer>
            {petContents.summary.map((summary: string, index: number) => {
              return (
                <Chip key={index}>
                  <WhiteText>{summary}</WhiteText>
                </Chip>
              );
            })}
          </RowContainer>
          <Text numberOfLines={2}>{petContents.description}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PetDetailScreen', {petContents});
            }}>
            <Text style={{textAlign: 'right'}}>더보기</Text>
          </TouchableOpacity>
        </View>
      </ContentContainer>
    );
  };

  useEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <Header
            title=""
            // titleComponent={headerTitle}
            disableBackBtn
          />
        );
      },
    });
  }, []);

  return (
    <Container>
      <FlatList
        data={PetDictionary}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}_${item.id}`}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

const ContentContainer = styled.View`
  flex-direction: row;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  padding: 10px 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const DogImg = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 5px;
`;

const Chip = styled.View`
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #ff8f63;
`;

const WhiteText = styled.Text`
  color: white;
`;

const BoldText = styled.Text`
  font-weight: 700;
`;

export default PetContentsScreen;
