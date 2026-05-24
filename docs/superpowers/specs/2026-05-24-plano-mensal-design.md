# Spec de Design — Plano Mensal

Data: 2026-05-24

## Objetivo
Adicionar o card do **Plano Mensal** na seção de preços, seguindo o padrão existente, com paleta em tons roxos.

## Escopo
- Criar um novo plano mensal com preço normal **R$ 300**.
- Exibir no modo normal e no modo Black Friday (preço BF **R$ 250**, preço original **R$ 300**).
- Protocolo fixo de **4 semanas**, com **renovação mensal**.
- Inserir o card **antes do Prata**.
- Manter o CTA via WhatsApp informado.

## Fora de Escopo
- Mudanças em layout global, SEO técnico ou outras seções.

## Estrutura de Dados
1. **Tipo `Plan`**: adicionar `id: "mensal"`.
2. **Config de preços** (`src/config/pricing.config.ts`):
   - `normal.mensal`: `vista: 300`, `credito: 300`
   - `blackFriday.mensal`: `original: 300`, `discount: 250`
3. **`getCurrentPrices`**: retornar chaves `mensal`, `mensalOriginal`, `mensalVista`, `mensalCredito`.

## Card do Plano Mensal
**Nome:** PLANO MENSAL  
**Badge:** MENSAL  
**Descrição:** Plano mensal com protocolo fixo de 4 semanas, renovado todo mês.  
**Features (baseado no Prata):**
- Acesso à nova plataforma de alunos
- Planilha com vídeos de TODOS os exercícios
- Planilha de controle de carga
- Alongamentos específicos
- Ajustes periódicos nos treinos
- Protocolo de 4 semanas (renovação mensal)

**CTA:**  
`https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Mensal`

## Tema Visual (Roxo)
Adicionar `mensal` em `getPlanTheme`, com classes em tons roxos (exemplos):
- `cardBorder`: `border-purple-400/45`
- `cardBg`: gradiente escuro com roxo (`from-[#120a1f] to-[#0a0811]`)
- `badgeClass`: roxo com texto escuro
- `priceClass`, `iconClass`: roxo claro
- `hoverClass`: sombra roxa suave
- `buttonClass`: roxo com realce no hover

## Ordem dos Cards
Inserir o **Plano Mensal antes do Prata** em ambos os arrays (normal e Black Friday).

## Validação
- Conferir renderização no grid com 5 cards.
- Verificar preços exibidos no modo normal e Black Friday.
