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
        // Console.WriteLine("Legnagyobb közös osztó (LNKO) meghatározása:");
        // Console.Write("a=");
        // ulong a = ulong.Parse(Console.ReadLine());
        // Console.Write("b=");
        // ulong b = ulong.Parse(Console.ReadLine());
        // while (a != b)
        // {
        //     if (a > b) a = a - b;
        //     else b = b - a;
        // }
        //     Console.WriteLine("A két szám LNKO-ja: {0}", a);
        //     Console.ReadKey();
        let a1 = 10;
        let b1 = 25;
        res.write("<h3>Legnagyobb közös osztó (LNKO) meghatározása:</h3>");
        res.write("<p>Az 'a' érték megadása: " +
            " <input type='number' name='sorszam1' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue;'" +
            `value='${a1}'><br>`);
        res.write("<p>Az 'b' érték megadása: " +
            " <input type='number' name='sorszam2' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue; '" +
            `value='${b1}'><br><br>`);
        res.write("<button type = 'button' name = 'Gomb'>Gomb</button><br><br>");
        while (a1 !== b1) {
            if (a1 > b1)
                a1 = a1 - b1;
            else
                b1 = b1 - a1;
        }
        res.write(`A két szám LNKO-ja: ${a1}`);
        res.write("<br><br><br>");
        // Console.WriteLine("Legnagyobb közös osztó (LNKO) meghatározása:");
        // Console.Write("a=");
        // ulong a = ulong.Parse(Console.ReadLine());
        // Console.Write("b=");
        // ulong b = ulong.Parse(Console.ReadLine());
        // ulong m; //maradék
        // do
        // {
        // m = a % b; //maradékos osztás
        // a = b; //előző maradék
        // b = m; //új maradék
        // } while (m != 0);
        // Console.WriteLine("A két szám LNKO-ja: {0}", a);
        // Console.ReadKey();
        res.write("<h3>Legnagyobb közös osztó (LNKO) meghatározása:</h3>");
        let a2 = 12;
        let b2 = 25;
        let m;
        res.write("<p>Az 'a' érték megadása: " +
            " <input type='number' name='sorszam' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue;'" +
            `value='${a2}'><br>`);
        res.write("<p>Az 'b' érték megadása: " +
            " <input type='number' name='sorszam' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue; '" +
            `value='${b2}'><br><br>`);
        do {
            m = a2 % b2;
            a2 = b2;
            b2 = m;
        } while (m !== 0);
        res.write(`A két szám LNKO-ja: ${a2}`);
        res.write("<br><br><br>");
        // Console.WriteLine("Faktoriális meghatározása");
        // Console.Write("n=");
        // byte n = byte.Parse(Console.ReadLine());
        // Console.Write("{0}! = 1",n);
        // ulong faktor = 1;
        // for (byte i = 2; i <= n; i++)
        // {
        // Console.Write(" * {0}", i);
        // faktor = faktor * i;
        // }
        // Console.WriteLine(" = {0}", faktor);
        // Console.ReadKey();
        res.write("<h3>Faktoriális meghatározása:</h3>");
        const n = 5;
        let faktor = 1;
        res.write("<p>Faktoriális meghatározása: " +
            " <input type='number' name='sorszam' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue;'" +
            `value='${n}'><br><br>`);
        res.write(n + "! = 1");
        for (let i = 2; i <= n; i++) {
            res.write(" * " + i);
            faktor = faktor * i;
        }
        res.write(" = " + faktor);
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map