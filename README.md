# arche-react-static-website
Quickstart project for a static website using Arche and React.js.

## Project Structure

```
arche-static-website/
    lib/
        README.md
    public/
        react/
            ClickExample.js
        global.js
        index.css
        index.html
    config.js
    serve-local.sh
    update-pages
```

### [public/react/](/public/react)

Put [React](https://react.dev/) components in this directory.

### [public/global.js](/public/global.js)

JavaScript in this file is run at the top of all HTML `.html` files in [config.publicDir](#configpublicdir). Define global variables and functions in this file, e.g. `window.myVariable = 1`.

### [public/index.css](/public/index.css)

The default CSS file.

### [public/index.html](/public/index.html)

This page is served to requests for the home page `/`.

### [config.js](/config.js)

Stores data about the site's domain (`domain`), dependencies (`scripts` and `stylesheets`), public directory (`publicDir`), and pages (`pages`).

#### config.domain

The domain name of the website, e.g. `example.com`.

#### config.publicDir

The name of the directory that stores the website's HTML, JavaScript, and CSS files.

#### config.pages

A list of objects that specify the website's pages. Each object has four properties: `title`, `description`, `url`, and `filepath`.

  * `title` - the page's title, this will be used for the page's [metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  * `description` - the page's description, this will be used for the page's metadata
  * `url` - the page's relative url, this will be used with [config.domain](#configdomain) for the page's metadata
  * `filepath` - the location of the page within [config.publicDir](#configpublicdir)
  * `scripts` - A list of [script tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) that will be loaded by the page.
  * `stylesheets` - A list of stylesheet [link tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) that will be loaded by the page.

### [serve-local.sh](/serve-local.sh)

Starts the local static web server.

### [update-pages](/update-pages)

Creates or updates the HTML pages in the public directory `public/` using the configuration file [config.js](#configjs).

### [deploy-aws-s3](/deploy-aws-s3)

Uploads all files in [config.publicDir](#configpublicdir) to an Amazon S3 Bucket for [config.domain](#configdomain). See [deployment](#deployment).

### [package.json](/package.json)

Stores metadata about this project including `name`, `version`, `dependencies`, and `scripts`. Read more about [package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json).

### [README.md](/README.md)

You are reading this file.

### [lib/](/lib)

Make changes to the scaffolding of this project (advanced). Start hacking [here](/lib/README.md).

## Run it locally

1. Fork the repo

![github-fork-button](https://rubico.land/assets/github-fork-button.jpg)

2. Clone your forked version

```sh
# ssh
git clone git@github.com:my-github-user/arche-static-website.git

# https
git clone https://github.com/my-github-user/arche-static-website.git
```

3. Install dependencies

```sh
npm i
```

4. Update pages leaving the inner HTML for the react-root empty (`<div id="react-root"></div>`)
```sh
./update-pages
```

4. Start the local web server

```sh
./serve-local.sh
```

5. Navigate to `http://localhost:4507/` in your browser

![arche-static-website-home-page](https://rubico.land/assets/vanilla-static-website-home-page.jpg)

## Build for production

1. Update all pages including the inner HTML of the react-root.
```sh
./update-pages --react-root-inner-html
```
