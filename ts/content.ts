import * as fs from "fs";
import * as http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'><head><title>Házi Feladat</title></head>");
        res.write("<body><pre style='font-family: monospace;'>");
        res.write("<form style='font-family: Courier; font-size:16px; background-color: LightGray;'>");

        const query: ParsedUrlQuery = url.parse(req.url, true).query;

        var m: string = query.m === undefined ? "0" : (query.m as string);
        var a: number = query.a === undefined ? 10 : parseInt((query.a as string), 10);
        var b: number = query.b === undefined ? 15 : parseInt((query.b as string), 10);
        let a1: number = query.a1 === undefined ? 10 : parseInt((query.a1 as string), 10);
        let b1: number = query.b1 === undefined ? 15 : parseInt((query.b1 as string), 10);        
        var n: number = query.n === undefined ? 5 : parseInt((query.n as string), 10);
        var faktor: number = query.f === undefined ? 1 : parseInt((query.f as string), 10);

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

        // let a1: number = 10;
        // let b1: number = 25;
        res.write("<h3>Legnagyobb közös osztó (LNKO) meghatározása:</h3>");
        res.write("<p>Az 'a' érték megadása: " +
            " <input type='number' name='a' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue;'" +
            `value='${a}' onChange = 'this.form.submit();'><br>`);

        res.write("<p>Az 'b' érték megadása: " +
            " <input type='number' name='b' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue; '" +
            `value='${b}' onChange = 'this.form.submit();'><br><br>`);

        // res.write("<button type = 'button' name = 'Gomb'>Gomb</button><br><br>");

        while (a !== b) {

            if (a > b) a = a - b;
            else b = b - a;

        }

        res.write(`A két szám LNKO-ja: ${a}`);

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

        // let a2: number = 12;
        // let b2: number = 25;
         let mEx: number = parseInt(m, 10);
         

        res.write("<p>Az 'a' érték megadása: " +
            " <input type='number' name='a' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue;'" +
            `value='${a1}' onChange = 'this.form.submit();'><br>`);

        res.write("<p>Az 'b' érték megadása: " +
            " <input type='number' name='b' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue; '" +
            `value='${b1}' onChange = 'this.form.submit();'><br><br>`);

        do {
            mEx = a1 % b1;
            a1 = b1;
            b1 = mEx;

        } while (mEx !== 0);

        res.write(`A két szám LNKO-ja: ${a1}`);

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

        // const n: number = 5;
        // let faktor: number = 1;
        res.write("<p>Faktoriális meghatározása: " +
            " <input type='number' name='n' style='font-family:Courier;" +
            "font - size: inherit; background:Lightblue;'" +
            `value='${n}' onChange = 'this.form.submit();'><br><br>`);

        res.write(n + "! = 1");

        for (let i = 2; i <= n; i++) {
            res.write(" * " + i);
            faktor = faktor * i;
        }

        res.write(" = " + faktor);

        res.end("</form></body></html>");
        
    }
}

