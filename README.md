# Joy
Source code for the website 

This website is developed for the project Joy.

## Architecture
This website is developed using [Gatsby](https://www.gatsbyjs.org/) in sync with [Netlify](https://www.netlify.com) and [Netlify CMS](https://www.netlifycms.org/).
This website uses Netlify CMS as a headless CMS, to let the final customer being able to modify the copy and content of the website, without any input from the developer. All the content types available are configured in `static/admin/config.yml`. The content is managed through Netlify CMS, which automatically pushes the code to GitHub on each published, which in turn generate a new build process on Netlify.

## Contribution

## 💫 Deploy [![Netlify Status](https://api.netlify.com/api/v1/badges/111f8a0a-92dc-4e53-b72d-066b9bcc9de3/deploy-status)](https://app.netlify.com/sites/sharp-kepler-744b66/deploys)
This website is deployed through Netlify, on each push or merge into master. Netlify CMS also deploys all the text changes to the `content` folder.