import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
            
    },
    header: {
        paddingHorizontal: 24,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,

    },
    
    logo: {
        width: 32,
        height: 38,
    },
    links:{
        borderTopWidth:1,
        borderTopColor:colors.gray[600],
    },
    linksContent:{
        gap:20,
        padding:24,
        paddingBottom:100,

    }
})
