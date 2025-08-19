#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../dist');

console.log('🔧 Otimizando build para Hostgator...');

// Verificar se a pasta dist existe
if (!fs.existsSync(distPath)) {
  console.error('❌ Pasta dist não encontrada. Execute npm run build primeiro.');
  process.exit(1);
}

// Função para copiar arquivo .htaccess
function copyHtaccess() {
  const htaccessSource = path.join(__dirname, '../public/.htaccess');
  const htaccessDest = path.join(distPath, '.htaccess');
  
  if (fs.existsSync(htaccessSource)) {
    fs.copyFileSync(htaccessSource, htaccessDest);
    console.log('✅ .htaccess copiado para dist/');
  } else {
    console.log('⚠️  .htaccess não encontrado em public/');
  }
}

// Função para verificar tamanho dos arquivos
function checkFileSizes() {
  const files = fs.readdirSync(distPath);
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
      totalSize += stats.size;
      console.log(`📁 ${file}: ${sizeInMB} MB`);
    }
  });
  
  const totalSizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
  console.log(`📊 Tamanho total: ${totalSizeInMB} MB`);
  
  if (totalSize > 50 * 1024 * 1024) { // 50MB
    console.log('⚠️  Build muito grande para hosting compartilhado. Considere otimizar imagens.');
  }
}

// Função para criar arquivo de instruções
function createInstructions() {
  const instructions = `# 🚀 Deploy no Hostgator

## 📋 Passos para Deploy:

### 1. Acesse o cPanel do Hostgator
- Faça login em: https://cliente.hostgator.com.br/
- Acesse o cPanel da sua conta

### 2. Upload dos Arquivos
- Vá em "File Manager" ou use FTP
- Navegue até a pasta "public_html"
- Faça upload de TODOS os arquivos da pasta dist/

### 3. Verificações Importantes
- ✅ .htaccess está na raiz (public_html)
- ✅ index.html está na raiz
- ✅ Pasta assets/ com CSS/JS está presente
- ✅ Todas as imagens foram enviadas

### 4. Teste o Site
- Acesse seu domínio
- Teste todas as rotas: /projetos, /sobre, /contato, etc.
- Verifique se as imagens carregam

### 5. Configurações Adicionais (Opcional)
- SSL/HTTPS (já configurado no .htaccess)
- Cache e compressão (já configurado)
- Headers de segurança (já configurado)

## 🆘 Problemas Comuns:

### Rota não encontrada (404)
- Verifique se .htaccess foi enviado
- Confirme que mod_rewrite está ativo

### Imagens não carregam
- Verifique se todas as imagens estão na pasta correta
- Confirme permissões dos arquivos (644)

### CSS/JS não carregam
- Verifique se a pasta assets/ foi enviada
- Confirme permissões das pastas (755)

## 📞 Suporte Hostgator:
- Chat online: https://cliente.hostgator.com.br/
- Telefone: 0800 041 2520
- Email: suporte@hostgator.com.br

## 🔧 Comandos Úteis:
\`\`\`bash
# Build otimizado para Hostgator
npm run build:hostgator

# Build normal
npm run build

# Preview local
npm run preview
\`\`\`

---
Build gerado em: ${new Date().toLocaleString('pt-BR')}
`;

  const instructionsPath = path.join(distPath, 'INSTRUCOES-HOSTGATOR.md');
  fs.writeFileSync(instructionsPath, instructions);
  console.log('✅ Instruções de deploy criadas: INSTRUCOES-HOSTGATOR.md');
}

// Executar otimizações
try {
  copyHtaccess();
  checkFileSizes();
  createInstructions();
  
  console.log('\n🎉 Build otimizado para Hostgator criado com sucesso!');
  console.log('📁 Pasta dist/ está pronta para upload');
  console.log('📖 Leia INSTRUCOES-HOSTGATOR.md para instruções de deploy');
  
} catch (error) {
  console.error('❌ Erro durante otimização:', error.message);
  process.exit(1);
}
