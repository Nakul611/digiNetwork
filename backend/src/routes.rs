use actix_web::{web, HttpResponse, Responder};
use serde_json::json;
use crate::model::Record;
use crate::db;

// Route handler to create a new record
pub async fn create_record(record: web::Json<Record>) -> impl Responder {
    match db::create_record(record.into_inner(), None).await {
        Ok(_) => HttpResponse::Ok().body("Record created successfully"),
        Err(_) => HttpResponse::InternalServerError().body("Failed to create record"),
    }
}


// Route handler to read all records
pub async fn read_records() -> impl Responder {
    let result = db::read_records();
    match result {
        Ok(records) => {
            let response_body = json!({
                "records": records
            });
            HttpResponse::Ok().json(response_body)
        },
        Err(_) => HttpResponse::InternalServerError().body("Failed to read records"),
    }
}

// Route handler to update a record by ID
pub async fn update_record(path: web::Path<(i64,)>, record: web::Json<Record>) -> impl Responder {
    let record_id = path.into_inner().0;
    let result = db::update_record(record_id, record.into_inner());
    match result {
        Ok(_) => HttpResponse::Ok().body("Record updated successfully"),
        Err(_) => HttpResponse::InternalServerError().body("Failed to update record"),
    }
}

// Route handler to delete a record by ID
pub async fn delete_record(path: web::Path<(i64,)>) -> impl Responder {
    let record_id = path.into_inner().0;
    let result = db::delete_record(record_id);
    match result {
        Ok(_) => HttpResponse::Ok().body("Record deleted successfully"),
        Err(_) => HttpResponse::InternalServerError().body("Failed to delete record"),
    }
}
