---
layout: post
title:  "Project I am Currently Working on"
date:   2016-7-13 12:44am
author: Manuel Osorio
categories: "Thoughts"
keywords: "Css framework, html5, video"
permalink: blog/posts/2016/july/:title/
preview: I haven't posted anything for several months now. The reason for that is because I have been highly motivated to write. That is no excuse but...
---
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I haven't posted anything for several months now. The reason for that is because I have been highly motivated to write. That is no excuse but I'm going to get back to posting again. I want to be more consistent this time around. That being said I still will be posting new content on this blog every other Wednesday. My goal is to eventually be able to post weekly instead of every 2 weeks.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### What I am working on Currently?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Besides making content for this blog I am working on my CSS framework. At the moment I have a navigation bar, a grid system, html5 video. I will be working on styling bottoms and form inputs next.
Below I provided code snippets of the html for the default navigation bar and html5 video.  
<br />
Sorry it's a short post. Have a great day, <br />
&nbsp;&nbsp;&nbsp;Manuel Osorio

<br />
<h4> Markup for Navigation Bar. </h4>

```html
<div class="nav default fixed">
  <div class="left">

    <div class="logo">Project Genesis</div>
  </div>

  <div class="right">

    <div class="container">
      <a href="#1">Link 1</a>
      <a href="#2">Link 2</a>
      <a href="#3">Link 3</a>
    </div>
    <div class="menu default">
      <div class="menu-bar"></div>
      <div class="menu-bar"></div>
      <div class="menu-bar"></div>
    </div>
  </div>
</div>
```
<br>
<h4> Markup for HTML5 Video. </h4>
``` html
<div id="video_player">
    <video id="video">
    <source src="http://files.simey.me/html5-vids/trailer.mp4" type="video/mp4">
    <!-- Safari / iOS, IE9 -->

    <source src="http://files.simey.me/html5-vids/trailer.webm" type="video/webm">
    <!-- Chrome10+, Ffx4+, Opera10.6+ -->

    <source src="http://files.simey.me/html5-vids/trailer.ogv" type="video/ogg">
    <!-- Firefox3.6+ / Opera 10.5+ -->

    <div class="loading">
      I have a bad feeling about this... <br>
      ... your browser doesn't support the video format!
    </div>

    </video>
    <div id="video_controls_bar">
      <button id="playpausebtn"><i class="pg-play"></i></button>
      <input id="seekslider" type="range" min="0" max="100" value="0" step="1">
      <span id="time">
        <span id="cTimeText">00:00</span>  / <span id="dTimeText">00:00</span>
      </span>
      <button id="mutebtn"><i class="pg-max-vol"></i></button>
      <input id="volumeSlider" type="range" min="0" max="100" value="100" step=".05">
      <button id="fullscreenbtn"><i class="pg-enter-fullscrn"></i></button>
    </div>


</div>
```
