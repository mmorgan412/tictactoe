#!/bin/bash

#EMAIL="mel@test.com" PASSWORD="test" PASSWORD="test" sh scripts/sign-up-json.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com/}"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
