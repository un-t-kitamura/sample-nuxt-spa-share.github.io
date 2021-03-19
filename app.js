const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {
  // Nuxt インスタンスを取得
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  app.get('/content/*', async (req, res) => {
    const content = await nuxt.renderRoute('/', req)
    let html = content.html

    // const meta = await axios.get('/someting-meta')
    const meta = {
      title: 'コンテンツ（これはサーバで変えています）',
      url:
        'https://lh3.google.com/u/0/d/1ehwZbr2E3x5N3yMmtSPfumAUrhtrSei9=w2770-h1752-iv1',
    }
    html = html.replace(
      `<meta data-n-head="1" data-hid="og:title" property="og:title" content="ホーム">`,
      `<meta data-n-head="1" data-hid="og:title" property="og:title" content="${meta.title}">`
    )
    // html = html.replace(`<meta data-n-head="1" data-hid="og:image" property="og:image" content="image">`,`<meta data-n-head="1" data-hid="og:image" property="og:image" content="${meta.url}">`)
    res.send(html)
  })

  // すべてのルートを Nuxt.js でレンダリング
  app.use('/*', nuxt.render)

  // ホットリローディングつきの開発モードの場合のみビルド
  if (isDev) {
    build(nuxt)
  }
  // サーバーをリッスン
  app.listen(port, '0.0.0.0')
  // eslint-disable-next-line no-console
  console.log('Server listening on `localhost:' + port + '`.')
}

start()
