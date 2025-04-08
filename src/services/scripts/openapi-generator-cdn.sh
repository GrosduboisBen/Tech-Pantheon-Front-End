docker run --rm \
    -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/cdn-api.yaml \
    -g typescript-rxjs \
    -o /local/cdn-services \
    --additional-properties=useSingleRequestParameter=false,supportsES6=true,withInterfaces=true
