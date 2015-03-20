---
layout: post
title: Bye Bye Dropbox
categories: [code-enforcement]
description: Ordering custom paper direct from a paper mill gives quite a rush.
---
<blockquote class="twitter-tweet" lang="en"><p>After terrible <a href="https://twitter.com/Dropbox">@Dropbox</a> support, happily moving <a href="https://twitter.com/DebbieUrbanski">@DebbieUrbanski</a> over to <a href="https://twitter.com/ownCloud">@ownCloud</a> with s3ql storage = pennies for ∞ space. Great combo.</p>&mdash; Harold Kyle (@harold_kyle) <a href="https://twitter.com/harold_kyle/status/521862162546188288">October 14, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I thought I was doing [my wife](http://debbieurbanski.com) a favor by setting her up with [Dropbox](https://www.dropbox.com), so that she could sync her writing notes between her laptop and her desktop computer. Of course, this worked for a while, and was very smooth. That is, until *somehow* her humongous database of writing research (we're talking several megabytes of text files here, by the way) synced an empty version across all her devices. No more database. Well, this should have been an easy process of restoring a deleted file, but, to save you the story, we entered Dropbox Support hell. Since we have lost hope of Dropbox helping, her database is gone.

I feel a little bad in retrospect, because for the past year and a half I've had my own way of syncing files that works *much* better. The "last straw" that prompted me to flee Dropbox was the huge Dropbox cache file which continually filled up my PC hard drive...and kept filling up the drive as soon as I'd cleared out space. 

So, I went out on a limb and installed a free file syncing server. I've been running [ownCloud](http://owncloud.org/) on one of my webservers, happily syncing files via an infinitely large [s3ql](https://bitbucket.org/nikratio/s3ql/overview) hard drive, ever since. This server was running for something else anyway, so my only additional cost has been the $0.03 per GB storage each month. s3ql is a dependable way to mount [s3 storage](http://aws.amazon.com/s3/) as a hard drive on a *nix computer. Last time I checked, my annual cost for storing 5GB of documents costs less than a single fare on Syracuse's [Centro](http://centro.org) bus.

My full setup has some other perks:

* The s3ql drive storing the data is encrypted with my own password. No snooping.
* The s3ql drive is backed up with an [duplicity](http://duplicity.nongnu.org) daemon, so I can do point-in-time restores on any file (should, for instance a file sync an incorrect version). This doubles the storage space needed, so I guess now it's less than *round-trip* Centro bus fare.
* Command-line access to the filesystem, in case of emergency.

[ownCloud](http://owncloud.org/) has done a solid job. An iPhone app and a web interface allow Dropbox-style mobility and sharing, so I have not missed any features since I left Dropbox. It's been solid and I haven't experienced a single sync error in the whole time. Sure, there was some extra setup at the outset but the results have more than paid for this time. My only complaint is that many iDevice apps are set up for Dropbox but don't have a similar ownCloud interface, but this has never been too much trouble to work around. Kudos to ownCloud and to s3ql.