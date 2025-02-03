docker run --rm \
    -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/openapi.json \
    -g typescript-rxjs \
    -o /local/openapi-generator-out/typescript-rxjs	 \
    --additional-properties=useSingleRequestParameter=false,supportsES6=true,withInterfaces=true
