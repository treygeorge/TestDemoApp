# Project Setup

* Install Node, Bower, Gulp, Karma
* Run server:
    $ gulp start

# Tasks

## Javascript

Run the app and open in a browser to see the instructions and follow along.

* FizzBuzz
* Display a list of videos.
* Click on a video to view more details about the video.
* Search for specific video.

## CSS

* List of videos should look like "cards". (etsy.com, pinterest.com)
* Make it responsive.


# Other Ideas

* Coding a clock
  * https://coderwall.com/p/gnjg_w

* String.repeatify()
  * Implement this.
  * Determines that they know to String.prototype.repeatify = function() {}

* Define a log() that will act as a proxy to console.log().  I should be able to pass any number of args into the function and have them all show up in console.log()
	function log(){
		console.log.apply(console, arguments);
	};  //this tests .apply() and arguments
