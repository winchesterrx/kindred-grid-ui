// Mock API service layer - simulates future SQL/Firebird backend connections

export interface Manifestacao {
  id: string;
  protocolo: string;
  cpf: string;
  tipo: "elogio" | "sugestao" | "reclamacao" | "denuncia";
  assunto: string;
  mensagem: string;
  status: "pendente" | "respondido";
  resposta?: string;
  dataCriacao: string;
  dataResposta?: string;
}

export interface DocumentoTransparencia {
  id: string;
  nome: string;
  categoria: string;
  dataPublicacao: string;
  arquivo?: string;
}

export interface Noticia {
  id: string;
  titulo: string;
  corpo: string;
  imagem: string;
  data: string;
}

// --- In-memory mock data store ---

let manifestacoes: Manifestacao[] = [
  {
    id: "1",
    protocolo: "OUV-2026-0001",
    cpf: "123.456.789-00",
    tipo: "elogio",
    assunto: "Excelente atendimento na Cardiologia",
    mensagem: "Gostaria de elogiar toda a equipe da ala de cardiologia pelo atendimento humanizado.",
    status: "respondido",
    resposta: "Agradecemos seu elogio! Sua mensagem foi encaminhada à equipe da Cardiologia. É muito gratificante saber que estamos no caminho certo.",
    dataCriacao: "2026-03-15",
    dataResposta: "2026-03-18",
  },
  {
    id: "2",
    protocolo: "OUV-2026-0002",
    cpf: "123.456.789-00",
    tipo: "reclamacao",
    assunto: "Demora no Pronto-Socorro",
    mensagem: "Esperei mais de 4 horas para ser atendido no pronto-socorro.",
    status: "pendente",
    dataCriacao: "2026-03-20",
  },
  {
    id: "3",
    protocolo: "OUV-2026-0003",
    cpf: "987.654.321-00",
    tipo: "sugestao",
    assunto: "Wi-Fi na sala de espera",
    mensagem: "Sugiro a instalação de Wi-Fi gratuito nas salas de espera.",
    status: "respondido",
    resposta: "Obrigado pela sugestão! Já estamos em processo de implementação de Wi-Fi em todas as áreas de espera, com previsão para maio/2026.",
    dataCriacao: "2026-03-10",
    dataResposta: "2026-03-12",
  },
];

let documentos: DocumentoTransparencia[] = [
  { id: "1", nome: "Balanço Patrimonial 2024", categoria: "Financeiro", dataPublicacao: "2025-03-15" },
  { id: "2", nome: "Estatuto Social", categoria: "Institucional", dataPublicacao: "2024-01-10" },
  { id: "3", nome: "Relatório de Gestão 2024", categoria: "Gestão", dataPublicacao: "2025-04-01" },
];

let noticias: Noticia[] = [
  { id: "1", titulo: "Mutirão de Saúde atende mais de 500 pessoas no bairro Centro", corpo: "O mutirão realizado no último sábado contou com consultas de clínica geral, aferição de pressão e testes rápidos.", imagem: "/src/assets/news-1.jpg", data: "2026-03-28" },
  { id: "2", titulo: "Nova ala cirúrgica amplia capacidade em 40%", corpo: "Com investimento de R$ 5 milhões, a nova ala conta com 4 salas cirúrgicas equipadas com tecnologia de ponta.", imagem: "/src/assets/news-2.jpg", data: "2026-03-15" },
  { id: "3", titulo: "Campanha de doação arrecada R$ 200 mil para pediatria", corpo: "A campanha 'Um Sorriso para Cada Criança' superou todas as expectativas e os recursos serão destinados à reforma da ala pediátrica.", imagem: "/src/assets/news-3.jpg", data: "2026-03-02" },
];

let nextId = 100;
const genId = () => String(++nextId);
const genProtocolo = () => `OUV-2026-${String(manifestacoes.length + 1).padStart(4, "0")}`;

// Simulate async delay
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// ========================
// Ouvidoria API
// ========================

export async function criarManifestacao(data: Omit<Manifestacao, "id" | "protocolo" | "status" | "dataCriacao">): Promise<Manifestacao> {
  await delay();
  const nova: Manifestacao = {
    ...data,
    id: genId(),
    protocolo: genProtocolo(),
    status: "pendente",
    dataCriacao: new Date().toISOString().slice(0, 10),
  };
  manifestacoes.push(nova);
  return nova;
}

export async function buscarPorProtocolo(protocolo: string): Promise<Manifestacao | null> {
  await delay();
  return manifestacoes.find((m) => m.protocolo.toLowerCase() === protocolo.toLowerCase()) || null;
}

export async function buscarPorCpf(cpf: string): Promise<Manifestacao[]> {
  await delay();
  return manifestacoes.filter((m) => m.cpf === cpf);
}

export async function listarManifestacoes(): Promise<Manifestacao[]> {
  await delay();
  return [...manifestacoes].sort((a, b) => b.dataCriacao.localeCompare(a.dataCriacao));
}

export async function responderManifestacao(id: string, resposta: string): Promise<Manifestacao | null> {
  await delay();
  const m = manifestacoes.find((x) => x.id === id);
  if (!m) return null;
  m.resposta = resposta;
  m.status = "respondido";
  m.dataResposta = new Date().toISOString().slice(0, 10);
  return m;
}

// ========================
// Transparência API
// ========================

export async function listarDocumentos(): Promise<DocumentoTransparencia[]> {
  await delay();
  return [...documentos];
}

export async function criarDocumento(data: Omit<DocumentoTransparencia, "id">): Promise<DocumentoTransparencia> {
  await delay();
  const doc: DocumentoTransparencia = { ...data, id: genId() };
  documentos.push(doc);
  return doc;
}

export async function editarDocumento(id: string, data: Partial<DocumentoTransparencia>): Promise<DocumentoTransparencia | null> {
  await delay();
  const doc = documentos.find((d) => d.id === id);
  if (!doc) return null;
  Object.assign(doc, data);
  return doc;
}

export async function excluirDocumento(id: string): Promise<boolean> {
  await delay();
  const len = documentos.length;
  documentos = documentos.filter((d) => d.id !== id);
  return documentos.length < len;
}

// ========================
// Notícias API
// ========================

export async function listarNoticias(): Promise<Noticia[]> {
  await delay();
  return [...noticias];
}

export async function criarNoticia(data: Omit<Noticia, "id">): Promise<Noticia> {
  await delay();
  const n: Noticia = { ...data, id: genId() };
  noticias.push(n);
  return n;
}

export async function editarNoticia(id: string, data: Partial<Noticia>): Promise<Noticia | null> {
  await delay();
  const n = noticias.find((x) => x.id === id);
  if (!n) return null;
  Object.assign(n, data);
  return n;
}

export async function excluirNoticia(id: string): Promise<boolean> {
  await delay();
  const len = noticias.length;
  noticias = noticias.filter((n) => n.id !== id);
  return noticias.length < len;
}

// ========================
// Auth API (mock)
// ========================

export async function loginAdmin(usuario: string, senha: string): Promise<{ success: boolean; token?: string }> {
  await delay(500);
  if (usuario === "admin" && senha === "123") {
    return { success: true, token: "mock-jwt-token-santa-casa" };
  }
  return { success: false };
}
