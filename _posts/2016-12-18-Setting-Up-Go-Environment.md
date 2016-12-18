---
layout: post
title:  "Setting Up Go Environment"
date: 2016-12-18 7:50:26 -0600
categories: Go Projects
---
Writing out how I set up my environment so I can remember later:

I\'ve downloaded the `go1.7.4darwin-amd64.pkg` from [golang](https://golang.org/dl/). Upon installing the package, the `usr/local/go/bin` directory was put in my `PATH` environment variable.

Now I need to figure out where to set my `GOPATH` to. According to the documentation, the `GOPATH` environment variable "specifies directories containing Go projects and their binaries outside the `root` folder for Go".

Translation: it specifies where to look for Go code. Does that mean for every Go project, the `GOPATH` will be different?

Well according to the wiki, we use a single GOPATH:

> Even though the GOPATH may be a list of directories, it is generally sufficient to use a single GOPATH for all Go code on your machine. Since all packages retrieved with "go get" have a unique URL (and thus a unique path on disk), having more than one GOPATH is almost never necessary when building with the Go tool.

I guess I\'ll just create a directory that will contain all my Go code and add the following lines to my `~/.bash_profile` so that I won't have to set it every time I open my terminal.

```bash
export GOPATH="/Users/sarahchen/Documents/Personal/go"
export PATH="${GOPATH//://bin:}/bin:$PATH"
```

Type `source ~/.bash_profile` to reload the file and apply to your current terminal session.

Run `go env` to check all the environment variables for Go.

Word of advice - that last bit for setting the path environment variable, `:$PATH`, is quite important. I accidentally didn\'t have it, and I immediately received these terrifying errors.

```bash
$ cd
-bash: tail: command not found
-bash: cut: command not found
-bash: sed: command not found
```

But ey, all is well! Fixed it by just resetting my PATH environment variables. To test it all, I followed this  [link](https://www.golang-book.com/guides/machine_setup#osx-finished) and celebrated by playing some Tetris.

Running a hello, world program:

![]({{site.baseurl}}/assets/img/hello-world-golang.jpg)

Success! Setting up environments always takes awhile. But now to actually begin the ray tracing project! WAHOOO. Time to read the [docs](https://golang.org/doc/code.html).
