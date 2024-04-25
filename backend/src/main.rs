use actix_web::{App, HttpServer};
use postgres::{Client, NoTls};

mod routes;
mod db;
mod model;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Connect to the PostgreSQL database
    let mut client = Client::connect("postgresql://postgres:qwertyasdfgh@localhost/", NoTls)?;
    let client = client.transaction()?;

    // Start the Actix Web server
    HttpServer::new(move || {
        App::new()
            .data(client.clone())
            .service(routes::create_record)
            .service(routes::get_records)
            .service(routes::update_record)
            .service(routes::delete_record)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
