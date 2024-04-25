use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Record {
    pub id: i64,
    pub name: String,
    pub phone_number: String,
    pub address: String,
}
