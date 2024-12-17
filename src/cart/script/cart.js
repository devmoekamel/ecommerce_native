import { allProduct } from "../../home/script/productApi.js";
import { head_table } from "../components/table_head.js";
import { price_compoment } from "../components/total_price_component.js";

// let
document.body.innerHTML += head_table();

document.body.innerHTML += price_compoment();

