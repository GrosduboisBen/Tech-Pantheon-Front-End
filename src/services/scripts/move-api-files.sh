rm index.ts runtime.ts ./tsconfig.json
rm -r apis/ models/
mv openapi-generator-out/typescript-rxjs/index.ts .
mv openapi-generator-out/typescript-rxjs/runtime.ts .
mv openapi-generator-out/typescript-rxjs/tsconfig.json .


mv openapi-generator-out/typescript-rxjs/models/ .
mv openapi-generator-out/typescript-rxjs/apis/ .

rm -r openapi-generator-out/
