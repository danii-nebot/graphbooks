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
  - Fix gulp dev environment -> switch to webpack
  - Clean package.json
  - Organize files, data, review git ignored files
  - bootstrap initial data (getList from Service)
  - Universal Server side rendering?
  - images in AWS?
  - Change deployment to NOW?

- Config:
  - loader for app
  - Fix api path in const `${window.location.protocol}//${window.location.host}` is this ok?

- Search form:
  - Fix double return to search

- Header/ footer:
  - what stuff goes in the footer? Disclaimer, trademark, links
  - style header! clean messy layout CSS

- Style:
  - Fonts: All text in page
  - http://realfavicongenerator.net/ do we need rest of fancy favicons?
  - flex boxes in Graph page, screw bootstrap cols

- Graph Page:
  - Review series picture (currently 1st book in series)
  - social links urls
  - Social share text http://www.sharelinkgenerator.com/


