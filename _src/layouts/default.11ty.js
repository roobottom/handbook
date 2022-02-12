const path = require('path')

class Default {

  render(data) {
    var pageHtml = data.content
    var inferredTitle = pageHtml.match(/<h1>(.+?)<\/h1>/) === null ? 'no title found' : pageHtml.match(/<h1>(.+?)<\/h1>/)[1]
    
    //Process all the internal links and ensure they go where they’re supposed to
    var internalLinksRegexp = /<a href=['"](.+?).md['"]>/g
    var outputHtml = pageHtml.replace(internalLinksRegexp, function (match, p1) {
      let currentSection = path.parse(data.page.filePathStem).dir
      let targetSection = path.parse(match).dir
      return `${targetSection}, ${currentSection}: <a href="${p1}">`
    })


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
      <p>filePathStem: ${JSON.stringify(path.parse(data.page.filePathStem))}</p>
      <p>url: ${data.page.url}</p>
      ${outputHtml}
    </div>
  </body>
</html>
`
  }
}

module.exports = Default