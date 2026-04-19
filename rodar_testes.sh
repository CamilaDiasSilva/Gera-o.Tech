#!/bin/bash

# Script para executar os exemplos existentes de validação e API.
# Deve ser executado a partir da raiz do projeto.

set -euo pipefail
IFS=$'\n\t'

if ! command -v node >/dev/null 2>&1; then
  echo "Erro: Node.js não está instalado ou não está no PATH." >&2
  exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"

echo "Executando copilot_cpf.js..."
node "$PROJECT_ROOT/copilot_cpf.js"

echo
echo "Executando copilot_api.js..."
node "$PROJECT_ROOT/copilot_api.js"

echo
echo "Teste concluído."
