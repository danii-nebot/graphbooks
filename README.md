## graphbooks

This is at its core a personal learning project to (re)learn Angular 1.x and
get acquainted with the new and fancy [ES6 syntax](https://github.com/lukehoban/es6features).
As such, some technological decisions have been made attending to indefensible criteria such as
"ooh I really want to play with this new tech X".

### the app:

A visualization tool which graphs scifi and fantasy book ratings by author or series, inspired by http://graphtv.kevinformatics.com/

It will use the [Goodreads API](https://www.goodreads.com/api/documentation) for user ratings.

Boilerplate code based on https://github.com/GoThinkster/angular-es6-starter’s course code

---

### TODOs:

- Serverside:

  - Organize files, data, review git ignored files
  - Deploy to Heroku
    - update local link urls (fav icon)
  - bootstrap initial data (getList from Service)
  - images in AWS?
  - ~~Rethink GraphQL data schema~~
  - ~~Fetch/store data from Goodreads API~~

- Header/ footer:

  - what stuff goes in the footer? Disclaimer, trademark, links
  - style header! clean messy layout CSS
  - ~~Navigation links on footer/header~~
- Style:

  - Fonts: All text in page
  - http://realfavicongenerator.net/ do we need rest of fancy favicons?
  - flex boxes in Graph page, screw bootstrap cols
  - ~~create&add favicon!~~
  - ~~Fonts: Logo/app name~~
  - ~~search component~~
  - ~~search button~~

- Graph Page:
  - Format numbers
  - social links urls
  - Social share text http://www.sharelinkgenerator.com/
  - loader for app
  - ~~loading spinner for book images~~
  - ~~Make deeplinking work with authors too~~
  - ~~Add ability to graph authors~~
  - ~~Graph page: Series image~~
  - ~~book images in graph~~
  - ~~Share this page on: TWITTER FB~~
  - ~~Share urls~~

- About Page:
  - ~~Rewrite~~
  - ~~Add list of technologies used~~

- Landing Page:
  - Add links to series, authors search examples
