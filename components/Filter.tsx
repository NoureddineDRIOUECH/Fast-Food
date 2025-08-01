import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {Category} from "@/type";
import {router, useLocalSearchParams} from "expo-router";
import cn from "clsx";
import {Platform} from "expo-modules-core";

const Filter = ({categories}: {categories: Category[]}) => {
    categories = [
        {
            $id: 'cat1',
            name: 'Burgers',
            description: 'Juicy and delicious grilled burgers',
            $collectionId: 'col1',
            $databaseId: 'db1',
            $createdAt: '2025-08-01T10:00:00.000Z',
            $updatedAt: '2025-08-01T10:00:00.000Z',
            $permissions: []
        },
        {
            $id: 'cat2',
            name: 'Pizzas',
            description: 'Cheesy pizzas with various toppings',
            $collectionId: 'col1',
            $databaseId: 'db1',
            $createdAt: '2025-08-01T10:01:00.000Z',
            $updatedAt: '2025-08-01T10:01:00.000Z',
            $permissions: []
        },
        {
            $id: 'cat3',
            name: 'Drinks',
            description: 'Refreshing cold and hot beverages',
            $collectionId: 'col1',
            $databaseId: 'db1',
            $createdAt: '2025-08-01T10:02:00.000Z',
            $updatedAt: '2025-08-01T10:02:00.000Z',
            $permissions: []
        },
        {
            $id: 'cat4',
            name: 'Desserts',
            description: 'Sweet treats and desserts for all tastes',
            $collectionId: 'col1',
            $databaseId: 'db1',
            $createdAt: '2025-08-01T10:03:00.000Z',
            $updatedAt: '2025-08-01T10:03:00.000Z',
            $permissions: []
        },
        {
            $id: 'cat5',
            name: 'Salads',
            description: 'Healthy and fresh vegetable and fruit salads',
            $collectionId: 'col1',
            $databaseId: 'db1',
            $createdAt: '2025-08-01T10:04:00.000Z',
            $updatedAt: '2025-08-01T10:04:00.000Z',
            $permissions: []
        },
        {
            $id: 'cat6',
            name: 'Sandwiches',
            description: 'Tasty sandwiches with meat, cheese, and veggies',
            $collectionId: 'col1',
            $databaseId: 'db1',
            $createdAt: '2025-08-01T10:05:00.000Z',
            $updatedAt: '2025-08-01T10:05:00.000Z',
            $permissions: []
        }
    ];

    const searchParams = useLocalSearchParams();
    const [isActive, setIsActive] = useState(searchParams.category || '');
    const handlePress = (id:string)=>{
        setIsActive(id);
        // if (id === 'all') router.setParams({category : undefined})
        // else router.setParams({category : id})
    }
    const filterData : (Category | {$id: string; name: string })[] = categories ?
        [{$id: 'all',name:'All'}, ...categories] :
        [{$id: 'all',name:'All'}];
    return (
        <FlatList
            data={filterData}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName={'gap-x-2 pb-3'}
            keyExtractor={(item) => item.$id}
            renderItem={({item}) =>(
                <TouchableOpacity
                    onPress={() => handlePress(item.$id)}
                    style={Platform.OS === 'android' ? {elevation:5,shadowColor:'#878787'} : {} }
                    key={item.$id} className={cn('filter', isActive === item.$id ? 'bg-primary' : 'bg-white' )}>
                    <Text className={cn('body-medium ', isActive === item.$id ? 'text-white' :'text-gray-200')}>{item.name}</Text>
                </TouchableOpacity>
            )}

            />
    )
}
export default Filter
