# GRILL ME — AI Document Q&A App

## Idea
Build a Smart AI app using JSON data and deploy on Vercel.

## Criticism / Problems

1. JSON scaling issue
   - Large documents will become slow in memory

2. No search layer
   - Direct JSON scanning is inefficient

3. No caching strategy
   - Every query reprocesses full dataset

4. No embeddings
   - AI won't understand context deeply without vector search

## Improvements

- Use chunking for documents
- Add simple vector-like search (even cosine similarity later)
- Cache processed JSON in memory
- Keep MVP small (single-user only as required)
