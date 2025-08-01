import {View, Text, SafeAreaView, FlatList} from 'react-native'
import React from 'react'
import CustomHeader from "@/components/CustomHeader";
import {useCartStore} from "@/store/cart.store";
import {PaymentInfoStripeProps} from "@/type";
import cn from "clsx";
import CustomButton from "@/components/CustomButton";
import CartItem from "@/components/CartItem";

const PaymentInfoStripe = ({ label,  value,  labelStyle,  valueStyle, }: PaymentInfoStripeProps) => (
    <View className="flex-between flex-row my-1">
        <Text className={cn("paragraph-medium text-gray-200", labelStyle)}>
            {label}
        </Text>
        <Text className={cn("paragraph-bold text-dark-100", valueStyle)}>
            {value}
        </Text>
    </View>
);
export default function Cart() {
    const {items, getTotalPrice, getTotalItems} = useCartStore();
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();

    return (
        <SafeAreaView className={'bg-white h-full'}>
            <FlatList
                data={items}
                renderItem={({item}) => <CartItem item={item}/>}
                keyExtractor={items => items.id}
                contentContainerClassName={'pb-28 px-5 pt-5'}
                ListHeaderComponent={() => <CustomHeader title={'Your Cart'}/> }
                ListEmptyComponent={() => <Text>Your cart is empty</Text>}
                ListFooterComponent={() => (
                    totalItems > 0 &&
                   ( <View className={'gap-5'}>
                       <View className={'mt-6 border border-gray-200 p-5 rounded-2xl'}>
                        <Text className={'h3-bold text-dark-100 mb-5'}>
                            Payment Summary
                        </Text>
                        <Text className={'text-primary text-base'}>
                            ${totalPrice}
                        </Text>
                           <PaymentInfoStripe label={`Total Items (${totalItems})`} value={`$${totalPrice.toFixed(2)}`}/>
                           <PaymentInfoStripe label={`Delivery Fees`} value={`$5.00`}/>
                           <PaymentInfoStripe label={`Discount`} value={`- $0.50`} valueStyle={'!text-success'}/>
                           <View
                                className={'border-t border-gray-100 my-2'}
                           />
                           <PaymentInfoStripe label={`Total`} value={`$${(totalPrice + 5 - 0.5).toFixed(2)}`} labelStyle={'base-bold !text-dark-100'} valueStyle={'base-bold !text-dark !text-right'}/>
                       </View>
                       <CustomButton title={'Order Now'} />
                    </View>)
                )}

            />
        </SafeAreaView>
    )
}
