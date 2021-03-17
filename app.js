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
      title: 'content?',
    }
    html = html.replace(`<title>home</title>`, `<title>${meta.title}</title>`)
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
