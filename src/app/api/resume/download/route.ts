import { formatTailwindHTML } from "@/lib/utils";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { html, structure } = body;

    if (!html || !structure) {
      return Response.json(
        { message: "Parâmetros inválidos" },
        {
          status: 400,
        },
      );
    }

    let browser = null;

    if (process.env.NODE_ENV === "development") {
      browser = await puppeteer.launch();
    } else {
      browser = await puppeteerCore.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
      });
    }

    const page = await browser.newPage();

    await page.setContent(formatTailwindHTML(html, structure));

    const bodyHeight = await page.evaluate(() => {
      return document.body.scrollHeight + 20;
    });

    const pdf = await page.pdf({
      width: "210mm",
      height: `${bodyHeight}px`,
      printBackground: true,
    });
    const pdfBuffer = new ArrayBuffer(pdf.byteLength);
    new Uint8Array(pdfBuffer).set(pdf);

    browser.close();

    return new Response(pdfBuffer, {
      headers: { "Content-type": "application/pdf" },
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Ocorreu um erro inesperado", error },
      {
        status: 500,
      },
    );
  }
};
