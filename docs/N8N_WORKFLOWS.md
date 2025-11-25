# Configuration des Workflows N8N

Ce document explique comment configurer les workflows N8N pour La Boîte à Écrire.

## Prérequis

- Une instance N8N (locale ou cloud)
- Accès aux API Claude (Anthropic) et/ou ChatGPT (OpenAI)

## Workflows Disponibles

### 1. Style Evaluation (Évaluation de Style)

Analyse le style d'une scène et fournit un score avec des suggestions.

**Webhook URL:** `http://votre-n8n.com/webhook/style-evaluation`

**Structure du Workflow:**

```
1. Webhook (Trigger)
   ↓
2. Claude API Node
   - Prompt: "Analyse le style de ce texte et fournis un score de 1-10..."
   ↓
3. Code Node (Formatage de la réponse)
   ↓
4. Respond to Webhook
```

**Configuration détaillée:**

#### Nœud 1: Webhook
- Method: POST
- Path: `style-evaluation`
- Response Mode: When Last Node Finishes

#### Nœud 2: Claude API (HTTP Request)
```json
{
  "method": "POST",
  "url": "https://api.anthropic.com/v1/messages",
  "headers": {
    "x-api-key": "{{ $env.ANTHROPIC_API_KEY }}",
    "anthropic-version": "2023-06-01",
    "content-type": "application/json"
  },
  "body": {
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 1024,
    "messages": [{
      "role": "user",
      "content": "Analyse le style de ce texte littéraire et fournis:\n1. Un score de style (1-10)\n2. Points forts\n3. Points à améliorer\n4. Suggestions concrètes\n\nTexte: {{ $json.text }}"
    }]
  }
}
```

#### Nœud 3: Code Node
```javascript
const response = $input.item.json.content[0].text;

return {
  json: {
    executionId: $json.executionId,
    workflowId: 'style-evaluation',
    status: 'completed',
    input: {
      text: $node["Webhook"].json.body.text
    },
    output: {
      analysis: response,
      timestamp: new Date().toISOString()
    }
  }
};
```

---

### 2. Alternative Generation (Génération d'Alternatives)

Génère des variantes d'une scène selon une direction donnée.

**Webhook URL:** `http://votre-n8n.com/webhook/alternative-generation`

**Structure du Workflow:**

```
1. Webhook (Trigger)
   ↓
2. OpenAI ChatGPT Node
   - Prompt: "Réécris ce texte en le rendant {{ direction }}..."
   ↓
3. Code Node (Formatage)
   ↓
4. Respond to Webhook
```

**Configuration détaillée:**

#### Nœud 1: Webhook
- Method: POST
- Path: `alternative-generation`
- Response Mode: When Last Node Finishes

#### Nœud 2: ChatGPT (HTTP Request)
```json
{
  "method": "POST",
  "url": "https://api.openai.com/v1/chat/completions",
  "headers": {
    "Authorization": "Bearer {{ $env.OPENAI_API_KEY }}",
    "content-type": "application/json"
  },
  "body": {
    "model": "gpt-4-turbo-preview",
    "messages": [{
      "role": "system",
      "content": "Tu es un assistant d'écriture littéraire expert."
    }, {
      "role": "user",
      "content": "Réécris ce texte en le rendant {{ $json.direction }}. Conserve l'essence mais modifie le ton et le style.\n\nTexte original: {{ $json.text }}"
    }],
    "temperature": 0.8
  }
}
```

#### Nœud 3: Code Node
```javascript
const response = $input.item.json.choices[0].message.content;

return {
  json: {
    executionId: $json.executionId,
    workflowId: 'alternative-generation',
    status: 'completed',
    input: {
      text: $node["Webhook"].json.body.text,
      direction: $node["Webhook"].json.body.direction
    },
    output: {
      original: $node["Webhook"].json.body.text,
      alternative: response,
      direction: $node["Webhook"].json.body.direction,
      timestamp: new Date().toISOString()
    }
  }
};
```

---

## Installation et Configuration

### Étape 1: Créer les Workflows dans N8N

1. Connectez-vous à votre instance N8N
2. Créez un nouveau workflow
3. Ajoutez les nœuds selon les structures ci-dessus
4. Configurez les credentials pour Claude/OpenAI
5. Activez le workflow

### Étape 2: Configurer le Backend

Mettez à jour votre fichier `.env` du backend :

```env
# N8N Configuration
N8N_BASE_URL=http://localhost:5678
N8N_WEBHOOK_URL=http://localhost:5678/webhook
N8N_API_KEY=your-n8n-api-key (optionnel)
```

### Étape 3: Tester les Workflows

Utilisez curl pour tester :

```bash
# Test Style Evaluation
curl -X POST http://localhost:5678/webhook/style-evaluation \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Le soleil se couchait doucement sur l'horizon.",
    "executionId": "test-123"
  }'

# Test Alternative Generation
curl -X POST http://localhost:5678/webhook/alternative-generation \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Le soleil se couchait doucement sur l'horizon.",
    "direction": "plus dramatique",
    "executionId": "test-456"
  }'
```

---

## Workflows Avancés (Futurs)

### 3. Grammar Check (Vérification Grammaticale)

- Utilise LanguageTool API
- Détecte fautes d'orthographe et grammaire
- Propose corrections

### 4. Character Consistency (Cohérence des Personnages)

- Analyse mentions de personnages
- Vérifie cohérence traits/actions
- Alerte en cas d'incohérence

### 5. Timeline Validator (Validation Timeline)

- Vérifie chronologie des événements
- Détecte incohérences temporelles
- Suggère réorganisation

---

## Bonnes Pratiques

1. **Gestion des Erreurs**: Ajoutez des nœuds Error Trigger pour gérer les échecs
2. **Logging**: Utilisez des nœuds HTTP Request pour logger vers votre backend
3. **Timeouts**: Configurez des timeouts appropriés (60s recommandé)
4. **Rate Limiting**: Respectez les limites des APIs (Claude, OpenAI)
5. **Coûts**: Surveillez l'utilisation des APIs pour contrôler les coûts

---

## Troubleshooting

**Workflow ne se déclenche pas:**
- Vérifiez que le workflow est activé dans N8N
- Vérifiez l'URL du webhook dans la configuration backend
- Consultez les logs N8N

**Erreur d'API:**
- Vérifiez que les API keys sont valides
- Vérifiez les quotas et limites
- Consultez les logs de l'API

**Timeout:**
- Augmentez le timeout dans le backend
- Optimisez les prompts pour réponses plus rapides
- Vérifiez la connexion réseau

---

## Ressources

- [Documentation N8N](https://docs.n8n.io/)
- [API Claude](https://docs.anthropic.com/)
- [API OpenAI](https://platform.openai.com/docs/)
