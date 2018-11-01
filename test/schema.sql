create table if not exists blog
(
  id        varchar(6)   not null,
  title     varchar(100) not null,
  post_date datetime     null,
  source    varchar(256) null,
  thumbnail varchar(256) null,
  constraint blog_id_uindex
  unique (id)
);

alter table blog
  add primary key (id);

create table if not exists image
(
  id             varchar(6)   not null,
  reference_id   varchar(6)   null,
  reference_type varchar(15)  null,
  source         varchar(256) null,
  post_date      datetime     null,
  constraint images_id_uindex
  unique (id)
);

alter table image
  add primary key (id);

create table if not exists recipe
(
  id        varchar(6)   not null,
  title     varchar(100) not null,
  post_date datetime     null,
  source    varchar(256) null,
  thumbnail varchar(256) null,
  constraint recipe_id_uindex
  unique (id)
);

alter table recipe
  add primary key (id);

create table if not exists review
(
  id        varchar(6)   not null,
  title     varchar(100) not null,
  post_date datetime     null,
  lat       double       null,
  lng       double       null,
  source    varchar(256) null,
  thumbnail varchar(256) null,
  constraint reviews_id_uindex
  unique (id)
);

alter table review
  add primary key (id);

