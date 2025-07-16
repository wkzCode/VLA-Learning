const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 'my-paper-notes.html' 是你的HTML文件名
  const htmlPath = path.resolve(__dirname, 'RT-2.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: 'My-RT2-Notes.pdf', // 输出的PDF文件名
    format: 'A4',
    printBackground: true, // 必须为 true 才能打印背景色
    margin: { // 控制页边距
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();