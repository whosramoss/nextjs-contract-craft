import { Text, View } from "@react-pdf/renderer";
import { styles } from "./_config/style";

interface PdfSignatureBlockProps {
  label?: string;
  name: string;
  code: string;
  marginTop?: number;
}

export const PdfSignatureBlock = ({
  label,
  name,
  code,
  marginTop = 60,
}: PdfSignatureBlockProps) => {
  const isCentered = Boolean(label);
  const newAlign = isCentered ? "center" : "left";
  const newPadding = isCentered ? 0 : 20;
  return (
    <View
      style={{
        ...styles.signatureBlock,
        marginTop,
      }}
    >
      <Text style={{ marginBottom: 4 }}>{"_".repeat(40)}</Text>
      {label && <Text>{label}</Text>}
      <Text
        style={{
          ...styles.small,
          textAlign: newAlign,
          paddingLeft: newPadding,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          ...styles.small,
          textAlign: newAlign,
          paddingLeft: newPadding,
        }}
      >
        {code}
      </Text>
    </View>
  );
};
