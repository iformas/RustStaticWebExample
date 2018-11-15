extern crate iron;
extern crate handlebars as hbs;
extern crate handlebars_iron as hbi;
extern crate hyper;
extern crate mount;
extern crate router;
extern crate staticfile;

use iron::{prelude::*,IronResult, status, Set};
use hbs::Handlebars;
use hbi::{HandlebarsEngine};
use mount::Mount;
use staticfile::Static;
use std::path::Path;
use std::sync::Arc;

fn main() {

    let views_ext = ".hbs";
    let views_path = "./src/views";
    let hbs = Handlebars::new();
    let mut hbse = HandlebarsEngine::from(hbs);
 
    //se registra el directorio de vistas con las extensiones admitidas
    hbse.add(Box::new(hbi::DirectorySource::new(views_path, views_ext)));
    if let Err(r) = hbse.reload() {
        panic!("{:?}", r.cause);
    }
    let mut home_chain = Chain::new(home_handler);

    let hbse_ref = Arc::new(hbse);  
    home_chain.link_after(hbse_ref);

    let mut router = router::Router::new();
    router.get("/", home_chain, "get_home");

    let mut assets_mount = Mount::new();
    assets_mount
        .mount("/", router)
        .mount("/assets/", Static::new(Path::new("src/assets")));

    let port = 3000;
    let bind_addr = format!("localhost:{}", port);
    let _server_guard = Iron::new(assets_mount).http(bind_addr.as_str()).unwrap();


    println!("Running on port {}.", port)}

fn home_handler(_: &mut Request) -> IronResult<Response> {

    let mut resp = Response::new();
    resp.set_mut(hbi::Template::new("home", "")).set_mut(status::Ok);
    Ok(resp)
}