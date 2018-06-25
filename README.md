# Git Merge Disaster Trilogy

## The project requirements

We need to create a Jaws Movie Site that includes the following:

* HTML structure
* CSS styles
* Cool Intro animation
* List of all Jaws movies

## The team

3 people are working together as a team. They start by assigning these tasks:

* Jim: HTML + CSS
* Alana: Intro Animation
* Roberta: Movie API


## The process

### JAWS 1: everybody makes an index.html

* Jim: starts a branch called `jim`
* Alana: starts a branch called `alana`
* Roberta: starts a branch called `roberta`

The team attempts to merge these branches into a development branch, `jaws-1`

### JAWS 2: feature branches

* Jim: starts a branch called `bootstrap-layout`
* Alana: starts a branch called `intro-animation-snippet`
* Roberta: starts a branch called `movies-api-client`

The team attempts to merge these branches into a development branch, `jaws-2`

### JAWS 3: improvements

The team realizes that it needs to make improvements:

* Add a second column to the layout with some links
* Add rating to the movie list

So the team does:

* Jim: checks out `bootstrap-layout` and makes changes
* Roberta: checks out `movies-api-client` and makes changes

The team attempts to merge these branches into a development branch, `jaws-3`
