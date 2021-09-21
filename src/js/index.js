import "../css/style.css"
import json from "../assets/demo.json"
import logo from "../assets/illuminati-symbol-512.png"
import xml from "../assets/demo.xml"

console.log(json)
console.log(require("../assets/demo.json"))

console.log(logo)

console.log(xml)
console.log(require("@/assets/demo.xml"))

import Button from "@components/Button.js"
import Label from "@components/Label.js"

console.log(new Button().toString())
console.log(new Label().toString())

const btn = require("@components/Button.js")
console.log(btn)

const message = Buffer.from("Hello, World", "utf-8").toString("base64")
console.log(message)