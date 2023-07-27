export default (req, res) => {
  res.set({ 'Content-Type': 'text/html' }).end(`
    <html>
      <body>
        Hello
      </body>
    </html>
  `);
}