#!/bin/bash
# Double-click to start the dev server and open the site in your browser.
# Close the Terminal window when you are done to stop the server.

set -e
cd "$(dirname "$0")"

# Open the browser after a short delay — npm run dev needs ~2 s to boot.
(
  sleep 4
  open "http://localhost:3000"
) &

exec npm run dev
