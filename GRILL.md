# GRILL ME — AI Document Q&A App

## Idea
<<<<<<< HEAD
Build a Smart AI app using JSON data and deploy on Vercel.
=======
Build a document Q&A AI app using JSON data and deploy on Vercel.
>>>>>>> 9d1657c (Updated app features)

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
<<<<<<< HEAD
- Keep MVP small (single-user only as required)
=======
- Keep MVP small (single-user only as required)
>>>>>>> 9d1657c (Updated app features)
