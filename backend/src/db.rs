use actix_web::{App, HttpServer};
use postgres::{Client, Error};

use crate::model::Record;

pub fn create_record(new_record: Record, client: Option<&Client>) -> Result<(), Error> {
    let client = client.expect("Expected a database client");
    let query = "INSERT INTO records (name, phone_number, address) VALUES ($1, $2, $3)";
    client.execute(query, &[&new_record.name, &new_record.phone_number, &new_record.address])?;
    Ok(())
}


pub fn read_records(client: &Client) -> Result<Vec<Record>, Error> {
    let query = "SELECT * FROM records";
    let rows = client.query(query, &[])?;
    let mut records = Vec::new();
    for row in rows {
        records.push(Record {
            id: row.get(0),
            name: row.get(1),
            phone_number: row.get(2),
            address: row.get(3),
        });
    }
    Ok(records)
}

pub fn update_record(record_id: i64, updated_record: Record, client: &Client) -> Result<(), Error> {
    let query = "UPDATE records SET name = $1, phone_number = $2, address = $3 WHERE id = $4";
    client.execute(query, &[&updated_record.name, &updated_record.phone_number, &updated_record.address, &record_id])?;
    Ok(())
}

pub fn delete_record(record_id: i64, client: &Client) -> Result<(), Error> {
    let query = "DELETE FROM records WHERE id = $1";
    client.execute(query, &[&record_id])?;
    Ok(())
}
