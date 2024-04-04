use postgres::{Client, Error};

fn main() {
    if let Err(e) = run() {
        eprintln!("Error: {}", e);
    }
}

fn run() -> Result<(), Error> {
    // Connect to the PostgreSQL database
    let mut client = Client::connect("postgresql://postgres:qwertyasdfgh@localhost/library", postgres::NoTls)?;

    // Define SQL statements to create tables
    let create_author_table = r#"
        CREATE TABLE IF NOT EXISTS author (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            country VARCHAR(255) NOT NULL
        )
    "#;

    let create_book_table = r#"
        CREATE TABLE IF NOT EXISTS book (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author_id INTEGER NOT NULL REFERENCES author(id)
        )
    "#;

    // Execute SQL statements to create tables
    client.batch_execute(create_author_table)?;
    client.batch_execute(create_book_table)?;

    println!("Tables created successfully");
    
    Ok(())
}
