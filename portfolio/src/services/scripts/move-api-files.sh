rm index.ts runtime.ts
rm -r apis/ models/
mv openapi-generator-out/typescript-fetch/index.ts .
mv openapi-generator-out/typescript-fetch/runtime.ts .

mv openapi-generator-out/typescript-fetch/models/ .
mv openapi-generator-out/typescript-fetch/apis/ .

rm -r openapi-generator-out/
