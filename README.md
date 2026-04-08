# Parra Empreendimentos - Site Institucional

Site institucional para uma vendedora de imóveis especializada em terrenos, com design minimalista em azul marinho e dourado.

## 🌐 **Como Publicar no GitHub**

### Passo 1: Criar Repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Nome do repositório: `parra-empreendimentos`
5. Descrição: "Site institucional Parra Empreendimentos"
6. Marque como **Público**
7. **NÃO** marque "Initialize this repository with a README"
8. Clique em **"Create repository"**

### Passo 2: Configurar Remote e Fazer Push
No terminal, execute os comandos abaixo na pasta do projeto:

```bash
# Entre na pasta do projeto
cd parra-empreendimentos

# Adicione o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/parra-empreendimentos.git

# Envie os arquivos para o GitHub
git push -u origin main
```

### Passo 3: Publicar com GitHub Pages
1. No repositório do GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione **main** e pasta **/(root)**
5. Clique em **Save**

Pronto! Em alguns minutos seu site estará disponível em:
`https://SEU_USUARIO.github.io/parra-empreendimentos/`

---

## 📋 **Estrutura do Projeto**

```
parra-empreendimentos/
├── index.html          # Página inicial
├── sobre.html          # Página Sobre
├── galeria.html        # Galeria de imóveis
├── imoveis.html        # Marketplace de terrenos
├── contato.html        # Página de contato
├── blog.html           # Blog (atualizado dinamicamente)
├── admin.html          # Painel administrativo do blog
├── css/
│   ├── style.css       # Estilos do site
│   └── admin.css       # Estilos do painel admin
├── js/
│   ├── main.js         # JavaScript do site
│   └── admin.js        # JavaScript do painel admin
└── img/                # Pasta para imagens (opcional)
```

---

## 🎨 **Painel Administrativo do Blog**

### Acesso
- **URL**: `seusite.github.io/parra-empreendimentos/admin.html`
- **Usuário**: `admin`
- **Senha**: `admin123`

### Funcionalidades
- ✅ Criar novos posts
- ✅ Editar posts existentes
- ✅ Excluir posts
- ✅ Gerenciar categorias
- ✅ Editor visual (WYSIWYG)

### Como Funciona
Os posts são salvos no **localStorage** do navegador. Isso significa que:
- ✅ Funciona sem banco de dados
- ✅ Atualizações instantâneas
- ⚠️ Os dados ficam salvos apenas no navegador onde foram criados

---

## 🔄 **Como Atualizar o Site**

### Fazer Alterações no Código
1. Edite os arquivos no seu computador
2. No terminal, na pasta do projeto:

```bash
# Adicione as mudanças
git add .

# Crie um commit
git commit -m "Descrição das alterações"

# Envie para o GitHub
git push origin main
```

### Atualizar Conteúdo do Blog
1. Acesse `admin.html`
2. Faça login
3. Crie, edite ou exclua posts
4. As mudanças aparecem automaticamente no blog

---

## 🌟 **Recursos do Site**

- **Design Responsivo**: Funciona em celulares, tablets e computadores
- **Paleta Elegante**: Azul marinho (#1a2744) com destaques em dourado (#c9a84c)
- **Marketplace**: Sistema de filtros para busca de terrenos
- **Blog Dinâmico**: Gerenciamento completo sem código
- **Formulários**: Contato e newsletter funcionais
- **Integração WhatsApp**: Botões para contato direto

---

## 📞 **Informações de Contato (Editáveis)**

As informações de contato estão nos arquivos HTML. Para alterar:
- Telefone, e-mail e endereço estão em `contato.html` e no rodapé de todas as páginas
- Basta editar o texto diretamente nos arquivos HTML

---

## 🛠️ **Tecnologias Utilizadas**

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript**: Funcionalidades interativas
- **LocalStorage**: Armazenamento de dados do blog
- **Font Awesome**: Ícones
- **Google Fonts**: Montserrat e Playfair Display

---

## 📝 **Notas Importantes**

1. **Blog**: O sistema de blog usa localStorage, ideal para demonstração. Para um blog profissional com acesso de múltiplos dispositivos, considere usar WordPress ou similar.

2. **Imagens**: As imagens atuais são de bancos gratuitos (Unsplash). Substitua pelas imagens reais dos imóveis.

3. **Formulários**: Os formulários são funcionais mas não enviam e-mails reais. Para produção, integre com serviços como Formspree ou EmailJS.

4. **Mapa**: O mapa do Google é um placeholder. Atualize com o endereço real.

---

## 👩‍💻 **Próximos Passos**

1. ✅ Publicar no GitHub (seguir instruções acima)
2. ✅ Comprar domínio (opcional): `parraempreendimentos.com.br`
3. ✅ Substituir imagens placeholder
4. ✅ Atualizar informações de contato
5. ✅ Configurar formulário de e-mail real
6. ✅ Criar conteúdo inicial para o blog

---

## 📧 **Suporte**

Para dúvidas sobre como usar o painel administrativo ou fazer atualizações, consulte a seção **Admin** no próprio site.

---

**Desenvolvido com ❤️ para Parra Empreendimentos**