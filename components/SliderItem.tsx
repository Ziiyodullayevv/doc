import { View, Image, Text, Dimensions } from 'react-native';
import React from 'react';
import { images } from '@/constants';

type SliderItemProps = {
  id: number;
  image: string;
  name: string;
  specialty: string;
  date: string;
  time: string;
};

const { width } = Dimensions.get('screen');
const SliderItem = ({
  id,
  image,
  name,
  specialty,
  date,
  time,
}: SliderItemProps) => {
  return (
    <View style={{ width }} className='items-center justify-center'>
      <View
        key={id}
        className='p-4 bg-white flex-row justify-between items-center rounded-[30px]'
      >
        <View className='w-[70px] h-[70px] border-[1px] border-primary-green justify-center items-center rounded-full'>
          <View className='w-[58px] h-[58px] rounded-full'>
            <Image
              resizeMode='contain'
              source={{
                uri: image,
              }}
              className='w-full h-full rounded-full'
            />
          </View>
        </View>
        <View className='ml-2'>
          <Text className='text-xl font-jakarta-semibold'>{name}</Text>
          <Text className='text-sm font-jakarta-regular'>{specialty}</Text>

          <View className='flex-row items-center mt-5 gap-1'>
            <Text className='text-[12px] items-center font-jakarta-semibold'>
              {time}
            </Text>
            <View className='items-center justify-center py-1 px-3 h-[28px] bg-primary-orange rounded-full '>
              <Text className='text-[12px] text-white flex justify-center items-center h-full font-jakarta-semibold'>
                am
              </Text>
            </View>
            <View className='items-center justify-center py-1 px-3 h-[28px] bg-primary-green rounded-full '>
              <Text className='text-[12px] text-white flex justify-center items-center h-full font-jakarta-semibold'>
                {date}
              </Text>
            </View>
          </View>
        </View>

        <View className='w-[70px] rounded-full h-[70px] items-center justify-center bg-black/5'>
          <View className='w-[57px] h-[57px] rounded-full bg-black/10 items-center justify-center'>
            <View className='bg-black h-[46px] w-[46px] rounded-full items-center justify-center'>
              <Image
                resizeMode='contain'
                source={images.videoCall}
                className='w-[20px]'
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SliderItem;
