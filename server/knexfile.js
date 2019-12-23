// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/basebook'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

/* 
Tables

User
id SERIAL PRIMARY KEY
name text
email text
google_id text
banned boolean
role_id unsigned_int FOREIGN KEY

Role
id SERIAL PRIMARY KEY
name text

Comment
id SERIAL PRIMARY KEY
card_id unsigned_int FOREIGN KEY
user_id unsigned_int FOREIGN KEY
description text
created_at datetime
updated_at datetime

Comment_Reply
id SERIAL PRIMARY KEY
comment_id FOREIGN KEY unsigned_int
user_id FOREIGN KEY unsigned_int
description text
created_at datetime
updated_at datetime

Message
id SERIAL PRIMARY KEY
sender_id unsigned_int FOREIGN KEY
reciever_id FOREIGN KEY unsigned_int
contents text

Batters
// need to add id to batters table

Pitchers
// add id to pitchers table

*/