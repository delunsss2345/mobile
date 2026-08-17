import { Text } from "react-native";

const InfoRow = ({ name }: { name: string }) => {
  return <Text numberOfLines={1}>{name}</Text>;
};
export default InfoRow;
