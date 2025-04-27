import { FlatList } from "react-native";
import { styles } from "./styles";
import { Category } from "@/components/category";
import { categories } from "@/utils/categories";

export function Categories() {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
      <Category name={item.name} icon={item.icon} isSelected={false} />
    )}
      keyExtractor={(item) => item.id}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      
    />
  )
}
