import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    isSelected: boolean;
}

export const categories: Category[] = [
    {
        id: "1",
        name: "Projetos",
        icon: "folder",
        isSelected: true,
    },
    {
        id: "2",
        name: "Site",
        icon: "language",
        isSelected: false,
    },
    {
        id: "3",
        name: "Video",
        icon: "movie",
        isSelected: false,
    },
    {
        id: "4",
        name: "Artigo",
        icon: "newspaper",
        isSelected: false,
    },
    {
        id: "5",
        name: "Curso",
        icon: "code",
        isSelected: false,
    },
    
]
