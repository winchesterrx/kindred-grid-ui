import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Heart, LogOut, MessageCircle, FileText, Newspaper,
  Send, Trash2, Edit, Plus, X, Filter
} from "lucide-react";
import {
  listarManifestacoes, responderManifestacao,
  listarDocumentos, criarDocumento, editarDocumento, excluirDocumento,
  listarNoticias, criarNoticia, editarNoticia, excluirNoticia,
  type Manifestacao, type DocumentoTransparencia, type Noticia
} from "@/services/mockApi";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("sc_admin_token")) navigate("/admin");
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("sc_admin_token");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Admin Header */}
      <header className="bg-navy sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-primary-foreground font-bold">Admin · Santa Casa</span>
          </Link>
          <Button variant="ghost" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" /> Sair
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="ouvidoria">
          <TabsList className="mb-8 h-12">
            <TabsTrigger value="ouvidoria" className="gap-2"><MessageCircle className="w-4 h-4" /> Ouvidoria</TabsTrigger>
            <TabsTrigger value="transparencia" className="gap-2"><FileText className="w-4 h-4" /> Transparência</TabsTrigger>
            <TabsTrigger value="noticias" className="gap-2"><Newspaper className="w-4 h-4" /> Notícias</TabsTrigger>
          </TabsList>

          <TabsContent value="ouvidoria"><OuvidoriaPanel /></TabsContent>
          <TabsContent value="transparencia"><TransparenciaPanel /></TabsContent>
          <TabsContent value="noticias"><NoticiasPanel /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// ========================
// Ouvidoria Panel
// ========================
const OuvidoriaPanel = () => {
  const [items, setItems] = useState<Manifestacao[]>([]);
  const [filter, setFilter] = useState<"todos" | "pendente" | "respondido">("todos");
  const [respondingId, setRespondingId] = useState<string | null>(null);
  const [respostaText, setRespostaText] = useState("");
  const [saving, setSaving] = useState(false);

  const load = async () => setItems(await listarManifestacoes());
  useEffect(() => { load(); }, []);

  const filtered = filter === "todos" ? items : items.filter((m) => m.status === filter);

  const handleResponder = async (id: string) => {
    if (!respostaText.trim()) return;
    setSaving(true);
    await responderManifestacao(id, respostaText);
    setRespostaText("");
    setRespondingId(null);
    setSaving(false);
    load();
  };

  return (
    <div className="bg-card rounded-2xl border border-border/60 overflow-hidden">
      <div className="p-6 border-b border-border flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-xl font-bold text-navy">Manifestações</h2>
        <div className="flex gap-2">
          {(["todos", "pendente", "respondido"] as const).map((f) => (
            <Button key={f} variant={filter === f ? "navy-solid" : "outline"} size="sm" onClick={() => setFilter(f)}>
              <Filter className="w-3 h-3 mr-1" />
              {f === "todos" ? "Todos" : f === "pendente" ? "Pendentes" : "Respondidos"}
            </Button>
          ))}
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Protocolo</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Assunto</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((m) => (
            <>
              <TableRow key={m.id}>
                <TableCell className="font-medium text-navy">{m.protocolo}</TableCell>
                <TableCell className="text-xs">{m.cpf}</TableCell>
                <TableCell className="capitalize">{m.tipo}</TableCell>
                <TableCell>{m.assunto}</TableCell>
                <TableCell className="text-xs">{m.dataCriacao}</TableCell>
                <TableCell>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full ${m.status === "respondido" ? "bg-secondary/15 text-secondary font-semibold" : "bg-amber-100 text-amber-700 font-semibold"}`}>
                    {m.status === "respondido" ? "Respondido" : "Pendente"}
                  </span>
                </TableCell>
                <TableCell>
                  {m.status === "pendente" && (
                    <Button size="sm" variant="outline" onClick={() => { setRespondingId(respondingId === m.id ? null : m.id); setRespostaText(""); }}>
                      <Send className="w-3 h-3 mr-1" /> Responder
                    </Button>
                  )}
                </TableCell>
              </TableRow>
              {respondingId === m.id && (
                <TableRow key={`${m.id}-resp`}>
                  <TableCell colSpan={7} className="bg-muted/50">
                    <div className="space-y-3 py-2">
                      <p className="text-sm"><strong>Mensagem do cidadão:</strong> {m.mensagem}</p>
                      <Textarea placeholder="Digite a resposta oficial..." value={respostaText} onChange={(e) => setRespostaText(e.target.value)} rows={3} />
                      <div className="flex gap-2">
                        <Button variant="navy-solid" size="sm" onClick={() => handleResponder(m.id)} disabled={saving}>
                          <Send className="w-3 h-3 mr-1" /> {saving ? "Salvando..." : "Enviar Resposta"}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setRespondingId(null)}>Cancelar</Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// ========================
// Transparência Panel
// ========================
const TransparenciaPanel = () => {
  const [docs, setDocs] = useState<DocumentoTransparencia[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDoc, setEditingDoc] = useState<DocumentoTransparencia | null>(null);
  const [form, setForm] = useState({ nome: "", categoria: "", dataPublicacao: "" });

  const load = async () => setDocs(await listarDocumentos());
  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    if (!form.nome || !form.categoria || !form.dataPublicacao) return;
    if (editingDoc) {
      await editarDocumento(editingDoc.id, form);
    } else {
      await criarDocumento(form);
    }
    setShowForm(false);
    setEditingDoc(null);
    setForm({ nome: "", categoria: "", dataPublicacao: "" });
    load();
  };

  const handleEdit = (doc: DocumentoTransparencia) => {
    setEditingDoc(doc);
    setForm({ nome: doc.nome, categoria: doc.categoria, dataPublicacao: doc.dataPublicacao });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    await excluirDocumento(id);
    load();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Documentos de Transparência</h2>
        <Button variant="navy-solid" onClick={() => { setShowForm(!showForm); setEditingDoc(null); setForm({ nome: "", categoria: "", dataPublicacao: "" }); }}>
          {showForm ? <><X className="w-4 h-4 mr-1" /> Cancelar</> : <><Plus className="w-4 h-4 mr-1" /> Novo Documento</>}
        </Button>
      </div>

      {showForm && (
        <div className="bg-card rounded-2xl p-6 border border-border/60 space-y-4">
          <h3 className="font-bold text-navy">{editingDoc ? "Editar Documento" : "Novo Documento"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-semibold text-navy block mb-1">Nome do Documento</label>
              <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-semibold text-navy block mb-1">Categoria</label>
              <Input placeholder="Ex: Financeiro, Institucional" value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-semibold text-navy block mb-1">Data de Publicação</label>
              <Input type="date" value={form.dataPublicacao} onChange={(e) => setForm({ ...form, dataPublicacao: e.target.value })} />
            </div>
          </div>
          <Button variant="navy-solid" onClick={handleSave}>
            {editingDoc ? "Salvar Alterações" : "Publicar Documento"}
          </Button>
        </div>
      )}

      <div className="bg-card rounded-2xl border border-border/60 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {docs.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium text-navy">{doc.nome}</TableCell>
                <TableCell>{doc.categoria}</TableCell>
                <TableCell className="text-xs">{doc.dataPublicacao}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(doc)}><Edit className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => handleDelete(doc.id)}><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// ========================
// Notícias Panel
// ========================
const NoticiasPanel = () => {
  const [items, setItems] = useState<Noticia[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Noticia | null>(null);
  const [form, setForm] = useState({ titulo: "", corpo: "", imagem: "", data: "" });

  const load = async () => setItems(await listarNoticias());
  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    if (!form.titulo || !form.data) return;
    if (editingItem) {
      await editarNoticia(editingItem.id, form);
    } else {
      await criarNoticia(form);
    }
    setShowForm(false);
    setEditingItem(null);
    setForm({ titulo: "", corpo: "", imagem: "", data: "" });
    load();
  };

  const handleEdit = (n: Noticia) => {
    setEditingItem(n);
    setForm({ titulo: n.titulo, corpo: n.corpo, imagem: n.imagem, data: n.data });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    await excluirNoticia(id);
    load();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-navy">Notícias e Eventos</h2>
        <Button variant="navy-solid" onClick={() => { setShowForm(!showForm); setEditingItem(null); setForm({ titulo: "", corpo: "", imagem: "", data: "" }); }}>
          {showForm ? <><X className="w-4 h-4 mr-1" /> Cancelar</> : <><Plus className="w-4 h-4 mr-1" /> Nova Notícia</>}
        </Button>
      </div>

      {showForm && (
        <div className="bg-card rounded-2xl p-6 border border-border/60 space-y-4">
          <h3 className="font-bold text-navy">{editingItem ? "Editar Notícia" : "Nova Notícia"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-navy block mb-1">Título</label>
              <Input value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-semibold text-navy block mb-1">Data</label>
              <Input type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-navy block mb-1">URL da Imagem de Capa</label>
            <Input placeholder="Ex: /src/assets/news-1.jpg" value={form.imagem} onChange={(e) => setForm({ ...form, imagem: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-semibold text-navy block mb-1">Corpo da Notícia</label>
            <Textarea rows={5} value={form.corpo} onChange={(e) => setForm({ ...form, corpo: e.target.value })} />
          </div>
          <Button variant="navy-solid" onClick={handleSave}>
            {editingItem ? "Salvar Alterações" : "Publicar Notícia"}
          </Button>
        </div>
      )}

      <div className="bg-card rounded-2xl border border-border/60 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((n) => (
              <TableRow key={n.id}>
                <TableCell className="font-medium text-navy">{n.titulo}</TableCell>
                <TableCell className="text-xs">{n.data}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(n)}><Edit className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => handleDelete(n.id)}><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDashboard;
