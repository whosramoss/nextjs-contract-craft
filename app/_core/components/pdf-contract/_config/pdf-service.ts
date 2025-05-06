import { ContractFormFields } from "@/app/_core/models/models";

interface SignatureBlock {
  label: string;
  name: string;
  code: string;
}

export interface PDFModelData {
  contract: ContractFormFields;
}

export default class PdfService {
  static getGroupSignatures(signatures: SignatureBlock[]) {
    const grouped: SignatureBlock[][] = [];

    for (let i = 0; i < signatures.length; i += 2) {
      grouped.push(signatures.slice(i, i + 2));
    }

    return grouped;
  }

  static getTodayDate(): string {
    const today = new Date();

    const m = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    return `${today.getDate()} de ${
      m[today.getMonth()]
    } de ${today.getFullYear()}`;
  }

  static getBodyData({ contract }: PDFModelData) {
    return [
      {
        title: "CONSIDERAÇÕES INICIAIS",
        paragraphs: [
          [
            {
              text: "O presente contrato tem como objetivo estabelecer as condições para a prestação de serviços de natureza genérica, garantindo que ambas as partes estejam cientes de seus direitos e obrigações. As partes reconhecem a importância de formalizar esta relação por escrito, visando assegurar clareza, transparência e boa-fé na execução das atividades contratadas.",
            },
          ],
          [
            {
              text: "Este contrato é celebrado em caráter estritamente civil, sem gerar vínculo empregatício, societário ou associativo entre as partes, resguardando a autonomia e a independência necessárias para a execução das atividades previstas. Fica ainda estabelecido que qualquer serviço prestado será realizado com observância aos princípios da ética, responsabilidade e eficiência.",
            },
          ],
        ],
      },
      {
        title: "DA QUALIFICAÇÃO DAS PARTES",
        paragraphs: [
          [
            {
              text: `CONTRATADO: ${contract.personContractorName.toUpperCase()}`,
              bold: true,
            },
            {
              text: `brasileiro(a), ${contract.personContractorCivilStatus.toLowerCase()}, 
                                    ${contract.personContractorProfession.toLowerCase()},
                                    CPF nº ${contract.personContractorCPF.toLowerCase()} 
                                    e RG nº ${contract.personContractorRG.toLowerCase()}, 
                                    residente e domiciliada em ${contract.personContractorCEP.toLowerCase()}, 
                                    telefone de contato ${contract.personContractorPhone.toLowerCase()} 
                                    e e-mail: ${contract.personContractorEmail.toLowerCase()}.`,
            },
          ],
          [
            {
              text: `CONTRATANTE: ${contract.companyContractorName.toUpperCase()}`,
              bold: true,
            },
            {
              text: `pessoa jurídica de direito privado, 
                                CNPJ nº  ${contract.companyContractorCNPJ.toUpperCase()}, 
                                por seu sócio administrador`,
            },
            {
              text: `${contract.companyContractorPersonName.toUpperCase()}, `,
              bold: true,
            },
            {
              text: `, CPF nº ${contract.companyContractorCPF.toUpperCase()}.`,
            },
          ],
        ],
      },
      {
        title: "DO OBJETO DO CONTRATO",
        paragraphs: [
          [
            { text: "CLÁUSULA 1º", bold: true },
            {
              text: `O presente contrato tem como objeto a prestação de serviços genéricos a serem realizados pela CONTRATADA em favor do CONTRATANTE, conforme as necessidades previamente acordadas entre as partes.`,
            },
          ],
          [
            { text: "CLÁUSULA 2º.", bold: true },
            {
              text: `A CONTRATADA se compromete a realizar os serviços com diligência, qualidade e dentro dos prazos estipulados, seguindo as orientações fornecidas pelo CONTRATANTE.`,
            },
          ],
          [
            { text: "CLÁUSULA 3º.", bold: true },
            {
              text: `Os serviços prestados deverão atender aos padrões técnicos e operacionais compatíveis com a natureza das atividades contratadas, prezando pela eficiência e cumprimento de prazos.`,
            },
          ],
          [
            { text: "CLÁUSULA 4º.", bold: true },
            {
              text: `Quaisquer alterações no escopo dos serviços deverão ser formalmente comunicadas e aprovadas por ambas as partes, por meio de aditivo contratual ou documento equivalente.`,
            },
          ],
          [
            { text: "CLÁUSULA 5º.", bold: true },
            {
              text: `As partes acordam que, sempre que necessário, poderão ser realizadas reuniões de alinhamento para definição de metas, prazos e ajustes no andamento das atividades.`,
            },
          ],
          [
            { text: "CLÁUSULA 6º.", bold: true },
            {
              text: `A CONTRATADA poderá, mediante autorização prévia do CONTRATANTE, designar terceiros para execução parcial dos serviços, permanecendo, entretanto, responsável integralmente pelo resultado e pela qualidade do trabalho.`,
            },
          ],
          [
            { text: "CLÁUSULA 7º.", bold: true },
            {
              text: `As despesas relacionadas à execução dos serviços, tais como materiais, deslocamento e outros custos operacionais, serão de responsabilidade da parte definida previamente em comum acordo, devendo constar em documento anexo, quando aplicável.`,
            },
          ],
          [
            { text: "CLÁUSULA 8º.", bold: true },
            {
              text: `O CONTRATANTE deverá fornecer todas as informações e documentos necessários para a execução adequada dos serviços, respondendo pela veracidade e integridade das informações fornecidas.`,
            },
          ],
          [
            { text: "CLÁUSULA 9º.", bold: true },
            {
              text: `A CONTRATADA compromete-se a manter sigilo sobre todas as informações confidenciais às quais tiver acesso em razão da execução dos serviços, não podendo divulgá-las a terceiros sem prévia autorização por escrito do CONTRATANTE.`,
            },
          ],
        ],
      },
      {
        title: "DA RESCISÃO CONTRATUAL",
        paragraphs: [
          [
            {
              text: `O presente contrato poderá ser rescindido por qualquer uma das partes, mediante aviso prévio por escrito com antecedência mínima de `,
            },
            {
              text: "15 (quinze) dias",
              bold: true,
            },
            {
              text: `,sem que isso gere qualquer penalidade, exceto quanto às obrigações já assumidas e aos pagamentos devidos até a data da rescisão.`,
            },
          ],
        ],
      },
      {
        title: "DISPOSIÇÕES GERAIS",
        paragraphs: [
          [
            {
              text: "As partes declaram que possuem capacidade jurídica para a celebração deste contrato e se obrigam a cumprir as disposições aqui estabelecidas. Qualquer alteração neste contrato somente terá validade se feita por escrito e assinada por ambas as partes.",
            },
          ],
        ],
      },
      {
        title: "DO FORO",
        paragraphs: [
          [
            {
              text: "Para dirimir quaisquer controvérsias oriundas do presente contrato, as partes elegem o foro da comarca de [Cidade/Estado], com renúncia a qualquer outro, por mais privilegiado que seja.",
            },
          ],
        ],
      },
    ];
  }
}
