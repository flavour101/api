# api

The API for the Flavour 101 project

## Creating a new Flavour 101 resource

### Review

- Generate an ID
- Get the name of the establishment
- Get the Latitude of the establishment
- Get the Longitude of the establishment
- Create at least one [Image](#image) for the Carousel
- Create a Thumbnail [Image](#image)
- Create an [Article](#article)
- Figure out a post date
- Perform the following SQL Query

```sql
INSERT INTO review VALUES (...table_values);
```

### Blog

- Generate an ID
- Come up with a title for the Blog
- Create at least one [Image](#image) for the Carousel
- Create a Thumbnail [Image](#image)
- Create an [Article](#article)
- Figure out a post date
- Perform the following SQL Query

```sql
INSERT INTO review VALUES (...table_values);
```

### Recipe

- Generate an ID
- Get the name of the establishment
- Get the Latitude of the establishment
- Get the Longitude of the establishment
- Create at least one [Image](#image) for the Carousel
- Create a Thumbnail [Image](#image)
- Create an [Article](#article)
- Figure out a post date
- Perform the following SQL Query

```sql
INSERT INTO review VALUES (...table_values);
```

### Article

- Create a Markdown (`.md`) file
- Write the article in Markdown format (without a title)
- Save to public storage (AWS S3 Bucket, etc.)
- Get a URL to the Markdown file

### Image

- Take picture / Find image
- Save to public storage (AWS S3 Bucket, etc.)
- Get a URL to the image
- Ascertain what resource, and the type of resource, the image will be linked to
- Perform the following SQL Query

```sql
INSERT INTO image VALUES (...table_values);
```
