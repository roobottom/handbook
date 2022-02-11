class Default {

  render(data) {
    let pageHtml = data.content
    let inferredTitle = pageHtml.match(/<h1>(.+?)<\/h1>/) === null ? 'no title found' : pageHtml.match(/<h1>(.+?)<\/h1>/)[1]
    // let mdLinksRegexp = /<a href=['"](.+?).md['"]>/g
    // pageHtml.match(mdLinksRegexp, function(link) {
    //   return "whi"
    // })


    return `
<!DOCTYPE html>

<html lang="en/GB">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>${inferredTitle} - ${data.defaults.siteName}</title>
  </head>

  <body>
    <div class="side-bar">

    </div>
    <div class="main" id="top">
      ${data.content}
    </div>
  </body>
</html>
`
  }
}

module.exports = Default