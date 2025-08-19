# Manrio Engenharia - Site Corporativo

Site corporativo moderno e responsivo para a Manrio Engenharia, empresa especializada em sistemas de energia, telecomunicações e segurança eletrônica patrimonial.

## 🚀 Funcionalidades Implementadas

### Páginas Principais
- **Home**: Hero section com call-to-action, serviços oferecidos e áreas de atuação
- **Sobre**: Informações sobre a empresa, missão, visão e valores
- **Projetos**: Portfólio de projetos realizados com filtros por categoria
- **Notícias**: Blog com artigos do setor e newsletter
- **Contato**: Formulário de contato e informações da empresa

### Recursos Técnicos
- Design responsivo para todos os dispositivos
- Tema escuro moderno com cores da marca
- Animações e efeitos hover
- Navegação intuitiva com dropdown menus
- Formulários funcionais
- Integração com redes sociais
- SEO otimizado

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19 + Vite
- **Estilização**: Bootstrap 5 + CSS customizado
- **Ícones**: FontAwesome 6
- **Roteamento**: React Router DOM
- **Build Tool**: Vite

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎨 Design System

### Cores Principais
- **Verde**: #198754 (Bootstrap success)
- **Verde Escuro**: #0f0f0f (Navbar)
- **Fundo**: #1e1e1e (Dark theme)
- **Cards**: #222 (Dark cards)

### Tipografia
- Fontes do sistema (Arial, Helvetica, sans-serif)
- Hierarquia clara de títulos (h1-h6)
- Texto legível com contraste adequado

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre na pasta do projeto
cd site

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Scripts Disponíveis
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run deploy` - Deploy para GitHub Pages

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.jsx     # Navegação principal
│   └── Footer.jsx     # Rodapé da página
├── pages/              # Páginas da aplicação
│   ├── Home.jsx       # Página inicial
│   ├── Sobre.jsx      # Sobre a empresa
│   ├── Projetos.jsx   # Portfólio de projetos
│   ├── Noticias.jsx   # Blog e notícias
│   └── Contato.jsx    # Formulário de contato
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🔧 Personalizações

### Adicionar Novas Páginas
1. Crie o componente na pasta `pages/`
2. Adicione a rota em `App.jsx`
3. Inclua o link no `Navbar.jsx`

### Modificar Cores
As cores principais estão definidas no arquivo `index.css` e podem ser facilmente alteradas.

### Adicionar Novos Projetos
Edite o array `projetos` no arquivo `Projetos.jsx` para incluir novos projetos.

## 📊 SEO e Performance

- Meta tags otimizadas
- Imagens com alt text
- Estrutura semântica HTML
- CSS e JS minificados
- Lazy loading para imagens

## 🌐 Deploy

O site está configurado para deploy automático no GitHub Pages através do GitHub Actions.

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato:
- Email: manrio@manriorj.com
- Telefone: (21) 99113-5673 / (22) 99622-5673

## 📄 Licença

© 2024 MANRIO ENGENHARIA - Todos os direitos reservados.
