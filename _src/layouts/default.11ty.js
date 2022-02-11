class Default {

  data() {
    console.log(this)
    return {
      title: function (data) {
        let inferredTitle = data.content.match(/<h1>(.+?)<\/h1>/)[1]
        return `${inferredTitle} - ${data.defaults.siteName}`
      }
    }
  }

  render(data) {
    console.log(data)
    return `
<!DOCTYPE html>

<html lang="en/GB">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>${data.title()}</title>
  </head>

  <body>
    ${data.content}
  </body>
</html>
`
  }
}

module.exports = Default