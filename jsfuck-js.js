const puppeteer = require("puppeteer");
module.exports = async (code) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("http://www.jsfuck.com/");
    const data = await page.evaluate(async () => {
        var code = code;
        document.getElementById('input').value = code
        document.getElementById('encode').click();
        return await document.getElementById('output').value
    })
    await browser.close();
    return {input: code, output: data}
}
