use postgres::{ Client, NoTls, Error };
 
fn main() -> Result<(), Error> {
    let mut client = Client::connect("postgres://postgres:qwertyasdfgh@localhost:5432/library", NoTls)?;
    client.batch_execute("
        CREATE TABLE IF NOT EXISTS author(
            id      SERIAL PRIMARY KEY,
            name    VARCHAR(255) NOT NULL,
            country VARCHAR(255) NOT NULL
        )
    ")?;

    client.batch_execute("
        CREATE TABLE IF NOT EXISTS book(
            id          SERIAL PRIMARY KEY,
            title       VARCHAR(255) NOT NULL,
            author_id   INTEGER NOT NULL REFERENCES author 
        )
    ")?;

    Ok(())
}