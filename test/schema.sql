create table blog
(
  id        int          not null,
  title     varchar(100) not null,
  post_date datetime     null,
  source    varchar(256) null,
  thumbnail varchar(256) null,
  constraint blog_id_uindex
  unique (id)
);

alter table blog
  add primary key (id);

create table recipe
(
  id        int          not null,
  title     varchar(100) not null,
  post_date datetime     null,
  source    varchar(256) null,
  thumbnail varchar(256) null,
  constraint recipe_id_uindex
  unique (id)
);

alter table recipe
  add primary key (id);

create table review
(
  id           int          not null,
  title        varchar(100) not null,
  post_date    datetime     null,
  x_coordinate double       null,
  y_coordinate double       null,
  source       varchar(256) null,
  thumbnail    varchar(256) null,
  constraint reviews_id_uindex
  unique (id)
);

alter table review
  add primary key (id);

