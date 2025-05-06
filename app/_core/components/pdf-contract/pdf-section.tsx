import { View, Text } from "@react-pdf/renderer";
import { styles } from "./_config/style";

type ParagraphPart = {
  text: string;
  bold?: boolean;
};

type PdfSectionProps = {
  section: {
    title: string;
    paragraphs: ParagraphPart[][];
  };
  index: number;
};

export const PdfSection = ({ section, index }: PdfSectionProps) => (
  <View key={index}>
    <Text
      style={{
        ...styles.clauseTitle,
        marginTop: index > 0 ? 30 : 15,
      }}
    >
      {section.title}
    </Text>
    <Text style={{ marginBottom: 8 }}>{"_".repeat(104)}</Text>

    {section.paragraphs.map((paragraph, pIdx) => (
      <Text key={pIdx} style={{ ...styles.text, marginTop: 15 }}>
        {paragraph.map((part, partIdx) => (
          <Text key={partIdx} style={part.bold ? { fontWeight: "bold" } : {}}>
            {part.text
              .replace(/[\r\n\t]+/g, " ")
              .replace(/\s\s+/g, " ")
              .trim()}{" "}
          </Text>
        ))}
      </Text>
    ))}
  </View>
);
