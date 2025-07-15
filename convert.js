const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    // 在这里添加 executablePath
    executablePath: 'C://Users//Congratulations//AppData//Local//Google//Chrome//Application//chrome.exe' //  <-- 注意! 使用双反斜杠'\\'
  });
  const page = await browser.newPage();
  
  const htmlPath = path.resolve(__dirname, 'RT-2.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: 'My-RT2-Notes.pdf', 
    format: 'A4',
    printBackground: true,
    margin: { 
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();