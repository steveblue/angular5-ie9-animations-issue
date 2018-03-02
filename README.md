This repository reproduces an issue with BrowserAnimationsModule and NoopAnimationsModule in IE9. The issue is reproducible in `6.0.0-beta.6` and `5.2.7`.

When either BrowserAnimationsModule or NoopAnimationsModule is injected into `app.module.ts` and a `@Component` contains an `animations` config IE9 will print the error `TypeError: Object doesn't support property or method 'apply' ` in the console and block the page from loading.

The expectation is that either module can be injected into an application and the experience will degrade gracefully for IE9.

This example uses private methods available in `@angular/animations/browser` to provide the `NoopAnimationDriver` only for IE9. This of course is not ideal, but should get the job done so an application could gracefully degrade for IE9.


```
   providers: [
     { provide: AnimationDriver, useFactory: function animationFactory(): any {
         if (navigator.userAgent.indexOf("Trident/5.0;") > -1) {
            return new ɵNoopAnimationDriver();
         } else {
            return new ɵWebAnimationsDriver();
         }
     }}
    ]
```


This project uses `angular-rollup`. To build this project:

- `npm i -g angular-rollup@latest rimraf`
- `yarn install`
- `ngr build dev --watch --serve`
- View `http://localhost:4200` in IE9
