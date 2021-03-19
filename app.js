const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {
  // Nuxt インスタンスを取得
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  app.get('/content/:id', async (req, res) => {
    const content = await nuxt.renderRoute('/', req)
    let html = content.html
    const id = req.params.id

    // const meta = await axios.get('/someting-meta')
    const meta = {
      title: `コンテンツ:${id}（これはサーバで変えています）`,
      url: 'https://i.imgur.com/eIpnnv5.png',
      description: 'ディスクリプション（これはサーバで変えています）',
    }
    html = html.replace(`<title>home</title>`, `<title>${meta.title}</title>`)
    html = html.replace(
      `<meta data-n-head="1" data-hid="og:title" property="og:title" content="ホーム">`,
      `<meta data-n-head="1" data-hid="og:title" property="og:title" content="${meta.title}">`
    )
    html = html.replace(
      `<meta data-n-head="1" data-hid="og:description" property="og:description" content="ホームディスクリプション">`,
      `<meta data-n-head="1" data-hid="og:description" property="og:description" content="${meta.description}">`
    )
    html = html.replace(
      `<meta data-n-head="1" data-hid="og:image" property="og:image" content="https://i.imgur.com/gFNzydE.png">`,
      `<meta data-n-head="1" data-hid="og:image" property="og:image" content="${meta.url}">`
    )
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
