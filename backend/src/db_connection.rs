use postgres::{Client, Error};

pub fn run() -> Result<(), Error> {
    // Connect to the PostgreSQL database
    let mut client = Client::connect("postgresql://postgres:qwertyasdfgh@localhost/", postgres::NoTls)?; 
      
    Ok(())
}
