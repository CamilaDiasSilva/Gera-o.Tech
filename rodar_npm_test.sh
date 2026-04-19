#!/bin/bash

# Executa o comando npm test no diretório do projeto.
# Deve ser executado a partir da raiz do projeto.

set -euo pipefail
IFS=$'\n\t'

if ! command -v npm >/dev/null 2>&1; then
  echo "Erro: npm não está instalado ou não está no PATH." >&2
  exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"

cd "$PROJECT_ROOT"

echo "Executando npm test em $PROJECT_ROOT"
npm test
