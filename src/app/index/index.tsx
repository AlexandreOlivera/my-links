import { View, Image, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Link } from "@/components/link";
import { Categories } from "@/components/categories";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3", "4"]}
        keyExtractor={item => item}
        renderItem={() => (
          <Link 
            name="Google" 
            url="https://google.com" 
            onDetails={() => console.log("Detalhes")} 
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsHorizontalScrollIndicator={false}

      />

    </View>
  );
}