import {Fragment} from "react";
import { FlatList, Image, Pressable, SafeAreaView,  Text, TouchableOpacity, View} from "react-native";
import cn from 'clsx';
import {Platform} from "expo-modules-core";

import {images, offers} from "@/constants";
import CartButton from "@/components/CartButton";
// import useAuthStore from "@/store/auth.store";
// eslint-disable-next-line import/no-named-as-default
import Constants from "expo-constants/src/Constants";

export default function Index() {
    // const {user} = useAuthStore();
  return (
      <SafeAreaView
          className={cn('flex-1 bg-white')}
          style={Platform.OS === 'android' ? {paddingTop: Constants.statusBarHeight} : {}}
      >
          <FlatList  data={offers}
                     ListHeaderComponent={() => (
                         <View className={'flex-between flex-row w-full'}>
                             <View className={'flex-start'}>
                                 <Text className={'small-bold text-primary'}>DILIVER TO</Text>
                                 <TouchableOpacity className={'flex-center flex-row gap-x-1 mt-0.5' }>
                                     <Text className={'paragraph-bold text-dark-100 '}>Crotia</Text>
                                     <Image source={images.arrowDown} className={'size-3'} resizeMode={'contain'}/>
                                 </TouchableOpacity>
                             </View>
                            <CartButton/>
                         </View>
                     )}
                     renderItem={({item, index}) => {
                         const isEven = index % 2 === 0;
                         return (
                             <View>
                                 <Pressable
                                     className={cn('offer-card ', isEven ? 'flex-row-reverse' : 'flex-row')}
                                     style={{backgroundColor: item.color}}
                                     android_ripple={{color : "#fffff22"}}
                                 >
                                     {({pressed}) =>(
                                      <Fragment>
                                          <View className={'h-full w-1/2'}>
                                            <Image source={item.image} className={'size-full'} resizeMode={'contain'}/>
                                          </View>
                                          <View className={cn('offer-card__info ',isEven ? 'pl-5' : 'pr-5')}>
                                              <Text className={'h1-bold text-white leading-tight'}>
                                                  {item.title}
                                              </Text>
                                              <Image source={images.arrowRight} className={'size-10'} resizeMode={'contain'} tintColor={'#fff'}/>
                                          </View>
                                      </Fragment>

                                     )}
                                 </Pressable>
                             </View>
                         )
                     }}
                    contentContainerClassName={'pb-28 px-5'}
          />
      </SafeAreaView>
  );
}
