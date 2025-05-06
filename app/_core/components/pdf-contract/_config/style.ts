import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  gridItem: {
    width: "38%",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  page: {
    padding: 40,
    fontSize: 10,
    lineHeight: 1.4,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  clauseTitle: {
    fontSize: 11,
    marginTop: 4,
    marginBottom: 4,
    fontWeight: "bold",
  },
  text: {
    fontSize: 10,
    textAlign: "justify",
  },
  signatureBlock: {
    marginTop: 40,
    textAlign: "center",
  },
  small: {
    fontSize: 10,
  },
});
