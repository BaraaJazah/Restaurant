import { Stack, useRouter } from 'expo-router';

export default function StackLayout() {


    return <Stack  >

        <Stack.Screen
            name="index"
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="WelcomeScreen"
            options={{
                headerShown: false,
            }}
        />
        
        <Stack.Screen
            name="AuthScreen"
            options={{
                headerShown: false,
            }}
        />


        <Stack.Screen
            name="(screens)"
            options={{
                headerShown: false,
            }}
        />



    </Stack>
}