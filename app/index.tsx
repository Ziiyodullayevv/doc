import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { images } from '@/constants';
import { doctors, consultations } from './mock/doctors';
import { Link } from 'expo-router';
import Slider from '@/components/Swiper';
import { BlurView } from 'expo-blur';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 gap-3 bg-white pt-4 pb-2'>
      <StatusBar style='dark' backgroundColor='transparent' />
      <View className='px-7'>
        <View className='rounded-[30px] flex-row gap-3 flex p-6 items-center justify-between bg-[#5782F1]'>
          <View className='flex-row gap-3 items-center'>
            <Text className='text-white font-jakarta-regular text-3xl'>
              Hello
            </Text>
            <Text className='text-white text-3xl font-jakarta-extrabold'>
              Jenny
            </Text>
          </View>

          <View className='flex-row items-center'>
            <View className='w-[69px] h-[69px] rounded-full bg-white'>
              <Image
                resizeMode='contain'
                source={{
                  uri: 'https://avatars.mds.yandex.net/i?id=00702715aa06fd03f29aa85744229d53d51c8378-10166367-images-thumbs&n=13',
                }}
                className='w-full h-full rounded-full'
              />
            </View>
            <View className='w-[57px] relative h-[57px] justify-center items-center rounded-full border-[4px] border-[#5782F1] ml-[-20px] bg-white'>
              <Image
                resizeMode='contain'
                source={images.notification}
                className='w-[20px]'
              />
              <View className='absolute bg-primary-green border-[2px] border-white w-[14px] h-[14px] rounded-full right-[10px] top-[10px]'></View>
            </View>
          </View>
        </View>
      </View>

      {/* Recent Consultations  */}
      <View className='bg-white w-full px-7'>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          className='my-5'
          horizontal
        >
          {doctors.map(({ id, image }) => (
            <View
              key={id}
              className='mr-5 relative w-[72px] h-[72px] rounded-full'
            >
              <Image
                resizeMode='contain'
                source={{
                  uri: image,
                }}
                className='w-full h-full rounded-full'
              />
              <View className='absolute bg-primary-green border-[4px] border-white w-[20px] h-[20px] rounded-full right-[0px] bottom-[0px]'></View>
            </View>
          ))}
        </ScrollView>
        <Text className='text-xl font-jakarta-semibold'>
          <Link href='/carusel'>Carusel</Link>
        </Text>
      </View>

      {/* Meeting  */}
      {/* <View className='p-5 bg-white mt-5 flex-row gap-1 justify-between items-center shadow-2xl rounded-[30px]'>
        <View className='w-[70px] h-[70px] border-[1px] border-primary-green justify-center items-center rounded-full'>
          <View className='w-[58px] h-[58px] rounded-full'>
            <Image
              resizeMode='contain'
              source={{
                uri: 'https://i.pinimg.com/736x/58/25/bd/5825bd53eb91f7a4f367a9dc7a287b5d.jpg',
              }}
              className='w-full h-full rounded-full'
            />
          </View>
        </View>
        <View className='ml-2'>
          <Text className='text-xl font-jakarta-semibold'>Dr. Andrew Grey</Text>
          <Text className='text-sm font-jakarta-regular'>
            Psychological, Ph.d
          </Text>

          <View className='flex-row items-center mt-5 gap-1'>
            <Text className='text-[12px] items-center font-jakarta-semibold'>
              10:30
            </Text>
            <Text className='text-[12px] items-center h-[28px] bg-primary-orange text-white px-3 py-1 rounded-full font-jakarta-semibold'>
              am
            </Text>
            <Text className='text-[12px] items-center h-[28px] bg-primary-green text-white px-3 py-1 rounded-full font-jakarta-semibold'>
              21 Sept, 22
            </Text>
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
      </View> */}

      <View className='justify-center mt-5 shadow-2xl shadow-primary-dark/10 items-center'>
        <Slider />
      </View>

      {/* Scrollable Content */}
      <View className=' mx-7 flex-1 rounded-[30px] bg-[#F2F6FF] mt-7 mb-2 px-5 overflow-hidden relative'>
        <View className='absolute top-0 left-0 right-0 z-10'>
          <BlurView
            intensity={100}
            tint='light'
            className='px-7 py-4 rounded-[30px]'
          >
            <Text className='text-primary-dark w-full text-xl font-jakarta-semibold'>
              Book Appointments
            </Text>
          </BlurView>
        </View>

        <FlatList
          data={consultations}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          className='py-16'
          style={{ paddingBottom: 200 }}
          renderItem={({
            item: { id, image, name, doctors_image, length },
          }) => (
            <View
              key={id}
              className='bg-white shadow-2xl shadow-primary-purple/20 flex-row items-center justify-between rounded-[25px] p-4 mb-5'
            >
              <View>
                <View className='flex-row items-center gap-3'>
                  <View className='w-[64px] h-[64px] rounded-[15px] bg-primary-green'>
                    <Image
                      resizeMode='contain'
                      source={{
                        uri: image,
                      }}
                      className='w-full h-full rounded-[15px]'
                    />
                  </View>
                  <View>
                    <Text className='text-xl font-jakarta-semibold'>
                      {name}
                    </Text>
                    <View className='flex-row items-center'>
                      <View className='w-[32px] border-2 border-white border-solid h-[32px] rounded-full bg-primary-green'>
                        <Image
                          resizeMode='contain'
                          source={{
                            uri: doctors_image[0],
                          }}
                          className='w-full h-full rounded-full'
                        />
                      </View>

                      <View className='w-[32px] ml-[-10px] border-2 border-white border-solid h-[32px] rounded-full bg-primary-green'>
                        <Image
                          resizeMode='contain'
                          source={{
                            uri: doctors_image[1],
                          }}
                          className='w-full h-full rounded-full'
                        />
                      </View>

                      <View className='w-[32px] ml-[-10px] border-2 border-white border-solid h-[32px] rounded-full bg-primary-green'>
                        <Image
                          resizeMode='contain'
                          source={{
                            uri: doctors_image[2],
                          }}
                          className='w-full h-full rounded-full'
                        />
                      </View>

                      <View className='ml-2'>
                        <Text className='text-[12px] font-jakarta-semibold'>
                          +{length}
                        </Text>
                        <Text className='text-[12px] font-jakarta-medium text-primary-dark/50'>
                          Doctors
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className='flex-row gap-2 mt-3 items-center'>
                  <Text className='font-normal ml-5 text-primary-dark'>
                    14 pm - 8 pm
                  </Text>
                  <View className='bg-primary-green h-[28px] py-1 px-3 rounded-3xl'>
                    <Text className='font-jakarta-regular text-white text-sm'>
                      Mon - Fri
                    </Text>
                  </View>
                </View>
              </View>

              <View className='justify-centeritems-center'>
                <View className='items-center justify-center w-[46px] h-[103px] bg-primary-purple rounded-[15px]'>
                  <Text className='text-white w-[103px] rotate-90 text-center font-jakarta-semibold'>
                    Consult
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
