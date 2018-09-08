create table blog
(
  id int not null,
  constraint blog_id_uindex
  unique (id)
);

alter table blog
  add primary key (id);

create table recipe
(
  id int not null,
  constraint recipe_id_uindex
  unique (id)
);

alter table recipe
  add primary key (id);

create table review
(
  id int not null,
  constraint reviews_id_uindex
  unique (id)
);

alter table review
  add primary key (id);

