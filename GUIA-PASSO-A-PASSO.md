# GUIA PASSO A PASSO — Deploy do Burnout em Silêncio
*Siga na ordem, um passo de cada vez*

---

## ANTES DE COMEÇAR
Você precisa ter:
- ✅ Conta na InfinitePay (sua InfiniteTag: medina_pay)
- ⬜ Conta no GitHub (crie em github.com se ainda não fez)
- ✅ Conta no Netlify (já tem, é onde o site está agora)

---

## PASSO 1 — Preparar a pasta no seu computador

1. Crie uma pasta nova no seu computador, ex: `C:\burnout-site`
2. Copie TODOS os arquivos deste pacote para dentro dela
3. Copie a pasta `IMGs` do seu site atual (`E:\OFICIAL - PUBLICADO\Bournout\site\IMGs`) para dentro de `C:\burnout-site\`
4. A estrutura final deve ficar assim:

```
burnout-site\
├── index.html          ← landing page (com pixel TikTok + link InfinitePay)
├── obrigado.html       ← página pós-pagamento (verificação automática)
├── netlify.toml        ← configuração do Netlify
├── IMGs\               ← suas imagens (hero.jpeg, exaustao.jpeg, etc.)
├── assets\
│   └── burnout-em-silencio.pdf  ← o ebook que o comprador baixa
└── netlify\
    └── functions\
        └── verify-payment.js    ← script de verificação de pagamento
```

---

## PASSO 2 — Criar repositório no GitHub

1. Acesse github.com (logado na sua conta nova)
2. Clique no botão verde **"New"** (ou "Novo repositório")
3. Nome do repositório: `burnout-site`
4. Marque: **Public** (precisa ser público para o Netlify acessar de graça)
5. NÃO marque "Add a README file" (deixe desmarcado)
6. Clique em **"Create repository"**

---

## PASSO 3 — Enviar os arquivos para o GitHub

### Opção A — Pelo navegador (mais fácil, sem instalar nada)
1. Na página do repositório vazio, clique em **"uploading an existing file"**
2. Arraste TODA a pasta `burnout-site` para a área de upload
   (ou clique em "choose your files" e selecione todos os arquivos)
3. IMPORTANTE: o GitHub pelo navegador não aceita pastas aninhadas facilmente.
   Se der problema, use a Opção B abaixo.
4. Escreva uma mensagem: "Primeiro deploy" e clique em **"Commit changes"**

### Opção B — Pelo GitHub Desktop (recomendado)
1. Baixe o GitHub Desktop em desktop.github.com e instale
2. Faça login com sua conta GitHub
3. Clique em "Add" → "Add existing repository" → selecione a pasta `C:\burnout-site`
   (se perguntar se quer criar repositório, diga sim e conecte ao repositório que criou)
4. Na tela do GitHub Desktop, todos os arquivos vão aparecer como "changes"
5. Escreva "Primeiro deploy" no campo de mensagem e clique em **"Commit to main"**
6. Clique em **"Publish branch"** (ou "Push origin")

---

## PASSO 4 — Conectar GitHub ao Netlify

1. Acesse app.netlify.com (logado na sua conta)
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **"GitHub"** como provedor
4. Autorize o Netlify a acessar seus repositórios
5. Selecione o repositório `burnout-site`
6. Na tela de configuração:
   - Branch: main
   - Build command: (deixe VAZIO)
   - Publish directory: (deixe VAZIO ou coloque apenas `.`)
7. Clique em **"Deploy site"**

⚠️ IMPORTANTE: Se você já tem o site `medinasproducoes.netlify.app`, vá em
**Site settings → Change site name** do NOVO site e coloque `medinasproducoes`.
(Pode ser necessário deletar o site antigo primeiro em Settings → Delete site,
ou usar um nome diferente como `medinasproducoes2` temporariamente.)

---

## PASSO 5 — Configurar seu WhatsApp no código

Abra o arquivo `obrigado.html` com o Bloco de Notas e use Ctrl+F para achar:

```
const NUMERO_WHATSAPP = '5500000000000';
```

Troque pelo seu número real no formato: 55 + DDD + número, sem espaços.
Exemplo: se seu número é (41) 98888-7777, fica: 5541988887777

Também troque o e-mail se necessário:
```
const EMAIL_SUPORTE = 'contato@medinasproducoes.com.br';
```

Depois de editar, faça commit e push pelo GitHub Desktop (ou re-upload pelo navegador).

---

## PASSO 6 — Testar

1. Acesse `https://medinasproducoes.netlify.app` no navegador
2. Clique em "Quero meu acesso agora" → deve abrir o checkout da InfinitePay
3. Faça um pagamento de teste de R$ 57,00 do seu próprio bolso (é reembolsável)
4. Após pagar, clique em "Continuar" → deve cair na página de obrigado
5. Aguarde a verificação (spinner por alguns segundos)
6. Se tudo funcionar: botão "Baixar meu Ebook" aparece → clique e confirme o download
7. Se cair no fallback manual: os botões de WhatsApp/e-mail funcionam? Teste os dois

---

## PASSO 7 — Colocar o link na bio

Instagram e TikTok → cole na bio:
```
https://medinasproducoes.netlify.app
```

---

## RESUMO — O que cada arquivo faz

| Arquivo | Função |
|---|---|
| index.html | Landing page de vendas (pixel TikTok incluído) |
| obrigado.html | Página pós-pagamento (verifica + libera download) |
| netlify.toml | Configuração do Netlify (habilita functions) |
| netlify/functions/verify-payment.js | Confere pagamento na API da InfinitePay |
| assets/burnout-em-silencio.pdf | O ebook que o comprador baixa |
| IMGs/ | Imagens da landing page |

---

*Dúvidas? Volte na conversa com o Claude e pergunte.*
