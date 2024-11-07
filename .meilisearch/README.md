# Meilisearch

## Commands to generate keys

```sh
curl https://meilisearch.diogotc.com/keys \
  -H "Authorization: Bearer $MEILI_TOKEN" \
  --json '{"actions": ["search"], "indexes": ["resumos-leic"], "expiresAt": null, "description": "Search key for Resumos LEIC"}'
```

```sh
curl https://meilisearch.diogotc.com/keys \
  -H "Authorization: Bearer $MEILI_TOKEN" \
  --json '{"actions": ["documents.*", "indexes.*", "settings.*"], "indexes": ["resumos-leic"], "expiresAt": null, "description": "Scraping key for Resumos LEIC"}'
```
