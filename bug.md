

####bugs

1. BrowserAnimationsModule引入导致问题：
```
message: "Uncaught (in promise): Error: BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.\nBrowserModule@webpack-internal:///../../../../._@angular_platform-browser@5.0.3@@angular/platform-browser/esm5/platform-browser.js:4616:19
```
https://github.com/primefaces/primeng/issues/2376