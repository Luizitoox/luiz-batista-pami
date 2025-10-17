import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" 
      options={{ 
        headerTitle: "Home",
        headerLeft: () => <></>,
        }}
      />
      
      <Stack.Screen name="+not-found" options={{}} />
    </Stack>
  );
}