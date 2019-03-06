"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        // res.write("<h1 style='color: red;'>Hello Node.js!</h1>");
        // res.write("<h1 style='color: green;'>Hello TypeScript!</h1>");
        // res.write("<h1 style='color: blue;'>Hello Heroku!</h1>");
        // res.write("<h1 style='color: black;'>Hello Jedlik!</h1>");
        // res.write("<b>Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:</b><br>");
        // res.write("<a href='https://github.com/nitslaszlo/JedlikTsTemplate' target='_blank'>" +
        //     "https://github.com/nitslaszlo/JedlikTsTemplate</a><br>");
        res.write("<h3> A számok 1 - 10-ig Do - While ciklussal</h3><br> ");
        let i = 1;
        do {
            res.write(i + `,`);
            i++;
        } while (i <= 10);
        res.write("<h3> A számok 1 - 10-ig While ciklussal</h3><br> ");
        var f = 1;
        while (f <= 10) {
            res.write(f + `,`);
            f++;
        }
        res.write("<h3> A számok 1 - 10-ig For ciklussal</h3><br> ");
        for (let g = 1; g <= 10; g++) {
            res.write(g + `,`);
        }
        res.write("<br><br>");
        // tslint:disable-next-line: max-line-length
        // tslint:disable-next-line: align
        res.write("<img height = 100 src = https://cdn.newsapi.com.au/image/v1/baa78e55168b70c08147f44f0d66cd0e?width=1024></img>");
        res.write("<br><br>");
        res.write("<img height = 100 src = ./a></img>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map