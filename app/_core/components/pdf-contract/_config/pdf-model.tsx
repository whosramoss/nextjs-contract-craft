import {
    Document,
    Page,
    Text,
    View,
} from '@react-pdf/renderer'
import { styles } from './style'
import PdfService, { PDFModelData } from './pdf-service'
import { PdfSection } from '../pdf-section'
import { PdfGrid, PdfGridItem } from '../pdf-grid'
import { PdfSignatureBlock } from '../pdf-signature'

  
  export default function PDFModel({contract}:PDFModelData) {
   
    const data = PdfService.getBodyData({ contract })
    const allSignatures = PdfService.getGroupSignatures([
      { label: "CONTRATANTE", name: contract.personContractorName, code: `CPF Nº${contract.personContractorCPF}` },
      { label: "CONTRATADO(A)", name: contract.companyContractorName , code: `CNPJ Nº${contract.companyContractorCNPJ}` },
      { label: "", name: "Testemunha:", code:'CPF:' },
      { label: "", name: "Testemunha:", code:'CPF:' },
    ])
    
    return  (
        <Document>
          <Page size="A4" style={styles.page}>
          <View style={{...styles.section, marginBottom:30}}>
            <Text style={styles.title}>
                {contract?.title ?? 'CONTRATO'}
            </Text>
          </View>
            {data.map((section, index) => (
                <PdfSection key={index} section={section} index={index} />
            ))}
           </Page> 
           <Page size="A4" style={styles.page}>
            <View style={styles.signatureBlock}>
                <Text>Brasil, {PdfService.getTodayDate()}</Text>
                {allSignatures.map((group, groupIdx) => (
                    <PdfGrid key={groupIdx}>
                        {group.map((e, idx) => (
                            <PdfGridItem  key={idx}>
                                <PdfSignatureBlock {...e}/>
                            </PdfGridItem>
                        ))}
                    </PdfGrid>
                ))}
            </View>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
          </Page>
        </Document>
      )
  }
