#!/usr/bin/env bash
set -euo pipefail

PORT=${PORT:-8000}
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "Serving portfolio at http://localhost:${PORT}" >&2
python -m http.server "${PORT}"
