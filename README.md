# prototyping-template

Basic project template to get up and running fast and hack some stuff together

## Setup

Go to new project directory then run

    git clone git@github.com:indiefolk/prototyping-template-node.git . && rm -rf .git

    npm install

    bower install

    grunt wiredep

## Usage

To run server

    grunt server

Adding libraries is made easier by using bower and grunt-wiredep:

    bower install jquery --save && grunt wiredep

will install jQuery then add a script tag for it to the index.html page. Boom.
